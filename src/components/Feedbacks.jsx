"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { styles } from "../app/styles";
import { testimonialsZh, testimonialsEn } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../app/utils/motion";
import { useTranslations, useLocale } from 'next-intl';
const Card = ({
    index,
    testimonial,
    name,
    designation,
    company,
    imageUrl,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-[#090325] p-10 rounded-3xl w-[320px] border-2 border-[#4ab4f1]'
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <div className='text-white tracking-wider text-[18px]  w-full'>{testimonial}</div>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='text-[#4ab4f1]'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>
                <div className='w-[50px] h-[50px]'>
                <Image
                    src={imageUrl}
                    alt='project_image'
                    // fill
                    className='rounded-[50%] w-[50px] h-[50px]'
                />
                </div>
            </div>
        </div>
    </motion.div>
);
const FeedbackCard = (arr) => {
    return (
        <div className={` pb-14 ${styles.paddingX} flex flex-wrap gap-7  `}>
            {arr.map((testimonial, index) => (
                <Card key={testimonial.name} index={index} {...testimonial} />
            ))}
        </div>
    )
}
function Feedbacks() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px] bg-[#151030]`}>
            <div
                className={`bg-[#151030] rounded-2xl ${styles.padding} min-h-[100px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>{t('say')}</p>
                    <h2 className={styles.sectionHeadText}>{t('Testimonials')}.</h2>
                </motion.div>
            </div>
            {locale == 'zh' ? FeedbackCard(testimonialsZh) : FeedbackCard(testimonialsEn)}
        </div>
    )
}

export default SectionWrapper(Feedbacks, "");