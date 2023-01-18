"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } ${
      styles.flexCenter
    } min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer rounded-3xl overflow-hidden`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute flex lg:flex-col lg:justify-start items-center lg:items-start bottom-0 p-8 w-full bg-[rgba(0,0,0,0.5)]">
        <div
          className={`${styles.flexCenter} w-[60px] lg:h-[60px] h-[50px] rounded-3xl glassmorphism lg:mb-4`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div className="w-full ml-3 lg:ml-0">
          <p className="font-bold sm:text-[16px] text-[12px] lg:leading-5 leading-3 text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="lg:mt-[16px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
