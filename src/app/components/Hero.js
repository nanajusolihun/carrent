"use client";
import { useContext } from "react";
import Seacrh from "./Search";
import { SearchContext } from "../context/SearchContext";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "../../../variant";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <section 
      className="h-screen lg:h-[90vh] bg-[#b2b7c2]/5 " id="home"
    >
      <div className="container mx-auto h-full lg:pt-6">
        {/* Text and Image */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center h-full">
          {/* Text */}
          <div className="text-center lg:max-w-xl lg:text-left mt-10 lg:mt-0">
            <motion.h1 
              variants={fadeIn("down", 0.2)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once: false, amount: 0.6 }} 
              className="h1"
            >
              Jelajahi penyewaan mobil <span className="text-accent">Terbaik</span> di sini
            </motion.h1>
            <motion.p 
              variants={fadeIn("down", 0.4)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once: false, amount: 0.6 }} 
              className=" description max-w-[550px] mx-auto lg:mx-0 mb-6 lg:mb-10"
            >
              Temukan mobil ideal untuk perjalanan anda dalam petualangan apa pun dengan harga yang terjangkau dan terbaik
            </motion.p>
            {/* button */}
            <motion.div 
              variants={fadeIn("down", 0.6)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once: false, amount: 0.8 }} 
              className="flex gap-x-3 justify-center lg:justify-start"
            >
              <button>
                <Image src="/Icons/buttons/googlestore.svg" width={132} height={32} alt="googlestore" />
              </button>
              <button>
                <Image src="/Icons/buttons/appstore.svg" width={132} height={36} alt="applestore" />
              </button>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative h-full w-full max-h-[35vh] md:max-w-[70vw] lg:max-w-[860px] lg:max-h-[540px] lg:absolute lg:-right-[100px] min-[1680px]:right-[120px] lg:top-4"
          >
            <Image 
              src="/Images/hero/hero.png" 
              fill 
              alt="hero mobil" 
              style={{ objectFit: "contain" }} 
              priority 
              className="flex justify-center items-center" />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div 
          initial={{ y: "-100%" }} 
          animate={{ y: 0 }} 
          transition={{ ease: easeInOut }} 
          className=" fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Seacrh />
        </motion.div>
      ) : (
        <div 
          className="-mt-12 w-full max-w-[1280px] mx-auto">
          <motion.div 
            variants={fadeIn("up", 0.8)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.2 }}>
            <Seacrh />
          </motion.div>
        </div>
      )}
    </section>
  )
};

export default Hero;
