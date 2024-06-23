// import { Environment, OrbitControls, Text } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React from 'react'
// // import { Color } from 'three'


// const Boxgemotery =() =>{
//     return(
//         <mesh position={[0, 0.5, 0]} >
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial metalness={1} roughness={0} color="orange" />
//        <Text
//         position={[0, 0, 1.0]} // Position the text slightly in front of the sphere
//         fontSize={0.3}
        
//         color="white"
//         anchorX="center"
//         anchorY="middle">
// hello world
//        </Text>
//     </mesh>
//     )
// }

// const Textbox = () => {
//   return (
//     <div className='h-screen w-screen'>
//         <Canvas>
//             <Environment preset='studio'/>
//            <color attach="background" args={['#64748b']} />
//             <OrbitControls/>
//             <Boxgemotery/>
//         </Canvas>
        
//     </div>
//   )
// }

// export default Textbox



// import { Environment, OrbitControls, Text } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import React from 'react';


// const degToRad = (degrees) => {
//   return degrees * (Math.PI / 80);
// };

// const curvedText = (text, radius, angle) => {
//   const letters = text.split('');
//   const segmentAngle = angle / (letters.length - 1);
//   return letters.map((letter, i) => {
//     const theta = degToRad(-angle / 2 + segmentAngle * i); 
//     const x = radius * Math.sin(theta);
//     const z = radius * Math.cos(theta);
//     const rotationY = theta; 
//     return { letter, position: [x, 0, z], rotation: [0, rotationY, 0] };
//   });
// };

// const BoxGeometry = () => {
//   const text = 'The world is round and you can meet any one any time ';
//   const radius = 1;
//   const angle = 98; 
//   const letters = curvedText(text, radius, angle);

//   return (
//     <mesh position={[0, 0.1, 0]}>
//       <sphereGeometry  args={[1, 32, 32]} />
//       <meshStandardMaterial color="orange" />
//       {letters.map(({ letter, position, rotation }, index) => (
//         <Text
//           key={index}
//           position={position}
//           rotation={rotation}
//           fontSize={0.1}
//           color="white"
//           anchorX="center"
//           anchorY="middle"
//         >
//           {letter}
//         </Text>
//       ))}
//     </mesh>
//   );
// };

// const Textbox = () => {
//   return (
//     <div className="h-screen w-screen">
//       <Canvas >
        
//         <Environment preset="city" background={false} />
//         <color attach="background" args={['#64748b']} />
//          <axesHelper/>
//         <OrbitControls
//          maxPolarAngle={Math.PI}
//          minPolarAngle={0}
//          enablePan={false}
//          rotateSpeed={0.5} 
//          maxDistance={10} minDistance={4} />
//         <BoxGeometry    />
//       </Canvas>
//     </div>
//   );
// };

// export default Textbox;

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
      <sphereGeometry  args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
      {letters.map(({ letter, position, rotation }, index) => (
        <Text
          key={index}
          position={position}
          rotation={rotation}
          fontSize={0.1}
          color="white"
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
      <Canvas >
        
        <Environment preset="city" background={false} />
        <color attach="background" args={['#64748b']} />
         <axesHelper/>
        <OrbitControls
         maxPolarAngle={Math.PI}
         minPolarAngle={0}
         enablePan={false}
         rotateSpeed={0.5} 
         maxDistance={10} minDistance={4} />
        <BoxGeometry    />
      </Canvas>
    </div>
  );
};

export default Textbox;