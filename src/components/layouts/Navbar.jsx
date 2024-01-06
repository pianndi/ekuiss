import { LuMenu } from "react-icons/lu"
export default function Navbar({ title }) {
  return (
    <div className="flex justify-between py-3 align-middle">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button className="text-2xl" type="button"><LuMenu /></button>
    </div>
  )
}