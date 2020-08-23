import { colors } from '@material-ui/core';
import React, {useState, useRef} from 'react';
import { Vector3 } from 'three';
import { position } from './nodeType';

interface nodeProps {
  position: position
  title: string
  url: string
  rest?: any
}

function Node({ position, title, url, ...rest }: nodeProps) {

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
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial attach="material" color={hovered ? colors.blue[700] : colors.blue[800]}/>
      
    </mesh>
  );
}

export default Node;
