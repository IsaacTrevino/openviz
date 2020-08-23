import React from 'react';
import Canvas from './canvas';


const Node = (props: any) => {


  return (
    <>
      <Canvas/>
      
      {props.children}
    </>
  )
}

export default Node;