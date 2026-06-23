import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';

function GeometricShape({ position, rotation, scale, color }: { position: [number, number, number], rotation: [number, number, number], scale: number, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = rotation[0] + t * 0.2;
    meshRef.current.rotation.y = rotation[1] + t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.9} 
          roughness={0.1} 
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function ArtDecoBackground() {
  const shapes = useMemo(() => {
    return [
      { position: [-4, 2, -5], rotation: [0.5, 0.5, 0], scale: 1.5, color: '#A16207' }, // Gold
      { position: [4, -2, -6], rotation: [0, 0.2, 0.5], scale: 2, color: '#B45309' },  // Copper
      { position: [-2, -3, -4], rotation: [0.8, 0, 0.2], scale: 1, color: '#A16207' }, // Gold
      { position: [5, 3, -7], rotation: [0.2, 0.8, 0], scale: 1.2, color: '#44403C' },  // Metallic Grey
    ] as const;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A16207" />
      
      {shapes.map((shape, i) => (
        <GeometricShape key={i} {...shape} />
      ))}
      
      <Environment preset="city" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0C0A09]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ArtDecoBackground />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0A09]/50 to-[#0C0A09]" />
    </div>
  );
}
