# 组合机制（profile/bundle/patch）已正确内化

用户用自己的话完整复述了配置组合机制，四个要点全部正确：profiles 目录布局（具名 profile 文件夹 + 公共 node_modules）、profile 的 package.json 按包名点名 bundles、profile 自己的 cordis.patch.yml 层（insert 新行 / 按 id 改被点名 bundle 的行）、bundle 包内部结构（package.json + 自己的 patch + 插件代码）。

**Evidence**：两轮追问后（先是"完全不懂"，经真实文件推演 + 完整目录图讲解），用户主动复述且仅需一处术语修正——把 cordis.patch.yml 称为"代码"。已纠正：patch 是声明式配置指令，但可内嵌 `!!js` 一行式 JS 表达式（用户已在 web-app patch 摘录中见过 `!!js process.env.DSH_TOOLS_MODE` 实例）。

**Implications**：
- 原计划 L15（组合机制）可大幅精简，改为实战导向；scope/preset 仍是新内容
- 讲解模式验证有效：「真实文件 + 逐层推演」比抽象定义对这个用户有效得多
- 用户尚未动手跑 dsh（L2 待完成）；组合机制目前是纸面理解，L2 实验四（--dump-config）与 ~/.dsh 目录观察是检验落地的地方
