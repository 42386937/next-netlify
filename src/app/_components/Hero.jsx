"use client"
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./Computers";
export default function Home() {
  return (
    <section className="w-full h-screen relative mx-auto">
      <div className={`absolute inset-0 z-10 max-w-7xl mx-auto ${styles.paddingX}  top-[100px] flex flex-row items-start gap-4 h-auto`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 bg-[#915EFF] rounded-full"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Adrian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute w-full bottom-[20px] flex justify-center items-center z-12">
        <div className="w-[30px] h-[60px] border-4 border-[#aaa6c3] rounded-full flex justify-center cursor-pointer">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </div>
    </section>
  );
}
