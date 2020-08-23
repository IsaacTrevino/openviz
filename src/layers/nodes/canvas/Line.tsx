import React from 'react';
import { colors } from '@material-ui/core';
import { useUpdate } from 'react-three-fiber';
import { BufferGeometry, Vector3 } from 'three';

interface lineProps {
  startPosition: Vector3,
  endPosition: Vector3
}

function Line({ startPosition, endPosition }: lineProps) {

  const ref: any = useUpdate((geometry: BufferGeometry) => {
    geometry.setFromPoints([startPosition, endPosition])
  }, [])
 
  return (
    <line>
      <bufferGeometry attach='geometry' ref={ref} />
      <lineBasicMaterial attach='material' color={colors.common.white} />
    </line>
  );
}

export default Line;
