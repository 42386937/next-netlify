"use client"
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../app/styles";
import { honourEn,honourZh } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../app/utils/motion";
import { useTranslations, useLocale } from 'next-intl';
const Card = ({
  index,
  name,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className='bg-[#151030] p-5 rounded-2xl w-[360px] '
      >
        <div className='relative w-full h-[230px] '>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full  rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] w-full text-center'>{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};
const WebC = (arr) => (
  <>
    {
      arr.map((item, index) => (
        <Card key={`project-${index}`} {...item} index={index} />
      ))
    }
  </>
);
function Work() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('MyHonour')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('content')}</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >{t('process')}</motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7 w-full '>
        {locale == 'zh' ? WebC(honourZh) : WebC(honourEn)}
      </div>
    </div>
  )
}

export default SectionWrapper(Work, "");