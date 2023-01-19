"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 items-center"
  >
    <img
      src={imgUrl}
      alt={`planet-${index}`}
      className="md:w-[270px] w-full h-[250px] object-cover rounded-[32px]"
    />
    <div className="w-full flex justify-start items-center gap-6">
      <div className="flex-1 md:ml-[12px] flex flex-col">
        <h4 className="font-normal text-[18px] lg:text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[12px] font-normal text-[12px] lg:text-[18px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[80px] aspect-square bg-transparent border-2 border-solid border-white rounded-full">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] aspect-square object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
