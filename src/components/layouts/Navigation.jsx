import { MdSearch } from "react-icons/md"
import { MdOutlineHome } from "react-icons/md"
import { BiDialpad } from "react-icons/bi"
import Link from "next/link"

export default function Navigation() {
  return (
    <div className="fixed flex w-full bg-white shadow-xl justify-around items-center py-2 left-0 bottom-0 rounded-t-xl">
      <Link href="/" className="flex flex-col text-xs items-center justify-center text-gray hover:font-bold hover:text-black">
        <MdOutlineHome className="text-3xl" />
        Home
      </Link>
      <Link href="/" className="flex flex-col text-xs items-center justify-center text-gray hover:font-bold hover:text-black">
        <BiDialpad className="text-3xl" />
        Kode
      </Link>
      <Link href="/search" activeClassName="active" className="flex flex-col text-xs items-center justify-center text-gray hover:font-bold hover:text-black">
        <MdSearch className="text-3xl" />
        Cari
      </Link>
    </div>
  )
}