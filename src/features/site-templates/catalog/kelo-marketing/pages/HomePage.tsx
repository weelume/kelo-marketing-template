import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Hero} from '../components/Hero'
import {Features} from '../components/Features'
import {Workflow} from '../components/Workflow'
import {Integrations,Results,Pricing,Faq} from '../components/Sections'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props} hero><Hero {...props}/><Features {...props}/><Workflow {...props}/><Integrations {...props}/><Results {...props}/><Pricing {...props}/><Faq {...props}/></Shell>}
