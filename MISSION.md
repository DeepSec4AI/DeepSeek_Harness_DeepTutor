# Mission: 精读 DeepSeek Harness（dsh），直到能改写它、贡献它、并复刻出自己领域的 Agent

## Why
用户想像 DeepSeek 团队构建 dsh 那样，为自己深耕的 CV / 深度学习领域（如自动标注、训练流水线助手）构建一个专属 Agent。为此必须真正读懂这个开源项目的架构与源码——从"只会与 AI 协作写小工具"跃迁到"能独立驾驭大型项目"。

## Success looks like
- 不看资料能画出 dsh 的架构图（插件树、三大事件域、turn/step 流程），并讲给别人听
- 能独立读懂任一核心包（session / agent-loop / tools / llm）的源码，说清其中用到的 TypeScript 语法与设计模式
- 能修改源码并通过项目的测试与门禁（vitest、oxlint、lefthook），向官方仓库提出一个高质量 PR
- 能从零组装一个自己领域的 agent：自定义工具 + 系统提示词 + preset，跑通第一个完整轮次
- 具备迁移能力：面对陌生的大型 TypeScript 项目，知道从哪里入手阅读

## Constraints
- TypeScript 零起点：用户会 C 语法、有 Python 基础，语言教学须与架构教学交织、最小够用
- 教学方式：引导式（提问驱动、小步快走），拒绝一次塞入大段理论或直接给最终源码
- 用户有深度学习背景（YOLO 目标检测、语义分割），示例与毕业项目尽量向 CV 领域倾斜
- 主教材是本仓库源码与官方文档（deepseek-harness/docs/，中文版齐全），外部资料只做补充

## Out of scope（暂定，用户可随时调整）
- React Web UI 前端内部实现（apps/web、packages/client/*）暂不深入，只了解其从 session 事件渲染的接口
- native/landlock-run（Rust 沙箱）只了解用途，不精读
- 模型训练 / 微调不在本课程范围（用户已有 DL 基础）
