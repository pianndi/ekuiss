import { Button } from '@nextui-org/react'
import Link from 'next/link'
export default function SectionTitle({ title, button, link, href = "", className = "" }) {
  return (<div className={"flex justify-between mt-10 " + className}>
    <h2 className="font-bold text-base">{title}</h2>{
      button &&<Link href={href}>
      <Button className="bg-secondary text-dark font-bold text-xs" size="sm" >{button}</Button></Link>
    }
  </div>)
}