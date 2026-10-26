# Kelo Marketing · AI 营销

独立的中英双语响应式营销官网。视频首屏、深色数据面板、实时分析、四阶段销售自动化、八项集成、成果指标、三档价格和玻璃 FAQ 参考原单页设计。另有同风格原创的功能、解决方案、集成、价格、关于、帮助、博客及三篇文章、联系、隐私和条款，共 14 页、28 条双语路径。

先读 `.tpl/README.md`、`.tpl/template.json`、`.tpl/project.json` 与 `.tpl/docs/`。Node 24.16.0、pnpm 9.15.4。所有依赖安装和编译在本地 Linux 文件系统执行。

- 准备：`pnpm install --frozen-lockfile`
- 开发：`pnpm dev`，默认 <http://127.0.0.1:43610>，用 `PORT` 调整端口；Ctrl+C 停止。
- 检查：`pnpm typecheck`、`pnpm lint`、`pnpm test`。
- 生产构建：`pnpm build`；启动：`pnpm start`；Ctrl+C 停止。
- 共享包：`pnpm bundle`，输出 `.work/packages`，导出 `template` 与 `host`。

不需要数据库、账户或密钥。表单仅本地校验，不发送、不保存，不连接真实营销平台、支付或 CRM。所有指标和价格为示例。

修改入口：品牌 `config/brand.ts`，双语文案 `content/data.ts`，主题 `tokens.css` / `theme.css`，公共区块 `components/`，组合页面 `pages/`，路由元数据 `meta.ts`，均位于 `src/features/site-templates/catalog/kelo-marketing/`。宿主通过 `host.tsx` 注入品牌与可选入口，不把宿主资料写入通用模板。

参考素材商业再分发许可未核实，保持 restricted / listed=false。Git 仓库：<https://github.com/weelume/kelo-marketing-template>。实际检查与剩余限制见 `.tpl/docs/VERIFICATION.md`。
