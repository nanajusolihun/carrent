"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
import Image from "next/image";
const testimonialData = [
  {
    message: "Pelayanan yang mudah dimengerti, proses cepat, dan mudah",
    avatar: "/Images/testimonial/avatar-1.png",
    nama: "Khairul",
    job: "Photographer",
  },
  {
    message: "Mobil yang sangat beragam, perawatan mobil yang baik, mobil sangat nyaman",
    avatar: "/Images/testimonial/avatar-2.png",
    nama: "Baloyskie",
    job: "VideoGrapher",
  },
  {
    message: "Mobil beragam, dan modern. sangat nyaman dan mudah untuk peroses penyewaannya",
    avatar: "/Images/testimonial/avatar-3.png",
    nama: "Putra Tanjung",
    job: "CTO Trans Group",
  },
  {
    message: "Prosesnya cepat dan mudah, dan lokasi yang ada sangat banyak. sangat mudah menemukan lokasi sewa mobil",
    avatar: "/Images/testimonial/avatar-4.png",
    nama: "Angie",
    job: "CEO Bigetron",
  },
  {
    message: "Mobil sangat nyaman untuk setiap pengalaman apa saja, karena mobil yang sangat beragam",
    avatar: "/Images/testimonial/avatar-5.png",
    nama: "Ranger Mas",
    job: "Caster Games",
  },
  {
    message: "Proses penyewaan mobil yang sangat mudah, dan cepat. sangat sangat membantu banget",
    avatar: "/Images/testimonial/avatar-6.png",
    nama: "Jonathan",
    job: "CEO EMPETALK",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div 
      variants={fadeIn("up", 0.2)} 
      initial="hidden" 
      whileInView={"show"} 
      viewport={{ once: false, amount: 0.6 }} 
      className="contianer mx-auto">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] lg:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, nama, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-5xl text-accent mb-6" />
                <div className="text-2xl lg:text-4xl max-w-[874px] mb-12 font-medium">{message}</div>
                <Image 
                  src={avatar} 
                  width={50} 
                  height={50} 
                  alt="..." 
                  className="mb-4" />
                <div className="text-xl font-semibold">{nama}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
