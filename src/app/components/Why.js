"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Why = () => {
  return (
    <section id="why" className="section flex items-center pt-32">
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn("up", 0.2)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.6 }} 
          className="text-2xl mb-4 font-bold text-center">
          Kepercayaan dan Kepuasaan Customer Prioritas Kami
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", 0.4)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.6 }} 
          className="max-w-[860px] text-center mx-auto mb-2">
          Dedikasi kami untuk memberikan layanan yang luar biasa membedakan dari pesaing. sejak Anda berinteraksi dengan kami, kami berusaha untuk melampaui harapan Anda dalam setiap interaksi.
        </motion.p>
        {/* Car Image */}
        <motion.div 
          variants={fadeIn("up", 0.2)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.6 }} 
          className="hidden md:flex justify-center mb-6 lg:mb-2 rounded">
          <Image 
            src={"/Images/why/CIVICTYPER.png"}
            style={{ objectFit: "cover" }}
            width={500} 
            height={250} 
            alt="..." />
        </motion.div>
        {/* Gird Items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-2 lg:gap-y-0 lg:gap-x-4"
        >
          {/* Items 1 */}
          <div className="flex flex-col justify-center items-center text-center max-w-[180px] lg:max-w-none p-2 lg:p-0">
            <MdKey className="text-3xl text-accent mb-3" />
            <h3 className="text-lg mb-1 font-semibold">
              Rent Mudah dan Cepat
            </h3>
            <p className="hidden lg:flex">
              Kami memprioritaskan kebutuhan dan pengalaman terbaik
            </p>
          </div>
          {/* Items 2 */}
          <div className="flex flex-col justify-center items-center text-center max-w-[180px] lg:max-w-none p-2 lg:p-0">
            <MdTrendingUp className="text-3xl text-accent mb-3" />
            <h3 className="text-lg mb-1 font-semibold">
              Kendaraan modern dan terawat
            </h3>
            <p className="hidden lg:flex">
              Kami memberikan kenyaman berkendara anda
            </p>
          </div>
          {/* Items 3 */}
          <div className="flex flex-col justify-center items-center text-center max-w-[180px] lg:max-w-none p-2 lg:p-0">
            <MdHandshake className="text-3xl text-accent mb-3" />
            <h3 className="text-lg mb-1 font-semibold">
              Layanan cepat dan fleksibel
            </h3>
            <p className="hidden lg:flex">
              Kami memberikan pelayanan terbaik untuk anda
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
