// components/BallCanvas.jsx
"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader, { SceneReady } from "../app/_components/Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl.src]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

export default function BallCanvas({ icon }) {
  // 贴图加载完成后由 <SceneReady /> 置为 true，用来收起 DOM 层加载器
  const [ready, setReady] = useState(false);
  return (
    <div className='relative w-full h-full'>
      <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        {/* fallback 必须是 three 能渲染的东西，DOM 加载器放到 Canvas 外面 */}
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
          <SceneReady onReady={setReady} />
        </Suspense>
        <Preload all />
      </Canvas>
      {!ready && <CanvasLoader />}
    </div>
  );
}
