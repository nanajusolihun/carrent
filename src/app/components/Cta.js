"use client";

import Image from "next/image";
import { fadeIn } from "../../../variant";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section 
      className="pt-24 lg:pt-44 pb-0 flex items-center bg-[#b2b7c2]/10 overflow-hidden" 
      id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:items-center">
          {/* Text */}
          <div className="flex-1 lg:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-2-[520px] mx-auto order-2 lg:order-none">
              <motion.h2 
                variants={fadeIn("right", 0.2)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{ once: false, amount: 0.6 }} 
                className="text-xl mb-2 lg:text-4xl lg:mb-6 font-semibold"
              >
                Download app <span className="text-accent font-bold">CARRENT</span> sekarang
              </motion.h2>
              <motion.p 
                variants={fadeIn("right", 0.4)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{ once: false, amount: 0.6 }} 
                className="lg:mb-6 mb-2"
              >
                Lakukan download <span className="text-accent font-semibold">CARRENT</span> untuk transaksi rental mobil dengan mudah, cepat dan aman
              </motion.p>
              {/* Button */}
              <motion.div 
                variants={fadeIn("right", 0.6)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{ once: false, amount: 0.6 }} 
                className="flex md:mb-0 gap-x-4 justify-center md:justify-start"
              >
                <button className="">
                  <Image 
                    src="/Icons/buttons/googlestore.svg" 
                    width={135} 
                    height={35} 
                    alt="Google Store" />
                </button>
                <button className="">
                  <Image 
                    src="/Icons/buttons/appstore.svg" 
                    width={135} 
                    height={35} 
                    alt="Apple Store" />
                </button>
              </motion.div>
            </div>
          </div>
          {/* Image */}
          <motion.div 
            variants={fadeIn("left", 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.6 }} 
            className="flex flex-1 justify-center order-1 md:order-none"
          >
            <Image 
              src="/Images/cta/avatarapp.png"
              style={{ objectFit : "contain"}}
              width={310} 
              height={220} 
              alt="..." />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
