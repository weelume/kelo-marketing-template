import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Workflow} from '../components/Workflow'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Workflow locale={locale} basePath={basePath}/></Shell>}
