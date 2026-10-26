import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Faq} from '../components/Sections'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Faq locale={locale} basePath={basePath}/></Shell>}
