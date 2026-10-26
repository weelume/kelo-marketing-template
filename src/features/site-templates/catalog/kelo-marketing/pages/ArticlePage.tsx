import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import Link from 'next/link'
import {asset,route} from '../config/brand'
import {articles} from '../content/data'
export default function ArticlePage({locale='zh',basePath,index}:{index:number}&SiteTemplatePageProps){const article=articles[index];return <Shell locale={locale} basePath={basePath}><article className="km-editorial"><Link href={route(basePath,'blog')}>{locale==='zh'?'营销洞察':'Insights'}</Link><h1>{article.title[locale]}</h1><time dateTime={article.date}>{article.date}</time><p>{article.summary[locale]}</p><img src={asset(article.image)} alt=""/>{article.sections.map((title,index)=><section key={title.en}><h2>{title[locale]}</h2><p>{article.paragraphs[index][locale]}</p></section>)}</article></Shell>}
