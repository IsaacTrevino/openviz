/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNodeInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  position: PositionInput,
  _version?: number | null,
};

export type PositionInput = {
  x: number,
  y: number,
  z: number,
};

export type ModelNodeConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
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

export type UpdateNodeInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  position?: PositionInput | null,
  _version?: number | null,
};

export type DeleteNodeInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelNodeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
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

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type CreateNodeMutation = {
  createNode:  {
    __typename: "Node",
    id: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNodesQuery = {
  syncNodes:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      id: string,
      title: string,
      content: string | null,
      position:  {
        __typename: "Position",
        x: number,
        y: number,
        z: number,
      },
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetNodeQueryVariables = {
  id: string,
};

export type GetNodeQuery = {
  getNode:  {
    __typename: "Node",
    id: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      title: string,
      content: string | null,
      position:  {
        __typename: "Position",
        x: number,
        y: number,
        z: number,
      },
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateNodeSubscription = {
  onCreateNode:  {
    __typename: "Node",
    id: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNodeSubscription = {
  onUpdateNode:  {
    __typename: "Node",
    id: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNodeSubscription = {
  onDeleteNode:  {
    __typename: "Node",
    id: string,
    title: string,
    content: string | null,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
      z: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
