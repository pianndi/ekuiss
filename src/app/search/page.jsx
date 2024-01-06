import Image from "next/image"
import Navbar from "@/components/layouts/Navbar"
import Navigation from "@/components/layouts/Navigation"
import { InputNormal } from "@/components/Input"
import { MdSearch } from "react-icons/md"

export default function searchPage() {
  return (
    <div className="px-4">
      <Navbar title="Cari" />
      <InputNormal type="text" placeholder="Cari kuis seru yang tersedia" icon={<MdSearch className="text-3xl" />} />
      <div className="flex flex-col items-center justify-center w-72 mx-auto my-14">
        <Image src="/images/notfound.png" alt="Tidak Ditemukan" width={200} height={240} />
        <p className="text-xl text-center text-bg-dark">Cari kuis berbagai mata pelajaran seperti matematika, inggris, kejuruan dll...</p>
      </div>
      <Navigation />
    </div>)
}