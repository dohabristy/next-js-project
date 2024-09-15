import React from 'react'
import styles from "../styles.module.css"
const page = () => {
  return (
    <div>
      <div className={`${styles.banner} w-full h-[650px] `}>
      <div className={`${poppins.className} w-[1240px] flex mx-auto relative`}>
        <div className={`${styles.color} w-[600px] h-[430px] absolute	top-[150px] right-0 p-[40px]`}>
            <p className={`${styles.black } text-4 font-semibold leading-[24px] tracking-[3px]`}>New Arrival</p>
              <h1 className={`${styles.brown  } mt-[4px] font-bold text-[52px] leading-[65px] w-[400px] mb-[17px]`} >
              Discover Our New Collection
            </h1>
            <p className={`${styles.black} font-medium text-[18px] leading-[24px] w-[500px] mb-[46px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div >
              <button className={`${styles.brownn} w-[222px] h-[74px]`}>BUY NOW</button>

            </div>
        </div>
      </div>
   </div>
    </div>
  )
}

export default page
