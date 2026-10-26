'use client'
import {Icon} from './Icon'
import {motion,useReducedMotion} from 'framer-motion'
import {useState} from 'react'
import {asset} from '../config/brand'
import {features,headings} from '../content/data'
import {Heading,Reveal,type SectionProps} from './Shell'
export function Features({locale}:SectionProps) {
  const zh=locale==='zh',[metric,setMetric]=useState(0),reduce=useReducedMotion()
  const labels=zh?['吞吐量','延迟','可用率']:['Throughput','Latency','Uptime']
  return <section id="features" className="km-section km-container"><Heading title={headings.features[0][locale]} body={headings.features[1][locale]} split/><div className="km-feature-grid">
    <Reveal className="km-feature-card km-feature-analytics"><h3><span><Icon name="activity"/></span>{features[0].title[locale]}</h3><p>{features[0].body[locale]}</p><div className="km-live-chart"><div className="km-between"><div className="km-chart-tabs" role="group" aria-label={zh?'选择分析指标':'Select analytics metric'}>{labels.map((label,index)=><button key={label} type="button" aria-pressed={index===metric} onClick={()=>setMetric(index)}>{label}</button>)}</div><strong>{['1.2GB/s','14ms','99.99%'][metric]}<small>{['+12%','-2ms',zh?'稳定':'Stable'][metric]}</small></strong></div><div className="km-live-bars">{Array.from({length:24},(_,index)=>{
      // 使用固定波形避免随机渲染导致服务端与客户端图表不一致。
      const height=metric===0?40+(index*17%60):metric===1?10+(index*13%30):80
      return <motion.i key={`${metric}-${index}`} initial={reduce?false:{height:'20%'}} animate={{height:reduce?height+'%':['20%',height+'%']}} transition={{duration:reduce?0:1.5,repeat:reduce?0:Infinity,repeatType:'reverse',delay:reduce?0:index*.05}}/>
    })}</div><small className="km-stream">{zh?'实时数据流 · 演示':'Live_Stream_Active · Demo'}</small></div></Reveal>
    <Reveal className="km-feature-card km-feature-automation" delay={.1}><h3><span><Icon name="zap"/></span>{features[1].title[locale]}</h3><p>{features[1].body[locale]}</p>{(zh?['触发：新线索','操作：起草邮件']:['Trigger: New Lead','Action: Draft Email']).map((label,index)=><motion.div className="km-work-row" key={label} initial={reduce?false:{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.3+index*.1}}><span><i/>{label}</span><small>{index===0?(zh?'运行中':'Active'):(zh?'待审批':'Pending')}</small></motion.div>)}</Reveal>
    <Reveal className="km-feature-card km-api" delay={.2}><h3><span><Icon name="command"/></span>{features[2].title[locale]}</h3><p>{features[2].body[locale]}</p><pre><span className="km-code-dots">● ● ●</span>{'query GetMetrics {\n  system {\n    uptime\n    latency\n  }\n}'}<motion.i animate={{opacity:reduce?1:[1,0]}} transition={{duration:.8,repeat:reduce?0:Infinity}}/></pre></Reveal>
    <Reveal className="km-feature-card" delay={.3}><h3><span><Icon name="users"/></span>{features[3].title[locale]}</h3><p>{features[3].body[locale]}</p><div className="km-team-orbit"><i/><i/><div className="km-avatar-row">{[1,2,3,4].map(index=><motion.img key={index} src={asset(`team-${index}.jpg`)} alt={zh?`团队成员 ${index}`:`Team member ${index}`} initial={reduce?false:{scale:.8,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} transition={{delay:.4+index*.1}}/>)}</div><small>{zh?'Alex 正在编辑…':'Alex is editing...'}</small></div></Reveal>
  </div></section>
}
