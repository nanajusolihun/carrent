"use client"

import { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
import { Link } from "react-scroll"

const BackToTopBtn = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
        } fixed bg-accent hover:bg-accent-hover w-12 h-12 right-8 bottom-12 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white rounded-lg`
      }
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
}

export default BackToTopBtn