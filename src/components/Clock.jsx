'use client'
import { useState, useEffect } from "react"
export default function Clock() {
  const [time, setTime] = useState()
  useEffect(() => {
      setTime(new Date())
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="bg-secondary font-bold py-1 px-3 text-dark rounded-md">
      {time?.toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta' })||"00:00:00"}
    </div>
  )
}