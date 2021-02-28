import { colors } from '@material-ui/core';
import React, {useState, useRef} from 'react';
import { Vector3 } from 'three';
import { position } from './nodeType';

interface cubeProps {
  position: position
  title: string
  url: string
  rest?: any
}

function Cube({ position, title, url, ...rest }: cubeProps) {

  const mesh:any = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  
  return (
    <mesh
      {...rest}
      ref={mesh}
      position={position}
      scale={hovered ? [1.2, 1.2, 1] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? colors.red[700] : colors.red[800]}/>
      
    </mesh>
  );
}

export default Cube;
