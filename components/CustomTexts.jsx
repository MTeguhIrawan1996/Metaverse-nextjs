"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-semibold text-[16px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    className={`${textStyles} mt-2 font-bold md:text-[64px] text-[40px] text-white`}
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
  >
    {title}
  </motion.h2>
);
