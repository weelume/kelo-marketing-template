import type {CSSProperties} from 'react'
const paths = {
  grid: ['M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z'],
  folder: ['M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z'],
  activity: ['M2 12h4l3-9 6 18 3-9h4'],
  check: ['M9 11l3 3L22 4','M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'],
  users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2','M22 21v-2a4 4 0 0 0-3-3.87','M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8','M16 3.13a4 4 0 0 1 0 7.75'],
  message: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
  tag: ['M3 3h8l10 10-8 8L3 11z','M7 7h.01'],
  calendar: ['M8 2v4 M16 2v4 M3 10h18','M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z'],
  settings: ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8','m9 3-1 3-3 1-2 4 2 2v3l4 3 3-1 3 1 4-3v-3l2-2-2-4-3-1-1-3z'],
  zap: ['m13 2-3 8h10L11 22l3-8H4z'],
  command: ['M9 6v12a3 3 0 1 1-3-3h12a3 3 0 1 1-3 3V6a3 3 0 1 1 3 3H6a3 3 0 1 1 3-3'],
  compass: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20','m16 8-2 6-6 2 2-6z'],
  wand: ['m3 18 15-15 3 3L6 21z M14 7l3 3 M4 3v4 M2 5h4 M18 16v4 M16 18h4'],
  workflow: ['M3 3h6v6H3z M15 15h6v6h-6z M6 9v9h9 M9 6h9v9'],
  chart: ['M3 3v18h18 M7 16v-4 M12 16V8 M17 16V5'],
  sparkles: ['m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z M20 2v4 M18 4h4'],
} as const
export type IconName = keyof typeof paths
export function Icon({name,size=20,style}:{name:IconName;size?:number;style?:CSSProperties}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name].map((path,index)=><path key={index} d={path}/>)}</svg>
}
