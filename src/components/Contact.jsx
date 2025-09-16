"use client"
import React, { useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { styles } from "../app/styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../app/utils/motion";
import CanvasLoader from "../app/_components/Loader";
import { useTranslations, useLocale } from 'next-intl';
import { toast } from "sonner"

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");

    return (
        <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};
const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    )
}
const btnEn = (loading) => {
    return (
        <button
            type='submit'
            className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer'
        >
            {loading ? "Sending..." : "Send"}
        </button>
    )
}
const btnZh = (loading) => {
    return (
        <button
            type='submit'
            className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer'
        >
            {loading ? "发送中..." : "发送"}
        </button>
    )
}
function Contact() {
    // let key = process.env.API_KEY
    emailjs.init('dst0ya8B7iW5z_Fpt');
    const formRef = useRef({});
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const [loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                'service_o190svh',
                'template_hjj6h8u',
                {
                    from_name: form.name,
                    to_name: "Liu Yan",
                    from_email: form.email,
                    to_email: "zqt42386937@hotmail.com",
                    message: form.message,
                },
                'dst0ya8B7iW5z_Fpt'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );

    };
    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            {/* <Toaster /> */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-[#100d25] p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>{t('email')}</p>
                <h3 className={styles.sectionHeadText}>{t('Contact')}</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'> {locale == 'zh' ? '您的名字' : 'Your Name'}</span>
                        <input
                            type='text'
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder={t('name')}
                            className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>{locale == 'zh' ? '您的邮箱' : 'Your email'}</span>
                        <input
                            type='email'
                            name='senderEmail'
                            value={form.senderEmail}
                            onChange={handleInputChange}
                            placeholder={t('address')}
                            className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>{locale == 'zh' ? '您的信息' : 'Your Message'}</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleInputChange}
                            placeholder={t('message')}
                            className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    {locale == 'zh' ? btnZh(loading) : btnEn(loading)}
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");
