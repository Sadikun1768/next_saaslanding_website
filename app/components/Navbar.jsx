"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import LogoTicker from "./LogoTicker";



export default function Navbar() {

const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-4 py-2"> 
      <div>
        <LogoTicker />
      </div>
      <nav className="flex justify-center gap-3">
        <Link
          className={`link ${pathname === '/' ? 'active' : ''} ${pathname === '/' ? 'text-sky-800 font-bold' : ''}`}
          href="/">
          Home
        </Link>
        <Link
          className={`link ${pathname === '/features' ? 'active' : ''} ${pathname === '/features' ? 'text-sky-800 font-bold' : ''}`}
          href="/features">
          Features
        </Link>
        <Link
          className={`link ${pathname === '/integrations' ? 'active' : ''} ${pathname === '/integrations' ? 'text-sky-800 font-bold' : ''}`}
          href="/integrations">
          Integrations
        </Link>
        <Link
          className={`link ${pathname === '/faqs' ? 'active' : ''} ${pathname === '/faqs' ? 'text-sky-800 font-bold' : ''}`}
          href="/faqs">
          FAQs
        </Link>
      </nav>
       <div className='flex gap-3'>
            <button type="submit" className="border border-white text-white bg-cyan-900 hover:bg-lime-300 p-2 rounded text-sm">Sign In</button>
            <button type="submit" className="border border-white text-white bg-cyan-900 hover:bg-lime-300 p-2 rounded text-sm">Sign Up</button>
        </div>

    </div>

  )
}
