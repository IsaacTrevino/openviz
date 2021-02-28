/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCube = /* GraphQL */ `
  subscription OnCreateCube {
    onCreateCube {
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
export const onUpdateCube = /* GraphQL */ `
  subscription OnUpdateCube {
    onUpdateCube {
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
export const onDeleteCube = /* GraphQL */ `
  subscription OnDeleteCube {
    onDeleteCube {
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
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode {
    onCreateNode {
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
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode {
    onUpdateNode {
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
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode {
    onDeleteNode {
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
