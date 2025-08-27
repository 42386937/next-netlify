"use client"
import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from 'three'
const Stars = (props) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  const positions = useMemo(() => {
    const count = 5000
    const positionsArray = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // 创建球状分布的星空
      const radius = 10 + Math.random() * 40 // 不同距离的星星
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positionsArray[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positionsArray[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positionsArray[i3 + 2] = radius * Math.cos(phi)
    }

    return positionsArray
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} ref={ref}>
        <pointsMaterial
          size={0.1}
          color="#ffffff"
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
