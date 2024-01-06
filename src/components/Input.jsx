import { Input } from "@nextui-org/react"

export const InputNormal = ({ startContent, endContent, placeholder, type, className = "" }) => {
  return (
    <Input
      type={type}
      variant="bordered"
      classNames={{ inputWrapper: "bg-transparent text-bg-dark rounded-full border-2 border-bg-dark hover:!border-dark hover:text-dark focus-within:!text-primary focus-within:!border-primary " + className, input: ["bg-transparent", "placeholder:text-sm placeholder:text-bg-dark", "font-bold text-md"] }}
      placeholder={placeholder}
      startContent={startContent}
      endContent={endContent}
    />
  )
}

export const InputNav = ({ startContent, endContent, placeholder, type, className = "" }) => {
  return (
    <Input
      type={type}
      variant="bordered"
      className={"max-w-full " + className}
      classNames={{ inputWrapper: "bg-transparent h-4 text-bg-dark rounded-full border-2 border-bg-dark hover:!border-dark hover:text-dark focus-within:!text-primary focus-within:!border-primary ", input: ["bg-transparent w-full", "placeholder:text-sm placeholder:text-bg-dark", "font-bold text-md"] }}
      placeholder={placeholder}
      startContent={startContent}
      endContent={endContent}
    />
  )
}