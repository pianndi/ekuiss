import Image from "next/image"
import Navbar from "@/components/layouts/Navbar"
import { FooterLayout } from "@/components/layouts"
import { InputNormal } from "@/components/Input"
import { MdSearch } from "react-icons/md"

export default function searchPage() {
  return (
    <FooterLayout title="Cari">
      <InputNormal type="text" className="mt-4 sm:hidden" placeholder="Cari kuis seru yang tersedia" startContent={<MdSearch className="text-3xl" />} />
      <div className="flex flex-col items-center justify-center w-72 mx-auto my-14">
        <Image src="/images/notfound.png" alt="Tidak Ditemukan" width={200} height={240} />
        <p className="text-xl text-center text-bg-dark">Cari kuis berbagai mata pelajaran seperti matematika, inggris, kejuruan dll...</p>
      </div>
    </FooterLayout>)
}