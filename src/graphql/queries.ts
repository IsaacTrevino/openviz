/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCube = /* GraphQL */ `
  query GetCube($id: ID!) {
    getCube(id: $id) {
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
export const listCubes = /* GraphQL */ `
  query ListCubes(
    $filter: ModelCubeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCubes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        position {
          x
          y
          z
        }
        nodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
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
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const nodesByCube = /* GraphQL */ `
  query NodesByCube(
    $cubeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByCube(
      cubeId: $cubeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
