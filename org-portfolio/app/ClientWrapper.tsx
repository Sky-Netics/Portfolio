'use client'

import { usePathname } from 'next/navigation'
import { ScrollSpyNav } from '@/components/ScrollSpyNav'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'scroll', label: 'More about us' },
  { id: 'sticky1', label: 'Back-end' },
  { id: 'sticky2', label: 'Front-end' },
]

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const pagesWithScrollNav = ['/', '/home']
  const showScrollSpy = pagesWithScrollNav.includes(pathname)

  return (
    <>
      {showScrollSpy && <ScrollSpyNav sections={sections} />}
      <main className=" mx-auto">{children}</main>
    </>
  )
}
