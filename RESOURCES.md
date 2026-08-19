# DeepSeek Harness 精读资源

主教材是仓库自带文档（`deepseek-harness/docs/`，均有中文版 .zh.md）。以下路径均相对于 `deepseek-harness/`。

## Knowledge

### 项目一手文档（最高信任级）
- `docs/architecture.zh.md` — 架构总览：插件树、profile/bundle 组合分层、turn/step 流程、能力 seam、扩展点归属表。每课的锚点文档。
- `docs/cordis-primer.zh.md` — Cordis 入门：插件 / 服务 / 事件 / 可逆副作用模型。阶段 2 前必读。
- `docs/cordis-tutorial/index.md` — Cordis 动手教程系列。
- `docs/agent-lifecycle.zh.md` — 轮次时序图，读 agent-loop 源码时的地图。
- `docs/tool-execution-pipeline.zh.md` — 工具执行流水线（pre-execute → execute → post-execute）。
- `docs/capability-seams.zh.md` — 能力 seam 三角色（Definition / Provider / Consumer），理解"一切可替换"的关键。
- `docs/glossary.zh.md` — 官方术语表，与本地 `reference/0001` 术语卡对照使用。
- `docs/subsystems/core.zh.md` — core 包群职责（agent、agent-loop、session、tools…）。
- `docs/testing.zh.md` — 测试体系：单文件 100% 覆盖门、真 API e2e 策略、replay 快照测试。
- `docs/defensive-patterns.zh.md` — 防御性模式：深冻结、dispose 顺序、精确身份嵌套。
- `docs/event-producer-consumer.zh.md` — 每个事件的生产方 / 消费方映射表。
- `docs/cookbook/extension-cookbook.zh.md` — 扩展实操手册总索引（下含 adding-a-tool / adding-a-package / adding-an-llm-adapter 等分步指南）。
- `CONTRIBUTING.zh.md` — 贡献流程与 PR 规范（阶段 5 目标文档）。

### 语言与模式（补充信源）
- [TypeScript 官方 Handbook（中文）](https://typescriptlang.org/zh/docs/handbook/intro.html) — 类型系统、接口、泛型各页随用随查。
- TypeScript Handbook: Narrowing 与 Discriminated Unions 两节 — 读 dsh 源码的基本功（源码大量使用可辨识联合）。
- [Refactoring.Guru 设计模式（中文）](https://refactoringguru.cn/design-patterns) — Registry、Strategy、Observer、中介者模式对照。
- [Cordis 论文：A Programming Paradigm for Spatiotemporal Composability](https://github.com/cordiverse/paper) — 阶段 2 的理论背景，无中文译本，需课程内消化转述。

### 源码精读清单（按教学顺序，含关键行号）
| 文件 | 规模 | 精读点 |
|---|---|---|
| `apps/cli/src/bin.ts` | 54 行 | 入口分派、`satisfies never` 穷尽性检查 |
| `vendor/cordis/src/context.ts` | ~146 行 | Proxy 依赖容器、`extend()` |
| `vendor/cordis/src/service.ts` | ~115 行 | `Service` 基类、`ctx.<key>` 声明合并 |
| `vendor/cordis/src/events.ts` | ~352 行 | 事件总线 4 种分发模式 |
| `vendor/cordis/src/fiber.ts` | ~754 行 | 插件生命周期、dispose 反序回滚 |
| `packages/core/session/src/index.ts` | 1157 行 | `Session`(L425)、`SessionStore`(L792) |
| `packages/core/agent/src/runtime-types.ts` | 292 行 | `Agent` 接口契约、`agent/*` 事件 |
| `packages/core/agent/src/inbox.ts` | 短 | 双通道输入队列 |
| `packages/core/agent-loop/src/agent.ts` | 496 行 | `ReactLoopAgent`(L64)：循环心脏 |
| `packages/core/tools/src/index.ts` | 1946 行 | `ToolDefinition`(L222)、`ToolRuntime`(L787) |
| `packages/core/system-prompt/src/index.ts` | 545 行 | 提示词分片组装 |
| `packages/llm/llm/src/index.ts` | 947 行 | `LlmAdapter`(L180)、`LlmRuntime`(L284) |
| `packages/core/scope/src/index.ts` | 204 行 | 作用域链、WeakMap 父链 |
| `apps/cli/src/profile-boot.ts` | 300 行 | 启动组合：bundle → profile → patch 分层 |
| `packages/bundle/base/cordis.patch.yml` | 451 行 | 出厂产品定义（~70 个插件行） |

## Wisdom (Communities)
- [GitHub Discussions — deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions) — 官方问答与 bug 反馈；提 PR 前可在此找方向、对齐维护者意见。
- [GitHub topic: dsh-plugin](https://github.com/topics/dsh-plugin) — 第三方插件生态，写自己 Agent 时参考他人 preset 的最佳场所。
- DeepSeek Harness 企微群（见 `README.zh.md` 二维码）— 中文实时社区，维护者在群。
- [r/typescript](https://www.reddit.com/r/typescript/) — TS 语言问题的高信社区（备选）。

## Gaps
- Cordis 论文无中文译本——课程内消化后转述给用户。
- 尚未发现 dsh 的第三方中文深度解读文章；一切以官方中文文档为准，避免二手误导。
- TS 进阶特性（声明合并、条件类型等）的中文高质量讲解分散，计划以官方 Handbook + 课内实例补足。
