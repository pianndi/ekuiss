import { Button } from '@nextui-org/react'
export default function ({ title, button, link, className="" }) {
  return (<div className={"flex justify-between mt-10 " + className}>
    <h2 className="font-bold text-base">{title}</h2>{
      button &&
      <Button className="bg-secondary text-dark font-bold text-xs" size="sm" >{button}</Button>
    }
  </div>)
}