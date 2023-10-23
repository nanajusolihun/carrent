"use client"

import React from "react"
import Image from "next/image"
import Copyright from "./Copyright"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import { fadeIn } from "../../../variant"
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer className="pt-20 bg-red-600 z-20 ">
      <div className="container mx-auto mb-20">
        {/* Grid */}
        <motion.div 
          variants={fadeIn("up", 0.2)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.6 }} 
          className="flex flex-col lg:flex-row lg:justify-between gap-x-3 gap-y-4">
          {/* logo */}
          <div className="flex flex-col flex-1 gap-y-3">
            
            <Link 
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <h1 className="lg:text-4xl text-xl text-black font-extrabold font-serif">
                CARRENT
              </h1>
            </Link>
            <div className="text-white">
              Apabila terdapat pertanyaan langsung ditanyakan ke admin
            </div>
            {/* Phone and Email */}
            <div className="flex flex-col gap-y-2 font-semibold">
              {/* Phone */}
              <div className="flex items-center gap-x-3 ">
                <FaPhone />
                <div className="font-medium text-white">0812 3456 7890</div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-x-3 ">
                <FaEnvelope />
                <div className="font-medium text-white">carrental@gmail.com</div>
              </div>
            </div>
          </div>
          {/* Link */}
          <div className="flex flex-1 flex-col lg:items-center">
            <div className="text-white">
              <h3 className="h3 font-bold mb-6 text-black">Company</h3>
              <ul className="flex flex-col gap-y-3 font-semibold">
                <li>
                  <a href="">Jakarta</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Programs */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-5 ">Working Hours</h3>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2">
                <div className="text-white">Mon-Fri:</div>
                <div className="font-semibold text-white">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-white">Saturday:</div>
                <div className="font-semibold text-white">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-white">Sunday:</div>
                <div className="font-semibold text-white">Closed</div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-5">News Letter</h3>
            <div className="mb-9 text-white">
              Silahkan kasih masukan untuk kami bisa improve
            </div>
              <form className="flex gap-x-2 h-12 border-none">
                <input 
                  type="text" 
                  placeholder="Your Email"
                  className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" />
                <button type="submit" className="btn btn-sm btn-primary hover:opacity-85 w-20">Submit</button>
              </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer