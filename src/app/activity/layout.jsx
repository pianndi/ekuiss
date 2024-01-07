import { FooterLayout } from "@/components/layouts"
import { Menu, MenuItem } from '@/components/layouts/Menu'
import { GiSandsOfTime } from "react-icons/gi";
import { FaBookBookmark } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { Children } from "react"

export default function ActivityLayout({ children, Component }) {
  console.log(Component)
  return (
    <FooterLayout title="Aktivitas">
      <Menu>
        <MenuItem href='/activity'><ImBooks />Semua</MenuItem>
        <MenuItem href='/activity/running'><GiSandsOfTime />Berjalan</MenuItem>
        <MenuItem href='/activity/completed'><FaBookBookmark />Selesai</MenuItem>
      </Menu>

        {children}
    </FooterLayout>
  )
}