import { TypeAnimation } from 'react-type-animation';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function RotatingBox() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    // Assuming 0.01 is the desired rotation per second
    meshRef.current.rotation.x += 0.6 * delta;
    meshRef.current.rotation.y += 0.6 * delta;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[7, 7, 7]} /> {/* Adjust size as desired */}
      <meshBasicMaterial color={'white'} wireframe />
    </mesh>
  );
}

function MainScreen() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <div className="flex-grow text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
        <h1 className="text-2xl 2xl:text-4xl font-abc font-medium text-[#ffffff] mt-16 lg:mt-0">Hi, my name is</h1>
        <h1 className="text-4xl 2xl:text-8xl lg:text-6xl font-abc font-bold gradient-text mt-8">Alexander Masztak</h1>
        <h1 className="text-3xl 2xl:text-6xl lg:text-5xl font-abc font-bold text-[#ffffff] mt-8">
          I create <span className="font-bold gradient-text">
            <TypeAnimation
              sequence={[
                "Websites",
                4000,
                "Apps",
                4000,
                () => {
                  console.log("Done typing!"); // Optional callback
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-base font-abc text-white mt-8">
          Currently, I am a student at <span className="gradient-text"> Illinois State University</span>
          <br /> majoring in Computer Science - General. I focus on creating
          <br /> websites and mobile applications.
        </p>
      </div>
      {/* Hide the canvas on smaller screens using the lg:block utility class */}
      <div className="hidden h-64 lg:flex lg:justify-center lg:w-1/2 lg:w-1/3">
      <Canvas camera={{ position: [0, 0, 30], fov: 25 }}>

          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <RotatingBox />
        </Canvas>
        
      </div>
    </div>
  );
}

export default MainScreen;
