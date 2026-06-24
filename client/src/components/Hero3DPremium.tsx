import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Float, PerspectiveCamera, Environment, Preload } from '@react-three/drei';

function GoldenGeometry({ position, rotation, scale, delay }: { position: [number, number, number], rotation: [number, number, number], scale: number, delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + delay;
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.3) * 0.3;
    meshRef.current.rotation.y = rotation[1] + t * 0.15;
    meshRef.current.rotation.z = rotation[2] + Math.cos(t * 0.25) * 0.2;
    
    // Subtle floating motion
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh 
        ref={meshRef} 
        position={position} 
        scale={scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial 
          color={hovered ? "#D4AF37" : "#A16207"}
          metalness={0.95}
          roughness={0.05}
          emissive={hovered ? "#D4AF37" : "#A16207"}
          emissiveIntensity={hovered ? 0.5 : 0.15}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function CopperAccent({ position, rotation, scale, delay }: { position: [number, number, number], rotation: [number, number, number], scale: number, delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + delay;
    meshRef.current.rotation.x = rotation[0] + t * 0.1;
    meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.4) * 0.4;
    meshRef.current.position.z = position[2] + Math.cos(t * 0.3) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 2]} />
      <meshStandardMaterial 
        color="#B45309"
        metalness={0.92}
        roughness={0.08}
        emissive="#B45309"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function ArtDecoScene() {
  const shapes = useMemo(() => {
    return [
      // Gold primary shapes
      { position: [-5, 3, -8], rotation: [0.5, 0.5, 0], scale: 1.8, delay: 0, type: 'gold' },
      { position: [6, -1, -7], rotation: [0, 0.2, 0.5], scale: 2.2, delay: 0.5, type: 'gold' },
      { position: [-3, -4, -5], rotation: [0.8, 0, 0.2], scale: 1.3, delay: 1, type: 'gold' },
      
      // Copper accents
      { position: [7, 4, -9], rotation: [0.2, 0.8, 0], scale: 1.5, delay: 0.3, type: 'copper' },
      { position: [-6, 2, -6], rotation: [0.4, 0.1, 0.6], scale: 1.2, delay: 0.7, type: 'copper' },
      { position: [4, -3, -8], rotation: [0.6, 0.4, 0.1], scale: 1.4, delay: 1.2, type: 'copper' },
    ] as const;
  }, []);

  return (
    <>
      {/* Sophisticated lighting setup */}
      <ambientLight intensity={0.6} />
      
      {/* Key light - warm gold */}
      <pointLight position={[15, 15, 15]} intensity={1.8} color="#D4AF37" decay={2} />
      
      {/* Fill light - subtle copper */}
      <pointLight position={[-12, -8, 10]} intensity={0.8} color="#B45309" decay={2} />
      
      {/* Back light - rim lighting effect */}
      <pointLight position={[0, 5, -20]} intensity={1.2} color="#A16207" decay={2} />
      
      {/* Render shapes */}
      {shapes.map((shape, i) => 
        shape.type === 'gold' ? (
          <GoldenGeometry key={i} {...shape} />
        ) : (
          <CopperAccent key={i} {...shape} />
        )
      )}
      
      {/* High-quality environment */}
      <Environment preset="studio" intensity={0.8} />
      <Preload all />
    </>
  );
}

export default function Hero3DPremium() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0C0A09] overflow-hidden">
      <Canvas 
        shadows 
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          precision: 'highp',
          powerPreference: 'high-performance'
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
        <ArtDecoScene />
      </Canvas>
      
      {/* Gradient overlay for depth and premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0A09]/20 to-[#0C0A09]/80" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />
    </div>
  );
}
