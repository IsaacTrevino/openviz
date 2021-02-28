import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Position {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  constructor(init: ModelInit<Position>);
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Cube {
  readonly id: string;
  readonly title: string;
  readonly position: Position;
  readonly nodes?: Node[];
  constructor(init: ModelInit<Cube>);
  static copyOf(source: Cube, mutator: (draft: MutableModel<Cube>) => MutableModel<Cube> | void): Cube;
}

export declare class Node {
  readonly id: string;
  readonly cubeId: string;
  readonly title: string;
  readonly content?: string;
  readonly position: Position;
  readonly connections?: Node[];
  readonly nodeConnectionsId?: string;
  constructor(init: ModelInit<Node>);
  static copyOf(source: Node, mutator: (draft: MutableModel<Node>) => MutableModel<Node> | void): Node;
}