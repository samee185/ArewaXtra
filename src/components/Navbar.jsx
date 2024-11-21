import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
    const navList = [
        {
            title:"home",
            link:"/"
        },
        {
            title:"shop",
            link:"/shop"
        },
        {
            title:"about us",
            link:"/about"
        },
        {
            title:"contact",
            link:"/contact"
        }
    ]
  return (
    <>
    <div className="flex items center justify-between">
        <div>
            <img src={logo} alt="arewaxtra-logo" className='h-20' />
        </div>
        <div className='flex items-center gap-3 justify-evenly'>
            {navList.map((index)=>{

            })}
        </div>

    </div>
    </>
  )
}

export default Navbar