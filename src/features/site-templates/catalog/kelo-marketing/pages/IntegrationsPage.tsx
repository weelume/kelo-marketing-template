import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Integrations} from '../components/Sections'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Integrations locale={locale} basePath={basePath} searchable/></Shell>}
