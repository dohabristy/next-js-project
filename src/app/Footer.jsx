import React from 'react'
import {Poppins } from "next/font/google"
import styles from "./styles.module.css"
import Link from 'next/link'



const poppins = Poppins({subsets:["latin"],weight:["500"]})

const Footer = () => {
  return (
    <>
        <div>
          <div className={`${styles.gray1} w-full h-[1px]  mt-[50px] bg-slate-300 mb-[50px]`}>
              
          </div>

            <div >
              <div className='w-[1240px] flex mx-auto justify-between '>
                <div>
                    <p className={`${poppins.className} text-[24px] text-bold leading-[36px] mb-[32px] `}>Funiro.</p>
                    <p className={`${styles.gray1} w-[285px] text-[16px] font-normal leading3-[24px]`}>400 University Drive Suite 200 Coral Gables,</p>
                    <p className={`${styles.gray1} w-[285px] text-[16px] font-normal leading3-[24px]`}>FL 33134 USA</p>
                </div>
                <div>
                  <div>
                    <p className={`${styles.gray2} ${poppins.className} text-[16px] font-medium	 leading3-[24px] mb-[55px]`}>Links</p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px] hover:text-slate-400	`}> <Link href={"/"}> Home</Link> </p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px] hover:${styles.gray}`}><Link href={"/shop"}> Shop</Link>Shop</p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px]`}><Link href={"/about"}> About</Link></p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px]`}><Link href={"/contact"}> Conatct</Link></p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className={`${styles.gray2} ${poppins.className} text-[16px] font-medium	 leading3-[24px] mb-[55px]`}>Help</p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px]`}>Payment Options</p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px]`}>Returns</p>
                    <p className={`${poppins.className} text-black-500 text-[16px] font-medium	 leading3-[24px] mb-[55px]`}>Privacy Policies</p>
                  </div>
                </div>
                <div>
                  <div >
                    <p className={`${styles.gray2} ${poppins.className} text-[16px] font-medium	 leading-[24px] mb-[55px]`}>Newsletter</p>
                    <div className='flex gap-x-4'>
                      <form  action="">
                        <input type="text" placeholder="Enter your Email"  className='divide-zinc-300 cursor-pointer outline-0 border-b-[1px] py-2'/>
                      </form>
                      <button class="common_btn" type="submit" className='divide-zinc-300 cursor-pointer outline-0 border-b-[1px] py-2'>SUBSCRIBE</button>
                    </div>
                    

                  </div>
                </div>
              
              </div>
            </div>
            <div className={`${styles.gray1} w-[1240px]  h-[1px]  mt-[50px] bg-slate-300 mb-[35px] mx-auto`}></div>  
            <div className='w-[1240px] mx-auto ' >
              <p className='text-[16px] font-normal	 leading-[24px] mb-[35px]'>2023 furino. All rights reverved</p>
            </div>

          </div>
    </>
  )
}

export default Footer
