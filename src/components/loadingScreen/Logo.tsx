import { colors } from '@material-ui/core';
import React, {useState, useRef} from 'react';
import { useFrame } from 'react-three-fiber'


function Box(props: any) {

  // This reference will give us direct access to the mesh
  const mesh:any = useRef()
  
  useFrame(() => ( mesh.current.rotation.z += 0.01))


  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[0,0,.5235]}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    >
      <circleBufferGeometry attach="geometry" args={[5, 0, 0, Math.PI * 2]} />
      <meshStandardMaterial attach="material" color={colors.blue[700]} wireframe/>
    </mesh>
  );
}

export default Box;
