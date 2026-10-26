import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {ArticleCards} from '../components/Sections'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><div className="km-container"><header className="km-page-heading"><h1>{locale==='zh'?'营销洞察与实践':'Marketing insights & practice'}</h1><p>{locale==='zh'?'关于信号、内容与增长的原创演示文章。':'Original demonstration articles on signals, content, and growth.'}</p></header><ArticleCards locale={locale} basePath={basePath}/></div></Shell>}
