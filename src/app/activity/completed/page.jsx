import { KuisStatusCard } from "@/components/Card"
import Image from "next/image"

export default function CompletedPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto my-12 gap-2">
      <p className="text-xl text-center text-bg-dark">Sepertinya kamu belum menyelesaikan kuis manapun..</p>
      <Image src="/images/dumb.png" alt="Tidak Ditemukan" width={280} height={280} />
    </div>
    ||
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-3">
    </div>
  )
}