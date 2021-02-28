/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCube = /* GraphQL */ `
  mutation CreateCube(
    $input: CreateCubeInput!
    $condition: ModelCubeConditionInput
  ) {
    createCube(input: $input, condition: $condition) {
      id
      title
      position {
        x
        y
        z
      }
      nodes {
        items {
          id
          cubeId
          title
          content
          nodeConnectionsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCube = /* GraphQL */ `
  mutation UpdateCube(
    $input: UpdateCubeInput!
    $condition: ModelCubeConditionInput
  ) {
    updateCube(input: $input, condition: $condition) {
      id
      title
      position {
        x
        y
        z
      }
      nodes {
        items {
          id
          cubeId
          title
          content
          nodeConnectionsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCube = /* GraphQL */ `
  mutation DeleteCube(
    $input: DeleteCubeInput!
    $condition: ModelCubeConditionInput
  ) {
    deleteCube(input: $input, condition: $condition) {
      id
      title
      position {
        x
        y
        z
      }
      nodes {
        items {
          id
          cubeId
          title
          content
          nodeConnectionsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
      id
      cubeId
      title
      content
      position {
        x
        y
        z
      }
      nodeConnectionsId
      connections {
        items {
          id
          cubeId
          title
          content
          nodeConnectionsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
      id
      cubeId
      title
      content
      position {
        x
        y
        z
      }
      nodeConnectionsId
      connections {
        items {
          id
          cubeId
          title
          content
          nodeConnectionsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
      id
      cubeId
      title
      content
      position {
        x
        y
        z
      }
      nodeConnectionsId
      connections {
        items {
          id
          cubeId
          title
          content
          nodeConnectionsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
