'use client'
import {createContext, useContext, type ReactNode} from 'react'
import {brand, type Bilingual} from './config/brand'
export interface KeloMarketingHostConfig {
  brandName: Bilingual; logo?: string; lightLogo?: string; marketplaceHref?: string;
  marketplaceLabel?: Bilingual; marketplaceAriaLabel?: Bilingual; filing?: ReactNode
}
const Context = createContext<KeloMarketingHostConfig>({brandName: brand.name, logo: brand.logo, lightLogo: brand.logo})
export function KeloMarketingHostProvider({children, ...config}: KeloMarketingHostConfig & {children: ReactNode}) {
  return <Context.Provider value={config}>{children}</Context.Provider>
}
export const useKeloMarketingHost = () => useContext(Context)
