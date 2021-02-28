import React, {useEffect, useCallback, useState} from 'react';
import { useTheme } from '@material-ui/core';
import { Canvas, useUpdate } from 'react-three-fiber';
import Node from './Node';
import Line from './Line';
// import { nodes } from '../mock';
// import { Vector3 } from 'three';
import { DataStore } from 'aws-amplify';
import { Node as NodeModel } from 'src/models';
import { API, graphqlOperation } from 'aws-amplify';
import { listNodes } from 'src/graphql/queries';


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


  return (
    <Canvas
      camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      style={{ background: theme.palette.background.default }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.nodes?.map((node: any, i: number) => (
        <Node key={i} position={[node.position.x, node.position.y, node.position.z]} title={node.title} url={`/${node.title}`} />
      ))}
      {/* <Line startPosition={[-5, 0, 0]} endPosition={[5, 0, 0]} /> */}
    </Canvas>
  )
}

export default CanvasContainer;