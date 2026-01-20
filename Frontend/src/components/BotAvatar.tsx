import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Float, Environment, Center, ContactShadows } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/chatbot.glb');
    // Rotate model to face front (if side facing)
    return <primitive object={scene} scale={5.5} position={[0, -1.9, 0]} rotation={[0, -Math.PI / 2, 0]} />;
};

const BotAvatar = () => {
    return (
        <div className="w-16 h-16 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
                        <Center>
                            <Model />
                        </Center>
                    </Float>
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default BotAvatar;
