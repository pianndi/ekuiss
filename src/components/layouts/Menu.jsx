'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export const Menu = ({ children }) => {
  return (
    <div className="mt-4 font-bold flex text-xl items-bottom justify-around pt-4 bg-white rounded-t-lg items-center gap-4 shadow">
      {children}
    </div>
  )
}
export const MenuItem = ({ href, children }) => {
  const path = usePathname()
  return (
    <Link className={'flex gap-2 pb-2 justify-center items-center hover:text-primary w-full ' + (path == href && 'border-b-2 border-primary text-primary')} href={href}>
      {children}
    </Link>
  )
}