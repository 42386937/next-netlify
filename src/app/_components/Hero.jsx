"use client"
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./Computers";
import { useTranslations } from 'next-intl';
import {
    Link,
} from "react-scroll";
export default function Home() {
  const t = useTranslations('HomePage');
 
  return (
    <section className="w-full h-screen relative mx-auto">
      <div className={`absolute inset-0  max-w-7xl mx-auto ${styles.paddingX}  top-[100px] flex flex-row items-start gap-4 h-auto`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 bg-[#915EFF] rounded-full"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
           {t('hi')} <span className='text-[#915EFF]'>{t('YanLiu')}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t('develop')}<br className='sm:block hidden' />
            {t('interfaces')}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <Link className="absolute w-full xs:bottom-10 bottom-32 flex justify-center items-center" to="About" spy={true} smooth={true} duration={1000}>
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
      </Link>
    </section>
  );
  
}
