import React from 'react'
import Image from 'next/image'
import logo from "/public/logo.png"
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Poppins } from "next/font/google"
import styles from "./styles.module.css"


const poppins = Poppins({subsets:["latin"],weight:["500"]})
const Navbar = () => {
  return (<>
      <div className={poppins.className}>
      <div className='w-[1240px]  flex justify-between mx-auto  my-5 items-center '>
        <div className='w-[185px] h-[41px]'>
            <Image src={logo}/>
        </div>
        <div>
          <ul className='flex gap-x-[75px] text-[16px] font-medium leading-[24px] '>
            <li >
              <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/shop"}>Shop</Link>

            </li>
            <li>
            <Link href={"/about"}>About</Link>
            </li>
            <li>
            <Link href={"/contact"}>Contact</Link>
            </li>
           
          </ul>
        </div>
        <div className='flex gap-x-7 text-[18px] font-medium'>
          <IoPersonOutline />
          <IoIosSearch />
          <FaRegHeart />
          <FaShoppingCart />
        </div>
      </div>
    </div>
   
   
    
  </>
    
    
   
  )
}

export default Navbar
