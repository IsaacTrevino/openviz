import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Position {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  constructor(init: ModelInit<Position>);
}

export declare class Node {
  readonly id: string;
  readonly title: string;
  readonly content?: string;
  readonly position: Position;
  constructor(init: ModelInit<Node>);
  static copyOf(source: Node, mutator: (draft: MutableModel<Node>) => MutableModel<Node> | void): Node;
}