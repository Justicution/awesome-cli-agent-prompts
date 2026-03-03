const REPO_OWNER = 'hengfengliya';
const REPO_NAME = 'awesome-cli-agent-prompts';
const REGISTRY_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/registry.json`;
const GH_API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

// Canonical file types in display order
const FILE_TYPES = [
  'IDENTITY', 'SOUL', 'USER', 'MEMORY',
  'TOOLS', 'AGENTS', 'HEARTBEAT', 'BOOTSTRAP',
  'PRODUCT', 'PLAN', 'TASK', 'CHANGE'
];

// Fetch +1 reaction count for a GitHub Issue
async function fetchVoteCount(issueNumber) {
  if (!issueNumber) return 0;
  try {
    const res = await fetch(
      `${GH_API}/issues/${issueNumber}/reactions`,
      { headers: { Accept: 'application/vnd.github.squirrel-girl-preview+json' } }
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return Array.isArray(data) ? data.filter(r => r.content === '+1').length : 0;
  } catch {
    return 0;
  }
}

function buildCard(submission, votes) {
  const fileBadges = FILE_TYPES.map(type => {
    const present = submission.files && submission.files[type];
    return `<span class="badge ${present ? 'badge--present' : 'badge--absent'}" title="${type}.md ${present ? '✓' : '—'}">${type}</span>`;
  }).join('');

  const tags = (submission.tags || [])
    .map(t => `<span class="tag">#${t}</span>`).join('');

  const voteUrl = submission.voting?.issue_url
    || `https://github.com/${REPO_OWNER}/${REPO_NAME}/issues`;

  const viewUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/main/${submission.path}`;

  const githubLink = submission.author?.github
    ? `https://github.com/${submission.author.github}`
    : null;

  const authorHtml = githubLink
    ? `<a class="card__handle" href="${githubLink}" target="_blank" rel="noopener">@${submission.author.handle}</a>`
    : `<span class="card__handle">@${submission.author.handle}</span>`;

  return `
    <article class="card" data-votes="${votes}" data-submitted="${submission.submitted_at || ''}">
      <div class="card__header">
        <div class="card__author">
          ${authorHtml}
          <span class="card__display">${submission.author?.display_name || ''}</span>
        </div>
        <a class="vote-btn" href="${voteUrl}" target="_blank" rel="noopener" title="React with 👍 on GitHub to vote">
          ▲ <span class="vote-count">${votes}</span>
        </a>
      </div>
      <p class="card__desc">${submission.description || ''}</p>
      <div class="card__files">${fileBadges}</div>
      ${tags ? `<div class="card__tags">${tags}</div>` : ''}
      <div class="card__footer">
        <a href="${viewUrl}" target="_blank" rel="noopener">View Files →</a>
        <span class="card__meta">${submission.submitted_at || ''} · ${submission.license || 'MIT'}</span>
      </div>
    </article>
  `.trim();
}

function renderGrid(submissions, sortBy, filterFile) {
  let list = [...submissions];

  if (filterFile) {
    list = list.filter(s => s.files && s.files[filterFile] === true);
  }

  if (sortBy === 'votes') {
    list.sort((a, b) => b._votes - a._votes);
  } else if (sortBy === 'newest') {
    list.sort((a, b) => (b.submitted_at || '').localeCompare(a.submitted_at || ''));
  }

  const grid = document.getElementById('submissions-grid');
  const countEl = document.getElementById('count');

  if (list.length === 0) {
    grid.innerHTML = '<p class="state-msg">No submissions match this filter.</p>';
    if (countEl) countEl.textContent = '0 submissions';
    return;
  }

  grid.innerHTML = list.map(s => buildCard(s, s._votes)).join('');
  if (countEl) countEl.textContent = `${list.length} submission${list.length !== 1 ? 's' : ''}`;
}

async function main() {
  const grid = document.getElementById('submissions-grid');
  grid.innerHTML = '<p class="state-msg">Loading submissions…</p>';

  let registry;
  try {
    const res = await fetch(REGISTRY_URL);
    registry = await res.json();
  } catch (err) {
    grid.innerHTML = '<p class="state-msg">Failed to load submissions. Please try again later.</p>';
    console.error('Failed to load registry.json', err);
    return;
  }

  const submissions = registry.submissions || [];

  // Fetch all vote counts in parallel
  const voteCounts = await Promise.all(
    submissions.map(s => fetchVoteCount(s.voting?.github_issue_number))
  );

  const enriched = submissions.map((s, i) => ({ ...s, _votes: voteCounts[i] }));

  // Initial render
  renderGrid(enriched, 'votes', '');

  // Wire up controls
  const sortSelect = document.getElementById('sort-select');
  const filterSelect = document.getElementById('filter-file');

  sortSelect.addEventListener('change', () => {
    renderGrid(enriched, sortSelect.value, filterSelect.value);
  });
  filterSelect.addEventListener('change', () => {
    renderGrid(enriched, sortSelect.value, filterSelect.value);
  });
}

main();
