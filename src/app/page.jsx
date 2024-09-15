import Image from "next/image";
import styles from "./styles.module.css"
import {Poppins } from "next/font/google"
import dine from "/public/dinning.png"
import live from "/public/living.png"
import bed from "/public/bedroom.png"
import proone from "/public/proone.png"
import pro2 from "/public/pro2.png"
import pro3 from "/public/pro3.png"
import pro4 from "/public/pro4.png"
import pro5 from "/public/pro5.png"
import pro6 from "/public/pro6.png"
import pro7 from "/public/pro7.png"
import pro8 from "/public/pro8.png"
import furni1 from "/public/furni1.png"
import furni2 from "/public/furni2.png"
import furni4 from "/public/furni4.png"
import furni3 from "/public/furni3.png"
import furni5 from "/public/furni5.png"
import furni6 from "/public/furni6.png"
import furni7 from "/public/furni7.png"
import furni8 from "/public/furni8.png"
import furni9 from "/public/furni9.png"



const poppins = Poppins({subsets:["latin"],weight:["500"]})

export default function Home() {
  return (
    <>
      <div>
        <div className={`${styles.banner} w-full h-[650px] mb-[60px]`}>
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

    {/* ----------browes part */}
    <div className={`${poppins.className} w-[1240px] mx-auto  flex justify-center items-center mb-[60px]`}>
      <div>
        <h2 className={`${styles.black} text-[32px] font-bold leading-[48px] text-center`}>Browse The Range</h2>
        <h3 className={`${styles.gray} text-center font-normal text-[20px] leading-[30px] mt-[2px] mb-[60px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <div className="flex justify-between items-center gap-x-5">
          <div>
            <Image src={dine} className="w-[380px h-[480px" alt="dinning"/>
            <p className={`${styles.black} text-[24px] font-medium leading-[36px] text-center p-[30px]`}>Dining</p>
          </div>
          <div>
            <Image src={live} className="w-[380px h-[480px " alt="living"/>
            <p className={`${styles.black} text-[24px] font-medium leading-[36px] text-center p-[30px]`}>LIving</p>
          </div>
          <div>
            <Image src={bed} className="w-[380px h-[480px" alt="bedroom"/>
            <p className={`${styles.black} text-[24px] font-medium leading-[36px] text-center p-[30px]`}>Bedroom</p>
          </div>
        </div>
      </div>
    
    </div>
    {/* -------------Our Products------------ */}

    <div className={`${poppins.className} mb-[32px]`}>
        <div className="w-[1240px] mx-auto  flex flex-col justify-center items-center">
          <h1 className={`${styles.productcolor} text-[40px] text-bold leading-[48px] mb-[32px]`}>Our Products</h1>
          <div className="flex flex-wrap justify-center items-center gap-x-[32px] gap-y-[32px] mb-[32px]">
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={proone}/>
                  <div className="p-4">
                    <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Syltherine</h1>
                    < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Stylish cafe chair</p>
                    <div className="flex gap-x-4 justify-start items-center">
                      <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 2.500.000</p>
                      < p  className={`${styles.gray3}`}>Rp 3.500.000</p>
                    </div>
                  </div>
                  
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro2}/>
                    <div className="p-4">
                      <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Leviosa</h1>
                      < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Stylish cafe chair</p>
                      <div className="flex gap-x-4 justify-start items-center">
                        <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 2.500.000</p>
                        
                      </div>
                    </div>
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro3}/>
                      <div className="p-4">
                        <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Lolito</h1>
                        < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Luxury big sofa</p>
                        <div className="flex gap-x-4 justify-start items-center">
                          <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 7.000.000</p>
                          < p  className={`${styles.gray3}`}>Rp 14.000.000Rp </p>
                        </div>
                      </div>
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro4}/>
                      <div className="p-4">
                        <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Respira</h1>
                        < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Outdoor bar table and stool</p>
                        <div className="flex gap-x-4 justify-start items-center">
                          <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 500.000</p>
                          
                        </div>
                      </div>
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro5}/>
                      <div className="p-4">
                        <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Grifo</h1>
                        < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Night lamp</p>
                        <div className="flex gap-x-4 justify-start items-center">
                          <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 1.500.000</p>
                          
                        </div>
                      </div>
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro6}/>
                      <div className="p-4">
                        <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Muggo</h1>
                        < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Small mug</p>
                        <div className="flex gap-x-4 justify-start items-center">
                          <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 150.000</p>
                          
                        </div>
                      </div>
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro7}/>
                      <div className="p-4">
                        <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Pingky</h1>
                        < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Cute bed set</p>
                        <div className="flex gap-x-4 justify-start items-center">
                          <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 7.000.000</p>
                          < p  className={`${styles.gray3}`}>Rp 14.000.000Rp </p>
                        </div>
                      </div>
              </div>
              <div className={`${styles.productbg} w-[285px] h-[450px]`}>
                  <Image src={pro8}/>
                  <div className="p-4">
                        <h1 className={`${styles.productcolor} text-[24px]  font-semibold leading-[28px]  mb-2`}>Potty</h1>
                        < p className={`${styles.gray2} text-4 font-medium leading-[24px]`}>Minimalist flower pot</p>
                        <div className="flex gap-x-4 justify-start items-center">
                          <p className={`${styles.productcolor} text-5 font-semibold  leading-[30px] mt-2`}>Rp 500.000</p>
                        </div>
                      </div>
              </div>
          </div>
          <div >
              <button className={`${styles.brown}  text-4 font-semibold  leading-[24px]  text-center border-[#B88E2F] border-2 px-[70px] py-[12px] `} >Show More</button>

          </div>

        </div>
      </div>

      {/* 50+ Beautiful rooms inspiration */}
      <div>
        <div className="bg-background w-full h-[670px] w-[1240px] mx-auto  flex  items-center mb-[60px] ">
          <div className="w-[1240px] mx-auto  flex justify-between items-center ">
              <div>
                  <p className="text-[40px] font-bold leading-[48px] w-[420px] mb-3"> 50+ Beautiful rooms inspiration </p>
                  <p className={`${styles.gray} text-[16px] font-medium leading-[24px] w-[370px] mb-[25px]`}>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                  <div >
                    <button className={`${styles.brownn} ${styles.white}  w-[172px] h-[48px]`}>Explore More</button>
                  </div>  
              </div>
              <div className="flex justify-between gap-x-[24px]">
                <div className={`${styles.inner} relative `}>
                    <div className={`${styles.innerbg} absolute bottom-6 left-6 p-9`}>
                      <p className={`${styles.gray1 } font-medium text-[18px] leading-[24px] `}>01-- Bed Room</p>
                      <h2 className="font-semibold text-[25px] leading-[34px] mt-2">Inner Peace</h2>
                    </div>
                </div>
                <div className={`${styles.inner1}`}>

                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Share your setup with--------------- */}
      <div>
        <p className={`${styles.gray1} text-[20px] font-semibold leading-[30px] text-center mb-[8px]`}>Share your setup with</p>
        <h3 className="text-[40px] font-bold leading-[48px] text-center mb-[50px]">#FuniroFurniture</h3>
        <div className="flex justify-between items-center">
          <div className=" flex items-center flex-col flex-wrap">
            <div className="flex gap-x-4 mb-4	">
              <Image  src={furni1} />
              <Image src={furni2} />
            </div>
            <div className="flex gap-x-4">
              <Image src={furni4}/>
              <Image src={furni3} /> 
            </div>
            
          </div>
          <div className="mt-[120px]">
              <Image src={furni5} />
          </div>
          <div className="flex items-center flex-col flex-wrap">
            <div className="flex gap-x-4 mb-3">
              <Image src={furni6} className="w-[290px] h-[340px] mt-[90px]"/>
              <Image src={furni7} />
            </div>
            <div className="flex gap-x-4">
      
              <Image src={furni8}/>
              <Image src={furni9} className="w-[258px] h-[193px]"/>
              
            </div>
          </div>
         
        </div>
      </div>
    </>
    
  );
}
