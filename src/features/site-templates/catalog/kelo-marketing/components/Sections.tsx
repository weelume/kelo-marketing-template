'use client'
import Link from 'next/link'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import {useState} from 'react'
import {asset,route} from '../config/brand'
import {headings,integrations,metrics,plans,faqs,articles} from '../content/data'
import {Heading,Reveal,type SectionProps} from './Shell'
export function Integrations({locale,basePath,searchable=false}:SectionProps&{searchable?:boolean}) {
  const [query,setQuery]=useState(''),zh=locale==='zh',filtered=integrations.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()))
  return <section className="km-section km-container" id="integrations"><Heading title={headings.integrations[0][locale]} body={headings.integrations[1][locale]} split/><div className="km-integration-actions"><Link className="km-button km-outline" href={route(basePath,'contact')}>{zh?'申请新集成':'Request app'}</Link>{!searchable&&<Link className="km-button km-black" href={route(basePath,'integrations')}>{zh?'查看全部集成':'See all integrations'}</Link>}</div>{searchable&&<label className="km-filter">{zh?'搜索集成':'Search integrations'}<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder={zh?'输入应用名称':'App name'}/></label>}<div className="km-integrations-grid">{filtered.map((integration,index)=><Reveal key={integration.name} delay={index*.05} className="km-integration-card"><div className="km-integration-icon"><img src={asset(integration.icon)} alt=""/></div><h3>{integration.name}</h3><p>{integration.body[locale]}</p></Reveal>)}</div>{filtered.length===0&&<p role="status">{zh?'没有匹配的集成，请尝试其他名称。':'No matching integration. Try another name.'}</p>}</section>
}
export function Results({locale}:SectionProps) {
  return <section className="km-results" id="about"><div className="km-container"><Heading title={headings.results[0][locale]} body={headings.results[1][locale]} split bodyX={20} bodyDelay={.2}/></div><div className="km-results-landscape" style={{backgroundImage:`url(${asset('interior.jpg')})`}}><Reveal className="km-metrics" y={40} duration={.8} delay={.3}>{metrics.map((metric,index)=><div key={metric.value}><div className="km-between"><small>00{index+1}</small><span className="km-mini-bars" aria-hidden="true">{[40,60,30,80].map((height,bar)=><i key={bar} style={{height:height+'%',opacity:bar<=index?1:.2}}/>)}</span></div><strong>{metric.value}</strong><p>{metric.label[locale]}</p></div>)}</Reveal></div></section>
}
export function Pricing({locale,basePath}:SectionProps) {
  return <section className="km-section km-container" id="pricing"><Heading title={headings.pricing[0][locale]} body={headings.pricing[1][locale]}/><div className="km-pricing-grid">{plans.map((plan,index)=><Reveal key={plan.name} delay={.1+index*.15} className={`km-plan ${index===2?'km-plan-enterprise':''}`}><h3>{plan.name}</h3><p>{plan.body[locale]}</p><div className="km-price"><strong>${plan.price}</strong><span>{locale==='zh'?'每月':'per month'}</span></div><ul>{plan.items.map(item=><li key={item.en}>{item[locale]}</li>)}</ul><Link className="km-button km-green" href={route(basePath,'contact')}>{locale==='zh'?'联系团队':'Get in Touch'}</Link></Reveal>)}</div></section>
}
export function Faq({locale}:SectionProps) {
  const [open,setOpen]=useState<number|null>(null),reduce=useReducedMotion()
  return <section className="km-section km-container" id="faq"><Heading title={headings.faq[0][locale]} body={headings.faq[1][locale]}/><div className="km-faq-landscape"><img className="km-faq-backdrop" src={asset('landscape.jpg')} alt=""/><div className="km-faq">{faqs.map((faq,index)=><div className="km-faq-item" key={faq.q.en}><h3><button type="button" aria-expanded={open===index} aria-controls={`km-answer-${index}`} id={`km-question-${index}`} onClick={()=>{setOpen(open===index?null:index);console.debug('[Kelo Marketing FAQ]',{index,open:open!==index})}}>{faq.q[locale]}<motion.span aria-hidden="true" animate={{rotate:open===index?180:0}} transition={{duration:reduce?0:.3,ease:[.23,1,.32,1]}}>⌄</motion.span></button></h3><AnimatePresence initial={false}>{open===index&&<motion.div id={`km-answer-${index}`} role="region" aria-labelledby={`km-question-${index}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduce?0:.4,ease:[.23,1,.32,1]}} className="km-faq-answer"><p>{faq.a[locale]}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
}
export function ArticleCards({locale,basePath}:SectionProps) {
  return <div className="km-article-grid">{articles.map((article,index)=><Reveal key={article.slug} delay={index*.1}><Link href={route(basePath,article.slug)} className="km-article-card"><div><img src={asset(article.image)} alt=""/></div><time dateTime={article.date}>{article.date}</time><h2>{article.title[locale]}</h2><p>{article.summary[locale]}</p></Link></Reveal>)}</div>
}

