# 架构

Next.js App Router 解析中英文路径，动态导入页面。React 19、TypeScript strict，复用已有 framer-motion，无新增第三方依赖。

`src/features/site-templates/catalog/kelo-marketing/config` 管理品牌、语言与路径；`content` 管理双语数据；`tokens.css` 管理主题；`theme.css` 管理响应式布局；`components` 管理 Shell、Hero、Features、Workflow 和其他公共区块；`pages` 组合页面；`meta.ts` 注册路由。`host.tsx` 为通用品牌注入边界。

运行素材在 `public/templates/kelo-marketing`，市场截图在 `.tpl/assets`。模板不连接后端、数据库、真实账户或外部发送服务。
