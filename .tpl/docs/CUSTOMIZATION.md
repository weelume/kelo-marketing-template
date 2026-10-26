# 修改指南

品牌：修改 `config/brand.ts` 的双语名称、Logo 和年份。文案：修改 `content/data.ts`，中英文一起维护。主题：修改 `tokens.css`，不要逐页重复覆盖颜色。组件：修改 `components`，保留各自触发、节奏与无障碍属性。

新增页面：在 `pages` 建组合页面，同步 `meta.ts`、`.tpl/template.json` 的页面列表和双语名称。修改导航后检查中英文对应页、查询参数与锚点保留。字体、图片和视频在本地素材目录维护，并同步 ASSETS.json 与许可记录。

运行 `pnpm typecheck`、`pnpm lint`、`pnpm test`，涉及布局或交互时使用三端真实浏览器验证，必要时在本地 Linux 运行 `pnpm build`。不使用旧截图或旧报告冒充新代码验收。
