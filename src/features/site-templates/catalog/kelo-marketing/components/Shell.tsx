'use client'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {MotionConfig, motion, useReducedMotion} from 'framer-motion'
import {useEffect, useRef, useState, type ReactNode} from 'react'
import {asset, brand, route, type Locale} from '../config/brand'
import {navigation} from '../content/data'
import {useKeloMarketingHost} from '../host'
import '../theme.css'
export interface SectionProps {locale: Locale; basePath: string}
export function Reveal({children, className='', delay=0, duration=.6, y=20, x=0}: {children:ReactNode;className?:string;delay?:number;duration?:number;y?:number;x?:number}) {
  const reduce=useReducedMotion()
  return <motion.div className={className} initial={reduce?false:{opacity:0,y,x}} whileInView={{opacity:1,y:0,x:0}} viewport={{once:true}} transition={{duration:reduce?0:duration,delay:reduce?0:delay,ease:'easeOut'}}>{children}</motion.div>
}
export function Heading({title,body,split=false,bodyX=0,bodyDelay=.1}:{title:string;body?:string;split?:boolean;bodyX?:number;bodyDelay?:number}) {
  return <header className={`km-heading ${split?'km-heading-split':''}`}><Reveal><h2>{title}</h2></Reveal>{body&&<Reveal x={bodyX} y={bodyX?0:20} delay={bodyDelay}><p>{body}</p></Reveal>}</header>
}
export function BackgroundVideo({locale}:{locale:Locale}) {
  const ref=useRef<HTMLVideoElement>(null), reduce=useReducedMotion(),[failed,setFailed]=useState(false)
  useEffect(()=>{
    const video=ref.current;if(!video)return
    let visible=true,disposed=false
    // 原参考以 0.6 倍速循环；离开视区或隐藏页面时暂停，减少动态时提供手动控制。
    video.playbackRate=.6
    const sync=()=>{
      if(reduce||document.hidden||!visible){video.pause();return}
      void video.play().catch((error:unknown)=>{
        if(disposed)return
        const name=error instanceof Error?error.name:'unknown'
        if(name==='AbortError'&&(document.hidden||!visible)){console.debug('[Kelo Marketing video] 播放随可见性中断');return}
        console.warn('[Kelo Marketing video] 自动播放失败',{name});setFailed(true)
      })
    }
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:.01})
    observer.observe(video);document.addEventListener('visibilitychange',sync);sync()
    return()=>{disposed=true;observer.disconnect();document.removeEventListener('visibilitychange',sync);video.pause()}
  },[reduce])
  return <video ref={ref} className="km-hero-video" muted loop playsInline controls={!!reduce||failed} poster={asset('hero-poster.jpg')} aria-label={locale==='zh'?'营销背景视频':'Marketing background video'} onError={()=>{console.error('[Kelo Marketing video] 视频加载失败');setFailed(true)}}><source src={asset('hero.mp4')} type="video/mp4"/></video>
}
export function LanguageLink({locale,basePath}:SectionProps) {
  const pathname=usePathname(),router=useRouter(),root=locale==='en'?basePath.replace(/\/en$/,''):basePath
  const slug=pathname.startsWith(basePath)?pathname.slice(basePath.length).replace(/^\//,''):''
  const target=route(locale==='zh'?root+'/en':root,slug)
  return <Link href={target} lang={locale==='zh'?'en':'zh-CN'} aria-label={locale==='zh'?'Switch to English':'切换为中文'} onClick={event=>{event.preventDefault();router.push(target+window.location.search+window.location.hash)}}>{locale==='zh'?'EN':'中文'}</Link>
}
export function Shell({children,locale='zh',basePath,hero=false}:{children:ReactNode;locale?:Locale;basePath:string;hero?:boolean}) {
  const host=useKeloMarketingHost(),[menu,setMenu]=useState(false),button=useRef<HTMLButtonElement>(null),pathname=usePathname()
  useEffect(()=>{const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setMenu(false);button.current?.focus()}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape)},[])
  return <MotionConfig reducedMotion="user"><div className={`km ${hero?'km-home':''}`} lang={locale==='en'?'en':'zh-CN'}>
    <a className="km-skip" href="#km-main">{locale==='zh'?'跳到主要内容':'Skip to content'}</a>
    <motion.header key={pathname} className={`km-nav-wrap ${hero?'on-hero':''}`} initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.8,ease:'easeOut'}}>
      <nav className="km-nav" aria-label={locale==='zh'?'主导航':'Main navigation'}>
        <Link href={route(basePath)} className="km-brand">{host.logo&&<img src={hero?host.lightLogo:host.logo} alt=""/>}<span>{host.brandName[locale]}</span></Link>
        <div className="km-desktop-nav">{navigation.map(item=><Link key={item.slug} href={route(basePath,item.slug)}>{item.label[locale]}</Link>)}</div>
        <div className="km-nav-actions"><LanguageLink locale={locale} basePath={basePath}/><Link className="km-login" href={route(basePath,'contact')}>{locale==='zh'?'联系团队':'Log in'}</Link><Link className="km-button km-white" href={route(basePath,'contact')}>{locale==='zh'?'开始体验':'Get Started'}</Link><button ref={button} className="km-menu-button" type="button" aria-label={locale==='zh'?'切换导航菜单':'Toggle navigation menu'} aria-expanded={menu} aria-controls="km-mobile-menu" onClick={()=>setMenu(!menu)}>{menu?'×':'☰'}</button></div>
        {menu&&<motion.div className="km-mobile-menu" id="km-mobile-menu" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>{[...navigation,{slug:'blog',label:{zh:'营销洞察',en:'Insights'}},{slug:'contact',label:{zh:'联系我们',en:'Contact'}}].map(item=><Link onClick={()=>setMenu(false)} key={item.slug} href={route(basePath,item.slug)}>{item.label[locale]}</Link>)}</motion.div>}
      </nav>
    </motion.header>
    <main id="km-main">{children}</main>
    <footer className="km-footer"><div className="km-container"><div className="km-footer-top"><h2>{locale==='zh'?'新鲜营销洞察\n每周与你分享':'Subscribe to our\nmarketing insights'}</h2><LocalForm locale={locale} compact/></div><div className="km-footer-grid"><div><Link className="km-brand" href={route(basePath)}>{host.lightLogo&&<img src={host.lightLogo} alt=""/>}{host.brandName[locale]}</Link><p>{locale==='zh'?'让每一次营销更有方向。':'Give every campaign a clearer direction.'}</p></div>{[
      {title:locale==='zh'?'产品':'Product',items:[['features',locale==='zh'?'产品功能':'Features'],['solutions',locale==='zh'?'解决方案':'Solutions'],['integrations',locale==='zh'?'集成目录':'Integrations'],['pricing',locale==='zh'?'价格方案':'Pricing']]},
      {title:locale==='zh'?'公司':'Company',items:[['about',locale==='zh'?'关于我们':'About'],['blog',locale==='zh'?'营销洞察':'Insights'],['contact',locale==='zh'?'联系团队':'Contact']]},
      {title:locale==='zh'?'帮助与条款':'Support',items:[['faq',locale==='zh'?'帮助中心':'Help center'],['privacy',locale==='zh'?'隐私政策':'Privacy policy'],['terms',locale==='zh'?'服务条款':'Terms of service']]},
    ].map(group=><div key={group.title}><h3>{group.title}</h3>{group.items.map(([slug,label])=><Link key={slug} href={route(basePath,slug)}>{label}</Link>)}</div>)}</div><div className="km-footer-bottom"><span>© {brand.year} {host.brandName[locale]}</span><LanguageLink locale={locale} basePath={basePath}/>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></div></footer>
    {host.marketplaceHref&&<Link className="km-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} alt=""/>}<span>{host.brandName[locale]}</span></Link>}
  </div></MotionConfig>
}
export function LocalForm({locale,compact=false}:{locale:Locale;compact?:boolean}) {
  const [done,setDone]=useState(false),zh=locale==='zh'
  return <form className={compact?'km-subscribe':'km-contact-form'} onChange={()=>setDone(false)} onSubmit={event=>{event.preventDefault();if(!event.currentTarget.reportValidity())return;console.debug('[Kelo Marketing form]',{kind:compact?'newsletter':'contact',validated:true,sent:false,saved:false});setDone(true)}}>
    {!compact&&<><label>{zh?'姓名':'Name'}<input name="name" required maxLength={100} autoComplete="name"/></label><label>{zh?'公司名称':'Company'}<input name="company" maxLength={120} autoComplete="organization"/></label></>}
    <label><span>{zh?'邮箱地址':'Email address'}</span><input name="email" type="email" required maxLength={254} autoComplete="email" placeholder={zh?'输入你的邮箱':'Enter your email'}/></label>
    {!compact&&<><label>{zh?'意向方案':'Interested plan'}<select name="plan"><option>Pro</option><option>Premium</option><option>Enterprise</option></select></label><label className="km-full">{zh?'告诉我们你的需求':'Tell us about your needs'}<textarea name="message" rows={5} minLength={10} maxLength={3000} required/></label></>}
    <button type="submit" className="km-button km-green">{compact?(zh?'校验订阅':'Review subscription'):(zh?'检查填写内容':'Review request')}</button>
    <p className="km-form-note" role="status">{done?(zh?'校验通过；演示内容未发送、未保存。':'Validated. Demo information was not sent or saved.'):(zh?'仅本地演示：不发送、不保存填写内容。':'Local demo only. Nothing is sent or saved.')}</p>
  </form>
}
