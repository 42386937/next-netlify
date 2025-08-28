"use client"
import { useEffect, useState } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { styles } from "../styles";
import Image from "next/image";
import { menu } from "../../assets";
// import logo from "../../../public/images/logo.png";
// const logo = require("../../assets/logo.png");
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Link,
} from "react-scroll";
const navLinks = [
    {
        id: "chinese",
        title: "Chinese",
        path: '/',
        name: "chinese"
    },
    {
        id: "about",
        title: "About",
        path: '#about',
        name: "About"
    },
    {
        id: "work",
        title: "Work",
        path: '#work',
        name: "Work"
    },
    {
        id: "contact",
        title: "Contact",
        path: '/',
        name: "Contact"
    },
]
export default function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
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
    return (
        <div className={`${styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-[#050816]" : "bg-transparent"
            }`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <div className="flex items-center gap-3" onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                    <Image src="/images/logo.png" alt="logo" width={40} height={40}  className="rounded-full"/>
                    <Link className="text-white font-bold text-[18px] cursor-pointer flex items-center" to="Hero" spy={true} smooth={true} duration={1000}>
                        <span>YanLiu &nbsp;</span>
                        <span className="sm:block hidden"> | JavaScript Mastery</span>
                    </Link>

                </div>
                <div className="hidden sm:flex items-center gap-3">
                    {
                        navLinks.map((item, index) => {
                            return (
                                <Link onClick={() => {
                                    setToggle(!toggle);
                                    setActive(item.title);
                                }} to={item.name} spy={true} smooth={true} duration={1000} offset={50} key={index} className={`font-bold cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-slate-400"}`}>{item.title}</Link>
                            )
                        })
                    }
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
                                    navLinks.map((item, index) => {
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

