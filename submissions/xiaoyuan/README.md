# 小元 · Agent Runtime Blueprint

> 一套以"第一性原理"为核心的 AI Agent 完整运行结构。
> 不是 Prompt 集合，而是一个可持续运行、有记忆、有边界的系统。

## 理念

Agent 是系统，不是 Prompt。一个真正可用的 Agent 需要：

- 清晰的身份（IDENTITY / SOUL）
- 可持续的记忆（MEMORY + daily notes）
- 明确的行为边界（AGENTS / USER）
- 周期性的自我检查（HEARTBEAT）
- 工具与环境配置（TOOLS）

## 文件结构

| 文件 | 用途 |
|------|------|
| IDENTITY.md | 名字、人格设定、风格约定 |
| SOUL.md | 核心原则与行为边界 |
| USER.md | 用户偏好、称呼约定 |
| MEMORY.md | 长期记忆（精炼版，跨会话持久化） |
| TOOLS.md | 本地工具环境配置 |
| AGENTS.md | 工作区治理规则与记忆体系说明 |
| HEARTBEAT.md | 周期性心跳任务清单 |
| BOOTSTRAP.md | 首次启动引导（初始化后删除） |

## 设计原则

1. **第一性原理** — 先定义问题与约束，再给可执行结论
2. **三层记忆分离** — 日记（daily notes）/ 长期记忆（MEMORY）/ 结构变更（change.md）
3. **安全边界** — 内部动作主动执行，外部动作（发邮件、发推等）先询问
4. **可追溯** — 所有变更都有记录，禁止无记录的破坏性操作
5. **正交分离** — 治理、执行、认知三层互不侵犯

## 记忆体系

```
memory/YYYY-MM-DD.md   ← 原始事件记录（每日笔记）
MEMORY.md              ← 精炼长期记忆（认知变化）
change.md              ← 结构变更记录（执行层）
CHANGE.md (根)         ← 系统层方向记录（仅阶段完成时更新）
```

## 作者

- Handle: xiaoyuan
- GitHub: [hengfengliya](https://github.com/hengfengliya)

## License

MIT
