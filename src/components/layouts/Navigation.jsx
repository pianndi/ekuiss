"use client"
import { MdSearch } from "react-icons/md"
import { MdHome, MdGroups } from "react-icons/md"
import { BiDialpad } from "react-icons/bi"
import { GiBackwardTime } from "react-icons/gi"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const path = usePathname()
  return (
    <div className="font-bold fixed z-50 flex w-full bg-white shadow-xl justify-around items-center py-2 left-0 bottom-0 rounded-t-xl sm:hidden">
      <Link href="/" className={"flex flex-col text-xs items-center justify-center text-gray hover:text-primary " + (path == "/" && "text-primary")}>
        <MdHome className="text-3xl" />
        Home
      </Link>
      <Link href="/search" className={"flex flex-col text-xs items-center justify-center text-gray hover:text-primary " + (path == "/search" && "text-primary")}>
        <MdSearch className="text-3xl" />
        Cari
      </Link>
      <Link href="/activity" className={"flex flex-col text-xs items-center justify-center text-gray hover:text-primary " + (path.match(/\/activity*/) && "text-primary")}>
        <GiBackwardTime className="text-3xl" />
        Aktivitas
      </Link>
      <Link href="/class" className={"flex flex-col text-xs items-center justify-center text-gray hover:text-primary " + (path == "/class" && "text-primary")}>
        <MdGroups className="text-3xl" />
        Kelas
      </Link>
    </div>
  )
}