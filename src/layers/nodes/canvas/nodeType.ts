import { Vector3 } from 'three';

export type position = [x: number, y: number, z: number];

export interface connection {
  name: string
  position: position
}

export interface node {
  name: string
  position: position
  connections?: node[]
}