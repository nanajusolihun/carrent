"use client"

import Image from "next/image";
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md"
import  CountUp  from "react-countup";
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section 
      className="section flex items-center bg-white" 
      id="about" 
      ref={ref}>
      <div className="container mx-auto pt-10">
        <div className="flex flex-col lg:flex-row lg:justify-center">
          {/* Image */}
          <motion.div 
            variants={fadeIn("up", 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.6 }} 
            className=" flex mb-3 lg:mb-0 justify-center items-center">
            <Image 
              className=" rounded-xl" 
              src={"/Images/about/about.png"} 
              width={600} 
              height={425}
              style={{ objectFit: "cover" }} 
              alt="..." />
          </motion.div>
          {/* Text & Stats */}
          <div className="flex-1 flex items-center justify-center lg:justify-left">
            <div className="lg:max-w-[450px]">
              <motion.h2 
                variants={fadeIn("up", 0.2)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{ once: false, amount: 0.5 }} 
                className="lg:h2 text-xl mb-3 font-bold"
              >
                Pelayanan Rental Simple dan Cepat
              </motion.h2>
              <motion.p 
                variants={fadeIn("up", 0.6)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{ once: false, amount: 0.5 }} 
                className="mb-3 lg:mb-8 max-w-md"
              >
                Rental, pilih, dan tukar mobil dengan mudah. Lokasi yang strategis, jenis mobil beragam, dan titik tukar mobil yang andal memastikan pengalaman mobil dengan nyaman
              </motion.p>
              {/* Stats */}
              <motion.div 
                variants={fadeIn("up", 0.8)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{ once: false, amount: 0.2 }} 
                className="flex items-center gap-x-4 mb-6"
              >
                {/* Car Types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-3xl lg:text-5xl text-accent" />
                  <div className="text-2xl font-black mb-2">
                    {inView 
                      ? <CountUp start={0} end={50} duration={3} delay={1} /> : null}+
                  </div>
                  <div className="uppercase text-[12px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                {/* Rental Outlets */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-3xl lg:text-5xl text-accent" />
                  <div className="text-2xl font-black mb-2">
                    {inView 
                    ? <CountUp start={0} end={150} duration={3} delay={1} /> 
                    : null}
                  </div>
                  <div className="uppercase text-[12px] font-semibold text-secondary">
                    Rental <br /> Outlets
                  </div>
                </div>
                {/* Repair Point */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-3xl lg:text-5xl text-accent" />
                  <div className="text-2xl font-black mb-2">
                    { inView 
                    ? <CountUp start={0} end={40} duration={3} delay={1} /> 
                    : null }
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Repair <br /> Points
                  </div>
                </div>
              </motion.div>
              {/* Button */}
              <motion.button
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden lg:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-14 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[1200px] "
              >
                Lihat semua mobil
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About