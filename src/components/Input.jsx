import { Input } from "@nextui-org/react"

export const InputNormal = ({ icon, placeholder,type }) => {
  return (
    <Input
      type={type}
      variant="bordered"
      classNames={{ inputWrapper: "bg-transparent text-bg-dark rounded-full border-2 border-bg-dark hover:!border-dark hover:text-dark focus-within:!text-primary focus-within:!border-primary", input: ["bg-transparent", "placeholder:text-sm placeholder:text-bg-dark", "font-bold text-md"] }}
      placeholder={placeholder}
      startContent={icon}
    />
  )
}