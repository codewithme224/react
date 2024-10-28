/* eslint-disable */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from "@react-three/drei";

const AppleLoader = () => {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
      ringRef.current.scale.x = ringRef.current.scale.y = 
        0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={ringRef}>
      <mesh>
        <ringGeometry args={[0.5, 0.6, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const Loader = () => {
  return (
    <>
      <AppleLoader />
      <Html center>
        <div className="text-sm font-light text-white opacity-50">Loading...</div>
      </Html>
    </>
  );
};

export default Loader;
