import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,readdir,stat} from 'node:fs/promises'
const root=new URL('../',import.meta.url),catalog='src/features/site-templates/catalog/kelo-marketing/'
const read=path=>readFile(new URL(path,root),'utf8')
test('双语路由声明覆盖全部独立页面，路径无重复',async()=>{
  const template=JSON.parse(await read('.tpl/template.json')),surface=template.surfaces[0]
  assert.deepEqual(surface.locales,['zh','en']);assert.equal(surface.pages.length,14)
  assert.equal(new Set(surface.pages.map(page=>page.slug)).size,14)
  for(const page of surface.pages)assert.ok(page.title&&page.localizedTitles.en)
  const meta=await read(catalog+'meta.ts')
  for(const path of [...meta.matchAll(/import\('\.\/pages\/([^']+)'\)/g)])await stat(new URL(catalog+'pages/'+path[1]+'.tsx',root))
})
test('演示表单不调用外部接口或持久化，也不虚报发送成功',async()=>{
  const shell=await read(catalog+'components/Shell.tsx')
  assert.match(shell,/preventDefault\(\)/);assert.match(shell,/reportValidity\(\)/)
  assert.match(shell,/未发送、未保存/);assert.match(shell,/sent:false,saved:false/)
  assert.doesNotMatch(shell,/fetch\(|localStorage|sessionStorage|sendBeacon|XMLHttpRequest|Subscribed!|已发送/)
})
test('运行素材本地托管，不引入装饰箭头或随机图表',async()=>{
  async function files(path){const result=[];for(const entry of await readdir(new URL(path,root),{withFileTypes:true})){const child=path+entry.name;if(entry.isDirectory())result.push(...await files(child+'/'));else result.push(child)}return result}
  for(const file of await files(catalog)){
    const source=await read(file)
    assert.doesNotMatch(source,/(?:src|href)=(?:\{)?["']https?:|url\(["']?https?:/,file)
    assert.doesNotMatch(source,/↗|ArrowUpRight|Math\.random\(/,file)
  }
  for(const file of ['hero.mp4','hero-poster.jpg','landscape.jpg','desk.jpeg','train.jpeg','office.jpg','team-1.jpg','team-2.jpg','team-3.jpg','team-4.jpg','framer.svg','gmail.svg','notion.svg','vercel.svg','discord.svg','dropbox.svg','airtable.svg','shopify.svg'])assert.ok((await stat(new URL('public/templates/kelo-marketing/'+file,root))).size>0,file)
})
test('动效与视频保留各自行为及减少动态处理',async()=>{
  const shell=await read(catalog+'components/Shell.tsx'),workflow=await read(catalog+'components/Workflow.tsx'),hero=await read(catalog+'components/Hero.tsx')
  assert.match(shell,/playbackRate=\.6/);assert.match(shell,/IntersectionObserver/);assert.match(shell,/visibilitychange/);assert.match(shell,/reducedMotion="user"/)
  assert.match(workflow,/mode="wait"/);assert.match(workflow,/ArrowRight/);assert.match(workflow,/role="tabpanel"/)
  assert.match(hero,/pathLength/);assert.match(hero,/aria-pressed/)
})
