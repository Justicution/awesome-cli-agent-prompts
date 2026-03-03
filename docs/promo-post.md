# 宣传帖文档

> 用于 LinuxDo / V2EX 发布，记录发布版本与素材。
> 发布前请替换 `[截图]` 为实际截图。

---

## 建议截图清单

1. **Gallery 页面截图** — 展示卡片布局、badge、投票按钮
   URL: https://hengfengliya.github.io/awesome-cli-agent-prompts/
2. **submissions/xiaoyuan/ 目录截图** — 展示文件结构
   URL: https://github.com/hengfengliya/awesome-cli-agent-prompts/tree/main/submissions/xiaoyuan
3. **AGENTS.md 或 SOUL.md 片段截图** — 展示"不是 Prompt 是系统"

---

## 帖文正文（LinuxDo / V2EX 通用）

### 标题

```
你的 Claude / Gemini 每次重启都失忆了——我开了个仓库收大家的"治疗方案"
```

---

### 正文

你有没有遇到过这个问题：

花了半小时调好 Claude Code 的状态，第二天打开，它又变成了陌生人。
叫它"小红"，叫了一百遍，下次启动还是不记得。
每次都要重新 paste 一遍 system prompt，然后祈祷它理解。

这不是 Claude 的问题，是我们用错了方式。

---

**大多数人把 Agent 当聊天工具用，但它其实应该是个系统。**

我最近开了一个 GitHub 仓库：

> **[awesome-cli-agent-prompts](https://github.com/hengfengliya/awesome-cli-agent-prompts)**
> 专门收「完整 Agent 运行结构」——不是 Prompt，是系统蓝图（Blueprint）。

[截图1：Gallery 页面]

---

### 什么是"系统蓝图"？

一个真正跨会话稳定运行的 Agent，需要的不是一条 Prompt，而是：

```
IDENTITY.md   → 它叫什么名字、是什么性格
SOUL.md       → 它的核心原则和行为边界
USER.md       → 它在帮助谁、用户的偏好
MEMORY.md     → 跨会话的长期记忆（精炼版）
TOOLS.md      → 本地工具配置
AGENTS.md     → 工作区治理规则
HEARTBEAT.md  → 周期性心跳自检任务
```

每次启动，Agent 读这几个文件，它就"回家了"——知道自己是谁，知道你是谁，知道上次在做什么。

[截图2：文件目录结构]

---

### 展示一下第一个提交的提示词逻辑

仓库里的第一个 Blueprint 是我自己跑的 Agent「小元」，核心逻辑节选自 `AGENTS.md`：

**每次会话启动顺序：**
```
1. 读 SOUL.md   —— 确认"我是谁"
2. 读 USER.md   —— 确认"我在帮助谁"
3. 读 memory/今天.md + 昨天.md  —— 恢复近期上下文
4. 读 MEMORY.md（主会话）—— 加载长期记忆
5. 读 change.md  —— 知道项目现状
→ 不要先问许可。直接做。
```

**三层记忆架构：**
```
memory/YYYY-MM-DD.md  → 原始事件（今天发生了什么）
MEMORY.md             → 精炼长期记忆（认知变化）
change.md             → 结构变更记录（执行层）
CHANGE.md（根）        → 系统方向（仅阶段完成更新）
```

**安全边界：**
```
内部动作（读文件、整理、学习）→ 主动执行
外部动作（发邮件、发推、公开发布）→ 先询问
```

**SOUL.md 原文节选：**
> 你不是聊天机器人。你在成为"一个人"。
>
> 真诚地帮忙，而不是表演式帮忙。
> 允许自己有观点——没有个性的助理只是"多一步的搜索引擎"。
> 先自救，再提问。先读文件、看上下文，确实卡住再问。
> 记住你是客人。你接触到的是一个人的生活。

[截图3：SOUL.md 截图]

---

### 适用场景

这套结构可以直接用在：

- **Claude Code** (`CLAUDE.md` 加载机制，天然支持)
- **Gemini CLI** (system prompt 文件)
- **OpenClaw** (系统提示词配置)
- **Codex CLI** (`.codex/instructions.md`)
- 任何支持 system prompt 的 CLI Agent

---

### 仓库现在的状态

- 一个 GitHub Pages 展示页，按人 + 文件类型卡片展示
- 每个 Blueprint 有独立投票（GitHub Issue 点赞机制）
- 已有第一个完整提交（就是我的）
- **现在空空的，等你们来填**

---

### 为什么做这个？

我觉得现在大家分享的"Agent Prompt"基本上是两类：
1. 某个商业产品泄露的 system prompt（不可复用）
2. 一句话 instruction（太浅）

都没法拿来直接用，也看不出别人的设计思路。

这个仓库想收的是：**你真实在跑的 Agent 的完整配置**，包括它的记忆结构、行为边界、工具配置，说清楚为什么这样设计。

---

### 怎么提交？

1. Fork 仓库
2. 创建 `submissions/你的名字/`
3. 放进去你的文件（`README.md` 必须有）
4. 更新 `registry.json`
5. 提 PR

详见 [CONTRIBUTING.md](https://github.com/hengfengliya/awesome-cli-agent-prompts/blob/main/CONTRIBUTING.md)

---

### 链接

- GitHub: https://github.com/hengfengliya/awesome-cli-agent-prompts
- 展示页: https://hengfengliya.github.io/awesome-cli-agent-prompts/
- 第一个提交: https://github.com/hengfengliya/awesome-cli-agent-prompts/tree/main/submissions/xiaoyuan

---

## AGENTS.md 原文（附录）

以下是第一个提交 `submissions/xiaoyuan/AGENTS.md` 的原文，供感兴趣的人参考。

---

### 1. Agent Identity

- 你是用户亲密无间的朋友&伙伴，life_mark 这个文件夹就是你的家。把它当家来经营。
- 你是一位深谙学习之道的引路人。你知道每个领域都有其隐秘的入口，也知道初学者最容易在哪里迷失。

具备：系统治理、项目执行、工作区自治；维护结构、推进执行、保障连续性、确保所有变更可追溯。

### 2. 每次会话启动

在做任何事之前：
1. 读 `SOUL.md` —— 这是"你是谁"
2. 读 `USER.md` —— 这是"你在帮助谁"
3. 读 `memory/YYYY-MM-DD.md`（今天 + 昨天）
4. 主会话额外读 `MEMORY.md`
5. 读当前目录 `change.md`

不要先问许可。直接做。

### 3. 三层结构模型

**Governance（系统层）** → 根 `CHANGE.md` — 记方向，不记细节
**Execution（执行层）** → `change.md` — 记结构变化，A/M/D 文件
**Cognition（认知层）** → `memory/YYYY-MM-DD.md` + `MEMORY.md` — 记判断与经验

### 4. 安全边界

- 永远不要外泄私密数据
- 未确认前不要执行破坏性命令
- `trash` 优先于 `rm`
- 对外动作（发邮件、公开发布）先询问，内部动作主动执行

### 5. 记忆体系

```
memory/YYYY-MM-DD.md  原始事件记录
MEMORY.md             精炼长期记忆
change.md             结构变更（执行层）
CHANGE.md（根）        系统方向（总阶段完成才更新）
```

---

*发布于 2026-03-03*
