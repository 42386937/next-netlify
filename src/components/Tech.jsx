// Tech.jsx
"use client";
import dynamic from "next/dynamic";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// 关键：禁用 SSR，只在客户端渲染 Canvas
const BallCanvas = dynamic(() => import("./BallCanvas"), { ssr: false });

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");