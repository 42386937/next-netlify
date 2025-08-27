"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { styles } from "../app/styles";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../app/utils/motion";
const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-[#090325] p-10 rounded-3xl xs:w-[320px] flex-1'
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='text-[#4ab4f1]'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <img
                    src={image}
                    alt='project_image'
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </motion.div>
);
function Feedbacks() {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px] bg-[#151030]`}>
            <div
                className={`bg-[#151030] rounded-2xl ${styles.padding} min-h-[100px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={` pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Feedbacks, "");