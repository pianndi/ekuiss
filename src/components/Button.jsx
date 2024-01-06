import { Button } from "@nextui-org/react"
export const ButtonCTA = ({ children }) => {
  return <Button type="submit" className="my-2 text-white w-full border-r-4 border-b-4 border-dark bg-primary h-[52px] text-2xl font-bold hover:border-r-2 hover:border-b-2 hover:border-l hover:border-t hover:border-secondary hover:border-r-dark hover:border-b-dark">{children}</Button>
}