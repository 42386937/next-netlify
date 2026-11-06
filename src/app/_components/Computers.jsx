"use client"
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader, { SceneReady } from "./Loader";
const Computers = ({ isMobile }) => {
    const computer = useGLTF("/desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={6.15} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={3}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={2} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}
export default function ComputersCanvas() {
    const [isMobile, setIsMobile] = useState(false);
    // 模型加载完成后由 <SceneReady /> 置为 true，用来收起 DOM 层加载器
    const [ready, setReady] = useState(false);
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
        <div className='relative w-full h-full'>
            <Canvas
                frameloop='demand'
                shadows
                dpr={[1, 2]}
                camera={{ position: [20, 3, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                {/* fallback 必须是 three 能渲染的东西，DOM 加载器放到 Canvas 外面 */}
                <Suspense fallback={null}>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Computers isMobile={isMobile} />
                    <SceneReady onReady={setReady} />
                </Suspense>
                <Preload all />
            </Canvas>
            {!ready && <CanvasLoader />}
        </div>
    )
}
