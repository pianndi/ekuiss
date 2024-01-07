import Footer from "@/components/layouts/Footer"
import Navigation from "@/components/layouts/Navigation"
import Navbar from "@/components/layouts/Navbar"

import { Menu, MenuItem } from '@/components/layouts/Menu'
import { GiSandsOfTime } from "react-icons/gi";
import { FaBookBookmark } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";


export const FooterLayout = ({ children, title }) => {
  return (
    <>
      <div className="bg-bg w-full">
        <Navbar title={title} />
        <div className="px-4 pb-12 max-w-7xl mx-auto min-h-screen">
          {children}
        </div>
      </div>
      <Navigation />
      <Footer />
    </>
  )
}