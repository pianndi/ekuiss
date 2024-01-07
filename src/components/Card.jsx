import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { MdPerson } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa"
export const KuisBiasa = () => {
  return (
    <Card className="rounded-lg border overflow-hidden border-bg-dark" shadow="sm">
      <div className="relative bg-bg-dark rounded-b-3xl h-28 flex justify-center items-center">
        <Image src="/ekuiss.svg" alt="Ekuiss" width={100} height={24} />
        <span className="absolute top-2 right-2 text-white text-sm rounded bg-gray pt-0.5 px-1.5">08:45</span>
      </div>
      <div className="relative p-2 pt-3">
        <span className="absolute top-[-1rem] text-[10px] text-dark bg-secondary py-0.5 px-1.5 rounded">20 Pertanyaan</span>
        <span className="absolute top-[-1rem] right-2 text-[10px] text-dark bg-secondary py-0.5 px-1.5 rounded">169x dikerjakan</span>
        <h1 className="text-base line-clamp-2 h-12">Ulangan Harian Matematika Seru Banget gaisssss hehehehe</h1>
        <div className="mt-2 flex justify-between text-bg-dark">
          <span className="flex font-bold items-center gap-1 text-sm"><MdPerson />Agus</span>
          <span className="flex font-bold items-center gap-1 text-sm"><FaRegCalendarAlt />2023-01-04</span>
        </div>
      </div>
    </Card>
  )
}

export const KuisStatusCard = ({ title = 'Ulangan Harian Matematika Seru Banget gaisssss hehehehe' }) => {
  return (
    <Card className="rounded-lg border overflow-hidden border-bg-dark min-w-[180px] " shadow="sm">
      <div className="relative bg-bg-dark rounded-b-3xl h-[96px] flex justify-center items-center">
        <Image src="/ekuiss.svg" alt="Ekuiss" width={100} height={24} />
        <span className="absolute top-1 right-1 text-white text-[10px] rounded bg-gray pt-0.5 px-1.5">25mnt 30dtk lagi</span>
      </div>
      <div className="flex flex-col justify-between px-2 pb-2">
        <div className="relative pt-2 h-28">
          <span className="absolute top-[-1rem] text-[10px] text-dark bg-secondary py-0.5 px-1.5 rounded">20 Pertanyaan</span>
          <h1 className="text-base line-clamp-3">{title}</h1>
          <span className="flex font-bold items-center gap-1 text-bg-dark mt-2 text-xs"><MdPerson />Agus</span>
        </div>
        <div className="rounded-full w-full bg-primary text-white text-xs mt-2 px-2 py-1">
          50% Dikerjakan
        </div>
      </div>
    </Card>
  )
}