import React, {useEffect, useCallback, useState} from 'react';
import { useTheme } from '@material-ui/core';
import { Canvas, useUpdate } from 'react-three-fiber';
import Node from './Node';
// import Line from './Line';
// import { nodes } from '../mock';
// import { Vector3 } from 'three';
import { DataStore } from 'aws-amplify';
import { Node as NodeModel } from 'src/models'
import { position } from './nodeType';


const CanvasContainer = (props: any) => {

  // Nodes must be placed in with efficient spacing

  // const connections = nodes.map(node => node.connections.map(connection => [node.position ,connection.position])).flat();
  // console.log('all connections', connections);

  // // back end operation 
  // console.log(connections.find(connection => connection. ))
  // const filtered = connections.filter(connection => {
  //   connection[0] === 
  // })
  //connections.
  const theme = useTheme();
  const [nodes, setNodes]: any | null = useState(null);

  const query = useCallback(() => {
    const fetchNodes = async () => {
      const nodes = await DataStore.query(NodeModel);
      console.log('raw query:', nodes)
      setNodes(nodes);
    };
    fetchNodes();
  },[]);


  useEffect(() => {
    query();
    console.log('query nodes', nodes)
  },[]);




  return (
    <Canvas
      camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      style={{ background: theme.palette.background.default }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {nodes?.map((node: { position: position, name: string }, i: number) => (
        <Node key={i} position={node.position} title={node.name} url={`/${node.name}`} />
      ))}
      {/* <Line startPosition={[-5, 0, 0]} endPosition={[5, 0, 0]} /> */}
    </Canvas>
  )
}

export default CanvasContainer;