import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Features} from '../components/Features'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Features locale={locale} basePath={basePath}/></Shell>}
