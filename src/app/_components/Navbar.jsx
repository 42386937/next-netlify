"use client"
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { styles } from "../styles";
import Image from "next/image";
import { menu } from "../../assets";
import { useTranslations, useLocale } from 'next-intl';
import { navEn, navZh } from "../../constants";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Link,
    scroller,
} from "react-scroll";
export default function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [language, setLanguage] = useState("");
    const locale = useLocale();
    const t = useTranslations('HomePage');
    const navEnglish = (active) => {
        return (
            <>
                {
                    navEn.map((item, index) => {
                        return (
                            <Link onClick={() => {
                                setToggle(!toggle);
                                setActive(item.title);
                            }} to={item.name} spy={true} smooth={true} duration={1000} offset={10} key={index} className={`font-bold cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-slate-400"}`}>{item.title}</Link>
                        )
                    })
                }
            </>
        )
    }
    const navChinese = (active) => {
        return (
            <>
                {
                    navZh.map((item, index) => {
                        return (
                            <Link onClick={() => {
                                setToggle(!toggle);
                                setActive(item.title);
                            }} to={item.name} spy={true} smooth={true} duration={1000} offset={10} key={index} className={`font-bold cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-slate-400"}`}>{item.title}</Link>
                        )
                    })
                }
            </>
        )
    }
    useEffect(() => {
        if (locale === "en") {
            setLanguage("Chinese");
        } else {
            setLanguage("英文");
        }
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);
    const switchLocale = async (newLocale) => {
        // 1. 调用 API 路由来设置 Cookie
        const response = await fetch('/api/locale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ locale: newLocale }),
        });
        if (response.status == 200) {
            window.location.reload();
        }
    };
    const languageChange = async () => {
        if (language === "Chinese") {
            setLanguage("英文");
            switchLocale("zh");
        } else {
            setLanguage("Chinese");
            switchLocale("en");
        }

    }
    return (
        <div className={`${styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-[#050816]" : "bg-transparent"
            }`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <div className="flex items-center gap-3" onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                    <Image src="/images/logo.png" alt="logo" width={40} height={40} className="rounded-full" />
                    <Link className="text-white font-bold text-[18px] cursor-pointer flex items-center" to="Hero" spy={true} smooth={true} duration={1000}>
                        <span>{t('YanLiu')} &nbsp;</span>
                        <span className="sm:block hidden"> | {t('Mastery')}</span>
                    </Link>

                </div>
                <div className="hidden sm:flex items-center gap-3">
                    <div onClick={languageChange} className={`font-bold cursor-pointer text-[16px] text-slate-400`}>{language}</div>
                    {language === "Chinese" ? navEnglish(active) : navChinese(active)}
                </div>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src={menu}
                                alt='menu'
                                className='w-[28px] h-[28px] object-contain'
                                onClick={() => setToggle(!toggle)}
                            />
                        </SheetTrigger>
                        <SheetContent className="w-[250px] sm:w-[340px] bg-[#090325] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-[18px] font-bold text-white">Navigation menu</SheetTitle>
                            </SheetHeader>
                            <div className="mt-10 p-8 w-full h-full flex flex-col">
                                {
                                    navEn.map((item, index) => {
                                        return (
                                            <Link to={item.name} spy={true} smooth={true} duration={1000} offset={50} className={`mt-2 w-full text-center text-[16px] ${active === item.title ? "font-bold" : ""
                                                }`} key={index} onClick={() => {
                                                    setToggle(!toggle);
                                                    setActive(item.title);
                                                }}>
                                                {item.title}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

