"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";

const Brands = () => {
  return (
    <section className="lg:mt-36 lg:pt-4 lg:h-[120px] bg-white flex flex-col justify-center items-center">
      <motion.div 
        variants={fadeIn("down", 0.4)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{ once: false, amount: 0.6 }} 
        className="container mx-auto">
        {/* Brands */}
        <div className="grid grid-cols-5 gap-4 place-items-center lg:grid-cols-10 lg:gap-x-4 lg:justify-center ">
          {/* Brand 1 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/TOYOTA.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold">
              TOYOTA
            </h1> */}
          </div>
          {/* Brand 2 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/HONDA.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base text-center font-semibold">
              HONDA
            </h1> */}
          </div>
          {/* Brand 3 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/SUZUKI.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold">
              SUZUKI
            </h1> */}
          </div>
          {/* Brand 4 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/MITSUBISHI.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold ">
              MITSUBISHI
            </h1> */}
          </div>
          {/* Brand 5 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/HYUNDAI.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold ">
              HYUNDAI
            </h1> */}
          </div>
          {/* Brand 6 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/WULING.png"} 
              width={50} 
              height={25}
              alt="..." />
            {/* <h1 className="text-base font-semibold">
              WULING
            </h1> */}
          </div>
          {/* Brand 7 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/DAIHATSU.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold ">
              DAIHATSU
            </h1> */}
          </div>
          {/* Brand 8 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/KIA.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold">
              KIA
            </h1> */}
          </div>
          {/* Brand 9 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/MAZDA.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold">
              MAZDA
            </h1> */}
          </div>
          {/* Brand 10 */}
          <div className="bg-neutral-100 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-y-4 lg:w-20">
            <Image 
              src={"/Icons/brands/ISUZU.png"} 
              width={50} 
              height={25} 
              alt="..." />
            {/* <h1 className="text-base font-semibold">
              ISUZU
            </h1> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Brands