import Image from 'next/image'
import { Input, Button, ScrollShadow } from "@nextui-org/react"
import { ButtonCTA } from "@/components/Button"
import { KuisStatusCard, KuisBiasa } from "@/components/Card"
import { InputNormal } from "@/components/Input"
import SectionTitle from "@/components/SectionTitle"
import Navbar from "@/components/layouts/Navbar"
import Navigation from "@/components/layouts/Navigation"
import { BiDialpad } from "react-icons/bi"

export default function Home() {
  const data = [...Array(6)]
  return (
    <div className="px-4">
      <Navbar title={<Image src="/ekuiss.svg" alt="Ekuiss" width={100} height={24} />} />
      <div className="flex justify-between my-2">
        <div className="flex flex-col my-2 font-bold">
          <h1 className="text-xl">Selamat Pagi, Alviandi</h1>
          <p className="text-sm text-bg-dark">Ayo selesaikan pertanyaan hari ini!</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-secondary font-bold py-1 px-3 text-dark rounded-md">
            08:30:30
          </div>
        </div>
      </div>
      <div className="my-3">
        <InputNormal type="number" placeholder="Masukkan kode permainan" icon={<BiDialpad className="text-3xl" />} />
        <ButtonCTA>Masuk</ButtonCTA>
      </div>
      <SectionTitle className="mt-10" title="Aktivitas" button="Lihat Semua" />
      <div className="w-full flex gap-3 overflow-auto py-3" >
        {[...Array(12)].map((d, i) =>
          <KuisStatusCard key={i} />
        )}
      </div>
      <SectionTitle className="mt-3" title="Kelas Saya" button="Lihat Semua" />
      <div className="grid grid-cols-2 gap-3">
        {[...Array(8)].map((d, i) =>
          <KuisBiasa key={i} />
        )}
      </div>
      <Navigation/>
    </div>
  )
}
// app/page.tsx
