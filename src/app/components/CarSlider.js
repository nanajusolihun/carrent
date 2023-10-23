"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
const dataCars = [
  {
    id: 1,
    name: "Avanza",
    price: 300000,
    stars: 5.0,
    image: "/Images/carsliders/AVANZA.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Manual",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1500 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "7",
      },
    ],
  },
  {
    id: 2,
    name: "Alvez",
    price: 275000,
    stars: 4.5,
    image: "/Images/carsliders/ALVEZ.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Manual",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1500 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "7",
      },
    ],
  },
  {
    id: 3,
    name: "Avanza",
    price: 200000,
    stars: 5.0,
    image: "/Images/carsliders/AYLA.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Otomatis",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1200 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "5",
      },
    ],
  },
  {
    id: 4,
    name: "Brio",
    price: 200000,
    stars: 5.0,
    image: "/Images/carsliders/BRIO.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Otomatis",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1200 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "5",
      },
    ],
  },
  {
    id: 5,
    name: "Creta",
    price: 400000,
    stars: 5.0,
    image: "/Images/carsliders/CRETA.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Otomatis",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1400 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "5",
      },
    ],
  },
  {
    id: 6,
    name: "Ertiga",
    price: 275000,
    stars: 5.0,
    image: "/Images/carsliders/ERTIGA.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Otomatis",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1500 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "7",
      },
    ],
  },
  {
    id: 7,
    name: "Mazda 3",
    price: 550000,
    stars: 5.0,
    image: "/Images/carsliders/MAZDA3.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Manual",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1600 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "5",
      },
    ],
  },
  {
    id: 8,
    name: "Seltos",
    price: 300000,
    stars: 5.0,
    image: "/Images/carsliders/SELTOS.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Otomatis",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1500 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "7",
      },
    ],
  },
  {
    id: 9,
    name: "Xpander",
    price: 350000,
    stars: 5.0,
    image: "/Images/carsliders/XPANDER.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Manual",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1500 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "7",
      },
    ],
  },
  {
    id: 10,
    name: "MU-X",
    price: 500000,
    stars: 5.0,
    image: "/Images/carsliders/MUX.png",
    info: [
      {
        icon: "/Icons/carsliders/transmission.png",
        text: "Manual",
      },
      {
        icon: "/Icons/carsliders/fuel-type.png",
        text: "Bensin",
      },
      {
        icon: "/Icons/carsliders/engine.png",
        text: "1900 CC",
      },      
      {
        icon: "/Icons/carsliders/model-seats.png",
        text: "7",
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto bg-white mt-4 pb-10">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1028: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {
          dataCars.map((car, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[350px] mx-auto sm:mx-0 bg-neutral-100 p-3 rounded-lg shadow-lg mb-3">
                  <Image src={car.image} width={280} height={250} alt="..." style={{ objectFit: "contain" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold uppercase">{car.name}</h3>
                      <h3 className="mt-3 mb-3 text-accent font-semibold uppercase">{car.price} /hari</h3>
                    </div>
                    {/* Start */}
                    <div className="flex h-max gap-x-2 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  {/* Car Info */}
                  <div className="flex justify-center gap-x-3 lg:gap-x-4 w-max mb-5 ">
                    {car.info.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-col justify-center items-center gap-y-2 gap-x-3">
                          <div className="bg-red-200 rounded-full w-12 h-12 flex justify-center items-center">
                            <Image src={item.icon} width={20} height={20} />
                          </div>
                          <div className="text-[12px] uppercase">{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Button */}
                  <button className="btn btn-accent btn-sm">Lihat Detail</button>
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
