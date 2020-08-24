import { node } from './canvas/nodeType';

export const nodes: node[] = [
  {
    name: 'origin',
    position: [0, 0, 0],
    // connections: [
    //   // no connections 
    // ]
  },
  // {
  //   name: 'visualization',
  //   position: [0, 0, 0],
  //   connections: [
  //     {
  //       name: 'math',
  //       position: [0, 5, 0]
  //     },
  //     {
  //       name: 'thermodynamics',
  //       position: [5, 5, 0]
  //     },
  //   ]
  // },
  // {
  //   name: 'artificialIntelligence',
  //   position: [0, 5, 0],
  //   connections: [
  //     {
  //       name: 'physics',
  //       position: [0, 0, 0]
  //     }
  //   ]
  // },
  // {
  //   name: 'thermodynamics',
  //   position: [5, 5, 0],
  //   connections: [
  //     {
  //       name: 'physics',
  //       position: [0, 0, 0]
  //     },
  //     {
  //       name: 'math',
  //       position: [0, 5, 0]
  //     }
  //   ]
  // },
];


  // origin node ~ 'OpenViz'
  // When creating a node you must have an inital (minimum 1) connection.
  // afterwards you should be able to add more connections to existing nodes.  

  // Nodes should be quite easy to handle since their postion is defined in
  // their data.

  // However, connections (lines) will be tricker since now we must filter out
  // duplicates. This must be done in the backend perferably with a lambda function
  // prior to saving to an database.
  // connection > duplicate check > save to dynamoDB
