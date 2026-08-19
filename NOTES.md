# 教学笔记（NOTES）

## 用户画像（2026-08-18 首次确立）
- 计算机专业本科毕业；有 Python 基础（与 AI 协作写过小工具），高级语法不熟
- 懂 C 语言语法，但只做过课程设计水平的项目
- 深度学习背景：熟悉 YOLO 目标检测、语义分割
- TypeScript：零起点。**重要：dsh 是 TypeScript monorepo（约 220 个包），语言课必须与架构课交织**
- 环境：Windows + Git Bash；源码运行需 Node.js + pnpm

## 教学偏好（用户明确提出，务必遵守）
- 引导式教学：通过提问让用户自己悟出答案
- 拒绝一次性塞入大段理论
- 拒绝直接给出最终源码——先引导，后揭示
- 中文授课
- （L1 后新增）**要多动手写代码**：从 L3 起每课配小型编码练习，阶段 4 起安排大型实战（写工具、组装 preset）
- （L1 后新增）**工程基础与设计模式需补课**：用户自述完整工程代码看得少、设计模式不清楚——每逢模式首次出现，给「背景补丁」小节（一句话是什么 + 生活类比 + dsh 位置）；已建 reference/0002 设计模式参考卡；包管理/构建/测试等工程概念随用随补

## 课程路线图（草案，随 learning-records 动态调整）
- 阶段 0 · 地图与运行：架构地图（L1）→ 跑起来看一次真实 turn（L2）
- 阶段 1 · TS 速成：C/Python → TS 映射（L3）→ 读码必备进阶特性（L4）
- 阶段 2 · Cordis 框架：Context/插件（L5）→ Service/事件（L6）→ Fiber 生命周期（L7）
- 阶段 3 · 产品脊柱：Session 事件溯源（L8）→ Agent 契约/Inbox（L9）→ ReactLoopAgent（L10–11）→ ToolRuntime（L12）→ SystemPrompt（L13）→ LLM seam（L14）
- 阶段 4 · 组合与扩展：scope/preset/patch（L15）→ 实战写工具（L16）→ 组装 preset（L17）→ 测试体系（L18）
- 阶段 5 · 输出：提 PR（L19）→ 毕业项目：CV 领域专属 Agent（L20+）

## 工作备忘
- 2026-08-18：探索代理已产出完整架构地图；关键类行号见 RESOURCES.md 源码精读清单
- 官方文档中文版齐全且质量高，一切解释以 `docs/*.zh.md` 为准，不用二手资料
- 项目是 TypeScript + pnpm monorepo；`python/` 下只是薄 SDK（子进程 + JSON-RPC），不是核心
- 教学工作区组件：`assets/style.css`（共享样式）、`assets/quiz.js`（测验组件），课程 HTML 须引用
