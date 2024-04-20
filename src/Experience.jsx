import React, { useRef } from 'react'
import './styles.css'
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Experience = () => {
  const boxRef = useRef();

  // useFrame(({clock}, delta) => {
  //   boxRef.current.position.y = Math.cos(clock.getElapsedTime());
  //   // boxRef.current.rotation.x += 0.4 * delta;
  //   boxRef.current.position.x += 0.1 * delta;
  // });



  return (
    <>
      <ambientLight /> // sirve para iluminar la escena
      <directionalLight position={[10, 10, 5]} intensity={1} /> // luz direccional
      <OrbitControls makeDefault />
      <mesh
        ref={boxRef}
        position={[0, 0,  0]}
        rotation={[0, Math.PI / 3 , 0]}
        scale={2}
      >
        <boxGeometry args={[1, 1, 1]} /> // 1x1x1 cube
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  )
}

export default Experience;
