import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import Logo from './Logo';
import Particles from './Particles';


const CanvasContainer = (props: any) => {
  
  const mouse = useRef([0, 0])

  return (
    <Canvas
      camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      onCreated={({ gl }) => gl.setClearColor('#282c34')}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles count={10000} mouse={mouse}/>
      <Logo />
    </Canvas>
  )
}

export default CanvasContainer;