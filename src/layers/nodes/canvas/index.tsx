import React from 'react';
import { Canvas } from 'react-three-fiber';
import Node from './Node';
import Line from './Line';
import { nodes } from '../mock';
import { Vector3 } from 'three';


const CanvasContainer = (props: any) => {

  // Nodes must be placed in with efficient spacing

  const connections = nodes.map(node => node.connections.map(connection => [node.position ,connection.position])).flat();
  console.log('all connections', connections);

  // back end operation 
  console.log(connections.find(connection => connection. ))
  const filtered = connections.filter(connection => {
    connection[0] === 
  })
  //connections.



  
  return (
    <Canvas
      camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      onCreated={({ gl }) => gl.setClearColor('#282c34')}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {nodes.map((node,i) => (
        <Node key={i} position={node.position} title={node.name} url={`/${node.name}`} />
      ))}
      {/* <Line startPosition={[-5, 0, 0]} endPosition={[5, 0, 0]} /> */}
    </Canvas>
  )
}

export default CanvasContainer;