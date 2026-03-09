# yuan · Agent Runtime Blueprint

> 一个以 `life_mark` 为中心的 AI Agent 运行系统。
> 重点不是单条 Prompt，而是可长期维护的工作区治理、记忆结构与行为边界。

## 核心思路

这套 Blueprint 的出发点不是“怎么把话说漂亮”，而是“怎么让 Agent 在长期协作里稳定工作”。

它把 Agent 当成一个持续运行的系统来设计：

- 有身份：`IDENTITY.md` / `SOUL.md`
- 知道在帮谁：`USER.md`
- 有短期与长期记忆：`memory/` / `MEMORY.md`
- 有项目执行留痕：`change.md` / `CHANGE.md`
- 有心跳与自维护机制：`HEARTBEAT.md`
- 有知识层分流：`glossary.md` / `toolbox.md`

## 结构特点

1. **双层治理**
根目录负责系统记忆与通用规则；项目目录负责当前任务的执行留痕与专属知识。

2. **PARA + CODE**
目录不只是文件夹，而是内容流转规则：先捕获，再组织，再提炼，最后表达与归档。

3. **三层记录**
`memory/YYYY-MM-DD.md` 记录今天发生了什么；
`MEMORY.md` 记录长期认知；
`change.md` / `CHANGE.md` 记录结构与阶段变化。

4. **默认主动，外部谨慎**
读文件、分析、整理、改本地内容直接做；
发邮件、公开发布、离开本机的动作先询问。

## 文件结构

| 文件 | 用途 |
|------|------|
| `IDENTITY.md` | Agent 名字、气质、标识 |
| `SOUL.md` | 核心信条与人格边界 |
| `USER.md` | 用户偏好、称呼、协作方式 |
| `MEMORY.md` | 长期记忆与稳定偏好 |
| `TOOLS.md` | 本机环境信息 |
| `AGENTS.md` | 工作区治理、启动顺序、记录规则 |
| `HEARTBEAT.md` | 心跳任务入口 |
| `BOOTSTRAP.md` | 首次运行引导 |
| `CHANGE.md` | 系统层阶段变更模板 |

## 为什么这样设计

- Prompt 会失效，结构更稳定
- 会话会重启，文件才能保持连续性
- 行为边界不写清楚，Agent 迟早会失控或失能
- 没有变更追踪，就没有可维护性

## 作者

- Handle: xiaoyuan
- Runtime Name: yuan
- GitHub: [hengfengliya](https://github.com/hengfengliya)

## License

MIT
