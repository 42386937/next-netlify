"use client"
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../app/styles";
import { projectsEn, projectsZh, appProjectsEn,appProjectsZh } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../app/utils/motion";
import { useTranslations, useLocale } from 'next-intl';
const Card = ({
  index,
  name,
  description,
  tags,
  image,
  type
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className='bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {
          type === 'web' ? (<div className='relative w-full h-[230px]'>
            <Image
              src={image}
              alt='project_image'
              className='w-full h-full  rounded-2xl'
            />
          </div>)
            : (<div className='relative w-full h-[400px] flex justify-center'>
              <Image
                src={image}
                alt='project_image'
                className='w-[80%] h-full  rounded-2xl'
              />
            </div>)
        }

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
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
        <p className={`${styles.sectionSubText} `}>{t('MyWokrks')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('Projects')}</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >{t('projectsIntroduction')}</motion.p>
      </div>
      <div className='hidden sm:flex mt-20 flex-wrap gap-7 w-full'>
        {locale == 'zh' ? WebC(projectsZh) : WebC(projectsEn)}
      </div>
      <div className="sm:hidden mt-20 flex flex-col gap-7">
        {locale == 'zh' ? WebC(appProjectsZh) : WebC(appProjectsEn)}
      </div>
    </div>
  )
}

export default SectionWrapper(Work, "");