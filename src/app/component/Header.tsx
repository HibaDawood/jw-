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
        src={"/picture/s11.jpg"} 
        alt="Logo"
        width={100}
        height={100}
         className="logo-image w-2 h-3" />
      </div>


    <ul className='ul-1'>
      <li className='li-styling'><Link href={"/"} >Home</Link></li>
      <li className='li-styling'><Link href={"/about"}>About</Link></li>
      <li className='li-styling'><Link href={"/contact"}>Contact</Link></li>
      <li className='li-styling'><Link href={"#skills"} >Skills</Link></li>
    </ul>
    </nav>
    </div>
  )
}

export default Header