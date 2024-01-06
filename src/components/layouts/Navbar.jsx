"use client"
import { MdSearch } from "react-icons/md"
import { MdHome, MdGroups, MdPerson } from "react-icons/md"
import { GiBackwardTime } from "react-icons/gi"
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsGear } from "react-icons/bs";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuMenu } from "react-icons/lu"
import { InputNav } from "@/components/Input"
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react"

export default function Navbar({ title }) {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 align-middle sm:bg-white sm:border-b-2 border-bg-dark px-4">
      <div className="flex items-center gap-4 py-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <InputNav placeholder="Cari kuis seru yang tersedia"
          className="hidden sm:block"
          endContent={
            <Link href="/search"><MdSearch className="text-2xl" /></Link>
          } />
      </div>
      <div className="items-center font-bold justify-center text-gray text-base hidden sm:flex">
        <Link href="/" className={"px-6 flex border-primary flex-row items-center gap-2 justify-center hover:text-primary " + (pathname == "/" && "border-b-2 h-full text-primary")}>
          <MdHome className="text-2xl" />
          <span className="hidden lg:inline">
            Home
          </span>

        </Link>
        <Link href="/activity" className={"border-primary px-6 flex flex-row items-center justify-center gap-2 hover:text-primary " + (pathname == "/activity" && "border-b-2 h-full text-primary")}>
          <GiBackwardTime className="text-2xl" />
          <span className="hidden lg:inline">
            Aktivitas
          </span>
        </Link>
        <Link href="/class" className={"border-primary px-6 flex flex-row items-center justify-center gap-2 hover:text-primary " + (pathname == "/class" && "border-b-2 h-full text-primary")}>
          <MdGroups className="text-2xl" />
          <span className="hidden lg:inline">
            Kelas
          </span>
        </Link>
      </div>

      <div className="py-3 flex gap-4 justify-end items-center">
        <Button size="sm" className="bg-primary font-bold rounded-md text-white text-base">Log in</Button>
        <Dropdown>
          <DropdownTrigger>
            <button className="text-2xl" type="button"><LuMenu /></button>
          </DropdownTrigger>
          <DropdownMenu variant='solid'>
            <DropdownSection showDivider>

              <DropdownItem key="settings" description="11 DKV 1" startContent={<MdPerson className='text-2xl' />}>
                <span className="text-base">Alviandi Siswo Hartanto</span>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem key="settings" startContent={<BsGear className='text-2xl' />}>
                <Link className="text-base" href="/settings">Pengaturan</Link>
              </DropdownItem>
              <DropdownItem key="help" startContent={<IoMdHelpCircleOutline className='text-2xl' />}>
                <Link className="text-base" href="/help">Bantuan</Link>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}