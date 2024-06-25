import { Environment, OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';


const degToRad = (degrees) => {
  return degrees * (Math.PI / 80);
};

const curvedText = (text, radius, angle) => {
  const letters = text.split('');
  const segmentAngle = angle / (letters.length - 1);
  return letters.map((letter, i) => {
    const theta = degToRad(-angle / 2 + segmentAngle * i); 
    const x = radius * Math.sin(theta);
    const z = radius * Math.cos(theta);
    const rotationY = theta; 
    return { letter, position: [x, 0, z], rotation: [0, rotationY, 0] };
  });
};

const BoxGeometry = () => {
  const text = 'The world is round and you can meet any one any time ';
  const radius = 1;
  const angle = 98; 
  const letters = curvedText(text, radius, angle);

  return (
    <mesh position={[0, 0.1, 0]}>
      <sphereGeometry  args={[1, 63, 63]} />
      <meshStandardMaterial emissive="orange" emissiveIntensity={1} metalness={1} roughness={0} color="orange" />
      {letters.map(({ letter, position, rotation }, index) => (
        <Text
          key={index}
          position={position}
          rotation={rotation}
          fontSize={0.1}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {letter}
        </Text>
      ))}
    </mesh>
  );
};

const Textbox = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{position:[0,0,0.1] ,fov:10}} >
        {/* <ambientLight/> */}
        <Environment preset="city" background={false} />
        <color attach="background" args={['#64748b']} />
         <axesHelper/>
        <OrbitControls
         maxPolarAngle={Math.PI}
         minPolarAngle={0}
         enablePan={false}
         rotateSpeed={0.5} 
         maxDistance={60} 
         minDistance={4} />
        <BoxGeometry    />
      </Canvas>
    </div>
  );
};

export default Textbox;
