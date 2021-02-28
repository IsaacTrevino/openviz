/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCubeInput = {
  id?: string | null,
  title: string,
  position: PositionInput,
};

export type PositionInput = {
  x: number,
  y: number,
  z: number,
};

export type ModelCubeConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCubeConditionInput | null > | null,
  or?: Array< ModelCubeConditionInput | null > | null,
  not?: ModelCubeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCubeInput = {
  id: string,
  title?: string | null,
  position?: PositionInput | null,
};

export type DeleteCubeInput = {
  id?: string | null,
};

export type CreateNodeInput = {
  id?: string | null,
  cubeId: string,
  title: string,
  content?: string | null,
  position: PositionInput,
  nodeConnectionsId?: string | null,
};

export type ModelNodeConditionInput = {
  cubeId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  nodeConnectionsId?: ModelIDInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNodeInput = {
  id: string,
  cubeId?: string | null,
  title?: string | null,
  content?: string | null,
  position?: PositionInput | null,
  nodeConnectionsId?: string | null,
};

export type DeleteNodeInput = {
  id?: string | null,
};

export type ModelCubeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCubeFilterInput | null > | null,
  or?: Array< ModelCubeFilterInput | null > | null,
  not?: ModelCubeFilterInput | null,
};

export type ModelNodeFilterInput = {
  id?: ModelIDInput | null,
  cubeId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  nodeConnectionsId?: ModelIDInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateCubeMutationVariables = {
  input: CreateCubeInput,
  condition?: ModelCubeConditionInput | null,
};

export type CreateCubeMutation = {
  createCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCubeMutationVariables = {
  input: UpdateCubeInput,
  condition?: ModelCubeConditionInput | null,
};

export type UpdateCubeMutation = {
  updateCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCubeMutationVariables = {
  input: DeleteCubeInput,
  condition?: ModelCubeConditionInput | null,
};

export type DeleteCubeMutation = {
  deleteCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type CreateNodeMutation = {
  createNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type UpdateNodeMutation = {
  updateNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type DeleteNodeMutation = {
  deleteNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCubeQueryVariables = {
  id: string,
};

export type GetCubeQuery = {
  getCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCubesQueryVariables = {
  filter?: ModelCubeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCubesQuery = {
  listCubes:  {
    __typename: "ModelCubeConnection",
    items:  Array< {
      __typename: "Cube",
      id: string,
      title: string,
      position:  {
        __typename: "Position",
        x: number,
        y: number,
        z: number,
      },
      nodes:  {
        __typename: "ModelNodeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetNodeQueryVariables = {
  id: string,
};

export type GetNodeQuery = {
  getNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNodesQuery = {
  listNodes:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      id: string,
      cubeId: string,
      title: string,
      content: string | null,
      position:  {
        __typename: "Position",
        x: number,
        y: number,
        z: number,
      },
      nodeConnectionsId: string | null,
      connections:  {
        __typename: "ModelNodeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type NodesByCubeQueryVariables = {
  cubeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByCubeQuery = {
  nodesByCube:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      id: string,
      cubeId: string,
      title: string,
      content: string | null,
      position:  {
        __typename: "Position",
        x: number,
        y: number,
        z: number,
      },
      nodeConnectionsId: string | null,
      connections:  {
        __typename: "ModelNodeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCubeSubscription = {
  onCreateCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCubeSubscription = {
  onUpdateCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCubeSubscription = {
  onDeleteCube:  {
    __typename: "Cube",
    id: string,
    title: string,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodes:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNodeSubscription = {
  onCreateNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNodeSubscription = {
  onUpdateNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNodeSubscription = {
  onDeleteNode:  {
    __typename: "Node",
    id: string,
    cubeId: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    nodeConnectionsId: string | null,
    connections:  {
      __typename: "ModelNodeConnection",
      items:  Array< {
        __typename: "Node",
        id: string,
        cubeId: string,
        title: string,
        content: string | null,
        nodeConnectionsId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
