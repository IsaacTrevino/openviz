import React from 'react';
import Box from './Box';
import { Canvas } from 'react-three-fiber';


const Node = (props: any) => {

  console.log('Node: ',props);
  return (
    <>
      <p>Node</p>
      
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      
      {props.children}
    </>
  )
}

export default Node;