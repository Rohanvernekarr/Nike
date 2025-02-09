import React, { useState } from "react";
import { motion } from "framer-motion";  // Import Framer Motion
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../static";
import ShoeCard from "../components/ShoeCard";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* Left Section */}
      <motion.div 
        className="relative w-1/2 flex flex-col pl-5 justify-center items-start max-xl:w-full pt-28"
        initial="hidden" 
        animate="visible"
        variants={fadeIn}
      >
        <motion.p className="text-xl font-montserrat text-coral-red" variants={fadeIn}>
          Our Summer Collection
        </motion.p>

        <motion.h1 
          className="mt-10 text-8xl font-montserrat max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          variants={fadeIn}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 transition-transform duration-300 hover:scale-105">Nike</span> Shoes
        </motion.h1>

        <motion.p 
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm"
          variants={fadeIn}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </motion.p>

        {/* Shop Now Button */}
        <motion.div variants={fadeIn}>
          <div className="transition-transform duration-300 hover:scale-105">
          <Button 
            label="Shop now" 
            iconURL={arrowRight} 
            className="hover:bg-coral-red hover:text-white hover:scale-105 transition-all duration-300"
          /></div>
        </motion.div>

        {/* Statistics */}
        <motion.div className="flex justify-start items-start flex-wrap w-full mt-5 gap-16" variants={fadeIn}>
          {[
            { count: "1k+", label: "Brands" },
            { count: "500+", label: "Shops" },
            { count: "250k+", label: "Customers" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col justify-center items-center gap-2 group"
              whileHover={{ scale: 1.1 }}
            >
              <h1 className="text-4xl font-palanquin font-bold">
                {item.count}
              </h1>
              <p className="leading-7 text-slate-gray font-montserrat group-hover:text-black transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section (Shoe Display) */}
      <motion.div 
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Shoe Image */}
        <motion.img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
          whileHover={{ scale: 1.05 }}
        />

        {/* Shoe Thumbnails */}
        <motion.div 
          className="flex sm:gap-6 gap-4 absolute bottom-4 sm:left-[4%] max-sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        >
          {shoes.map((image, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
              <div
                className={`h-2 w-2 rounded-full bg-gray-400 mx-auto mt-2 transition-all duration-300 ${
                  bigShoeImg === image ? "bg-coral-red scale-125" : "hover:bg-black"
                }`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
