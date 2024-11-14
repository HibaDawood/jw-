import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
          {/* Header */}
    <nav className='haeder'>
    {/* Logo Element */}
    <div className="logo">
        <Image 
        src={"/picture/lg.jpg"}
        alt="Logo"
        width={300}
        height={300}
        className="logo-image " />
      </div>


    <ul className='ul-1'>
      <li className='li-styling'><Link href={"/"} >Home</Link></li>
      <li className='li-styling'><Link href={"/about"}>About</Link></li>
      <li className='li-styling'><Link href={"/contact"}>Contact</Link></li>
      <li className='li-styling'><Link href={"/Products"} >products</Link></li>
    </ul>
    </nav>
    </div>
  )
}

export default Header