import {text} from '../config/brand'
export const navigation = [
  {slug:'features', label:text('产品功能','Features')}, {slug:'solutions', label:text('解决方案','Solutions')},
  {slug:'pricing', label:text('价格方案','Pricing')}, {slug:'about', label:text('关于我们','About')},
]
export const headings = {
  features: [text('为卓越表现而设计','Engineered for\nUnrivaled Performance'),text('强大基础设施与直觉式体验相结合，让团队轻松拓展每一次增长。','Our infrastructure combines raw power with elegant simplicity, giving your team the tools to scale without friction.')],
  solutions: [text('AI 驱动的销售自动化','AI-Powered Sales Automation'),text('从发现客户到达成合作，让神经网络为整个销售流程提供动力。','Harness the power of neural networks to automate your entire sales pipeline from discovery to close.')],
  integrations: [text('连接你的整套工具','Works With Your Entire Tech Stack'),text('连接现有平台，让营销工作在熟悉的工具之间流动。此处展示集成能力，不建立真实账户连接。','Connect your existing platforms and let work flow across your tools. This demo does not connect real accounts.')],
  results: [text('真实系统\n切实成果','Real Systems.\nReal Results.'),text('清晰的表现指标，衡量持续的流程自动化与可持续业务增长。以下数据均为演示。','Clear performance indicators reflecting consistent workflow automation and sustainable business growth. All metrics are illustrative.')],
  pricing: [text('简单统一的价格\n更聪明的工作流','Simple, Unified Pricing for\nSmarter Workflows'),text('选择适合团队的方案，以下为演示价格','Choose the plan that fits your team. Illustrative pricing.')],
  faq: [text('还有什么\n想了解的','Curious about\nsomething?'),text('关于 AI 营销、协作与演示体验的直接解答。','Straightforward answers about AI marketing, collaboration, and this demo.')],
} as const
export const features = [
  {title:text('实时分析','Real-time Analytics'),body:text('通过低延迟数据管道，实时观察每一次互动。','Monitor every interaction as it happens with our low-latency data pipeline.')},
  {title:text('智能自动化','Smart Automations'),body:text('用可视化逻辑构建器，在几秒钟内组织复杂工作流。','Deploy complex workflows in seconds using our visual logic builder.')},
  {title:text('开发者 API','Developer API'),body:text('借助类型明确的 GraphQL API 构建自定义集成。','Build custom integrations with our robust, type-safe GraphQL API.')},
  {title:text('团队协作','Team Collaboration'),body:text('共享工作空间与在线状态，让整个组织保持同步。','Sync your entire organization with shared workspaces and live presence.')},
]
export const phases = [
  {tab:text('1. 连接与发现','1. Connect & Scan'),badge:text('阶段 01：分析','PHASE 01: ANALYSIS'),title:text('让 AI 发现市场中的潜在机会','AI scans your market for hidden gems.'),body:text('连接数据来源，分析客户资料，识别符合目标画像并具有明确意向的潜在客户。','Our neural engine connects to your data sources and scans millions of profiles to identify high-intent prospects that match your ideal customer profile.'),image:'landscape.jpg'},
  {tab:text('2. 个性化','2. Personalize'),badge:text('阶段 02：策略','PHASE 02: STRATEGY'),title:text('为每一位客户制定独特策略','Crafting unique strategies for every lead.'),body:text('分析行为、新闻与社交信号，生成更贴近客户需求的个性化沟通策略。','AI analyzes individual prospect behavior, recent news, and social signals to generate hyper-personalized outreach strategies that resonate.'),image:'desk.jpeg'},
  {tab:text('3. 自动执行','3. Automate'),badge:text('阶段 03：执行','PHASE 03: EXECUTION'),title:text('让智能助手有序推进沟通','Autonomous agents handle the engagement.'),body:text('通过清晰的审批边界组织触达、初步回复和会议安排，团队随时掌握进度。','Deploy AI agents that execute your outreach, handle initial responses, and schedule meetings directly into your calendar.'),image:'train.jpeg'},
  {tab:text('4. 持续优化','4. Optimize'),badge:text('阶段 04：规模化','PHASE 04: SCALE'),title:text('从每一次互动中持续学习','Continuous learning for better results.'),body:text('持续分析沟通结果，优化内容与客户定位，让长期转化表现更加清晰。','The system learns from every interaction, automatically optimizing your messaging and targeting to maximize conversion rates over time.'),image:'office.jpg'},
]
export const integrations = [
  {name:'Framer', icon:'framer.svg',body:text('自动组织网站与内容。','Deploy websites and manage content automatically.')},
  {name:'Gmail',icon:'gmail.svg',body:text('起草邮件、分类收件箱并总结对话。','Write emails, sort your inbox, and summarize conversations.')},
  {name:'Notion',icon:'notion.svg',body:text('读取页面、更新数据库并创建摘要。','Read pages, add to databases, and create summaries.')},
  {name:'Vercel',icon:'vercel.svg',body:text('组织应用交付与网站托管。','Deploy and host web applications with ease and speed.')},
  {name:'Discord',icon:'discord.svg',body:text('连接社区并组织团队互动。','Connect with your community and manage server interactions.')},
  {name:'Dropbox',icon:'dropbox.svg',body:text('在云端整理和共享文件。','Save and share files in your cloud storage.')},
  {name:'Airtable',icon:'airtable.svg',body:text('更新数据记录并追踪信息。','Update database records and track information.')},
  {name:'Shopify',icon:'shopify.svg',body:text('组织商品、订单与库存数据。','Manage products, orders, and inventory.')},
]
export const metrics = [
  {value:'1500+',label:text('每月为客户节省的小时数','HOURS SAVED FOR CLIENTS MONTHLY')},
  {value:'94%',label:text('平均错误减少比例','AVERAGE ERROR REDUCTION RATE')},
  {value:'312%',label:text('前 90 天平均投入回报','AVERAGE ROI IN FIRST 90 DAYS')},
  {value:'3X',label:text('无需新增人手的产出提升','AVERAGE OUTPUT WITHOUT NEW HIRES')},
]
export const plans = [
  {name:'Pro',price:50,body:text('适合希望减少手动操作、统一分散工作流的精简团队。','Perfect for lean teams looking to reduce manual work and bring scattered workflows together.'),items:[text('核心工作流自动化','Core workflow automation tools'),text('最多 3 名团队成员','Integrate up to 3 team members'),text('关键应用实时同步','Real-time sync across key apps'),text('每月表现报告','Monthly performance reports')]},
  {name:'Premium',price:80,body:text('适合需要更高效率与更深入洞察的成长团队。','Built for scaling teams that need efficiency and deeper insight without the tool fatigue.'),items:[text('包含 Pro 全部功能','Everything in Pro'),text('高级自动化与分析','Advanced automation & analytics'),text('不限团队用户数','Unlimited users'),text('多工具集成','Multi-tool integrations')]},
  {name:'Enterprise',price:150,body:text('为希望统一运营、加速增长的大型团队提供完整方案。','End-to-end solution for large teams ready to unify operations and accelerate growth.'),items:[text('包含 Premium 全部功能','Everything in Premium'),text('高级自动化与分析','Advanced automation & analytics'),text('完整 API 访问','Full API access'),text('专属入门协助','Dedicated onboarding specialist')]},
]
export const faqs = [
  {q:text('需要专业经验吗？','Do I need experience?'),a:text('不需要。你可以从明确的目标、现有数据和简单工作流开始，逐步了解每一步的输入、输出与审批边界。','No. Start with a clear goal, your existing data, and a simple workflow. Review the inputs, outputs, and approval boundaries at each step.')},
  {q:text('可以用于商业营销吗？','Can I use it for commercial marketing?'),a:text('业务上线前请确认生成内容、数据与素材的使用权。本模板参考图片与视频的商业再分发许可尚未核实。','Before launch, confirm rights to your content, data, and assets. Commercial redistribution rights for this template’s reference images and video remain unverified.')},
  {q:text('如何保持品牌风格一致？','Will the style stay consistent?'),a:text('品牌、主题和双语内容集中管理。修改品牌配置与主题变量即可统一更新页面。','Brand, theme, and bilingual content are centrally managed. Edit the brand configuration and theme tokens to keep pages consistent.')},
  {q:text('演示会发送营销邮件吗？','Does this demo send marketing emails?'),a:text('不会。所有表单仅在浏览器中校验，不发送、不保存，也不连接真实客户系统。','No. Forms validate locally in the browser. Nothing is sent or saved, and no real customer system is connected.')},
  {q:text('如何接入真实业务？','How do I connect a real business?'),a:text('需要先设计数据授权、服务端接口、审批与错误处理，再通过基础设施适配器连接外部平台。','Design data permissions, server APIs, approvals, and error handling first, then connect platforms through infrastructure adapters.')},
  {q:text('内容和工作流集中在哪里？','Where do content and workflows live?'),a:text('本模板提供数据面板、四阶段流程和集成展示。所有指标均为示例，不代表真实业务结果。','This template provides a dashboard, four-stage workflow, and integration showcase. Metrics are examples and do not represent real business results.')},
]
export const articles = [
  {slug:'blog/intent-signals',title:text('从意向信号开始组织营销','Start marketing with intent signals'),summary:text('让客户画像与可验证信号相结合，建立更清晰的触达优先级。','Combine customer profiles with verifiable signals to prioritize outreach.'),image:'landscape.jpg',date:'2026-10-20',sections:[text('先明确问题','Start with the problem'),text('选择可验证信号','Choose verifiable signals'),text('保留人工判断','Keep human judgment')],paragraphs:[text('在收集更多数据之前，先定义团队想帮助哪类客户解决什么问题。清晰的目标比模糊的覆盖量更有价值。','Before collecting more data, define whose problem your team can solve. A clear goal is more useful than vague reach.'),text('记录信号来源、更新时间与适用范围。把观察和推断分开，避免将偶然行为当作购买意愿。','Record the source, freshness, and scope of each signal. Separate observation from inference and avoid treating isolated behavior as buying intent.'),text('高价值沟通应保留人工审核。定期检查误判，使用反馈调整优先级，而非盲目追求自动化比例。','Keep human review for consequential outreach. Inspect false positives and use feedback to adjust priorities instead of maximizing automation for its own sake.')]},
  {slug:'blog/brand-consistency',title:text('让 AI 内容始终贴合品牌','Keep AI content on brand'),summary:text('以语气、证据和审批规则建立一致的内容标准。','Build consistent content standards around voice, evidence, and review.'),image:'desk.jpeg',date:'2026-10-18',sections:[text('建立语气样本','Create voice examples'),text('为主张提供依据','Support claims with evidence'),text('在发布前审核','Review before publication')],paragraphs:[text('收集少量经过认可的文案，说明什么表达适合品牌，以及哪些词语应避免。','Collect a small set of approved examples and explain which expressions fit the brand and which should be avoided.'),text('将产品事实与营销表达分开管理。不要让模型生成未经核实的价格、效果或客户承诺。','Manage product facts separately from marketing language. Do not let a model invent unverified prices, results, or customer commitments.'),text('按风险设置审核流程。让团队能够清晰查看修改、撤回内容并记录发布决定。','Set review requirements according to risk. Let the team inspect changes, withdraw content, and record publication decisions.')]},
  {slug:'blog/growth-metrics',title:text('用正确指标衡量自动化','Measure automation with the right metrics'),summary:text('同时观察效率、质量与客户体验，避免只看产出数量。','Track efficiency, quality, and customer experience together.'),image:'interior.jpg',date:'2026-10-15',sections:[text('先记录基线','Record a baseline'),text('同时观察质量','Track quality too'),text('持续复盘','Review continuously')],paragraphs:[text('上线前记录处理时间、错误率和客户反馈。没有基线，就难以判断自动化是否有效。','Record processing time, error rates, and customer feedback before launch. Without a baseline, the value of automation is hard to assess.'),text('节省时间不应以增加客户困扰为代价。将回复质量、退出率和人工接管纳入观察。','Time savings should not come at the cost of customer frustration. Include response quality, opt-outs, and human handovers.'),text('使用明确的时间窗口进行复盘，并说明样本范围与不确定性。将结论转化为下一次可验证的调整。','Review within a clear time window and state the sample scope and uncertainty. Turn findings into the next testable adjustment.')]},
]
