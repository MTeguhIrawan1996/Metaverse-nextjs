"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] aspect-square object-contain cursor-pointer z-10"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        ONEMETAVERSE
      </h2>
      <img
        src="/menu.svg"
        alt="search"
        className="w-[24px] aspect-square object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
