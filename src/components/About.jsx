"use client"
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../app/styles";
import { servicesEn, servicesZh } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../app/utils/motion";
import { useTranslations, useLocale } from 'next-intl';
const ServiceOption = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] flex-1'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const ServiceCard = (arr) => (
  <div className='mt-10 flex flex-wrap gap-10'>
    {arr.map((item, index) => (
      <ServiceOption key={item.title} index={index} {...item} />
    ))}
  </div>
);
const About = () => {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <motion.div variants={textVariant()} initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}>
        <p className={styles.sectionSubText}>{t('Introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('strengths')}.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'>{t('desc1')}</motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-secondary text-[17px] max-w-4xl leading-[30px]'>{t('desc2')}</motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-secondary text-[17px] max-w-4xl leading-[30px]'>{t('desc3')}</motion.p>
      {locale == 'zh' ? ServiceCard(servicesZh) : ServiceCard(servicesEn)}
    </div>
  );
}
export default SectionWrapper(About, "about");
