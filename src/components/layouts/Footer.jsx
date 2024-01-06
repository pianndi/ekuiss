import Image from "next/image"
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa"

export default function Footer () {
  return (<div className="py-16 bg-secondary text-dark w-full">
    <div className="max-w-7xl px-6 mx-auto">
      <div className="w-full grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col my-8">
          <Image src="/ekuiss.svg" alt="Ekuiss" width={100} height={24} />
          <div className="flex flex-col gap-4 text-md my-8 font-bold">
            <p>SMK Negeri 1 Demak</p>
            <p>Jl. Sultan Trenggono No. 87, Kab. Demak, Jawa Tengah, 59516</p>

          </div>
          <div className="flex gap-6 w-full text-2xl">
            <FaInstagramSquare />
            <FaFacebookSquare />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col my-8">
          <h1 className="font-bold text-2xl">Website</h1>
          <div className="flex flex-col gap-4 text-md my-8 font-bold">
            <p>Official Website</p>
            <p>E-kur</p>
            <p>E-kuiss</p>
          </div>
        </div>
        <div className="flex flex-col my-8">
          <h1 className="font-bold text-2xl">Bantuan</h1>
          <div className="flex flex-col gap-4 text-md my-8 font-bold">
            <p>Tutorial</p>
            <p>Tim Kur</p>
            <p>Guru Bk</p>
          </div>
        </div>
        <div className="flex flex-col my-8">
          <h1 className="font-bold text-2xl">Lainnya</h1>
          <div className="flex flex-col gap-4 text-md my-8 font-bold">
            <p>Syarat & Ketentuan</p>
            <p>Kebijakan Keamanan</p>
          </div>
        </div>
      </div>
      <hr className=" border-dark my-6" />
      <div className="flex justify-between font-bold mb-4">
        <p>Developed with ♥️ by Pianndi</p>
        <p>&copy; 2024 SMK Negeri 1 Demak</p>
      </div>
    </div>
  </div>)
}
