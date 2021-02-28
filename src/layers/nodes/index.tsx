import React, { useEffect, useCallback, useState } from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import Canvas from './canvas';
import Header from './header';
import { API, graphqlOperation } from 'aws-amplify';
import { listNodes } from 'src/graphql/queries';

const useStyles = makeStyles((theme) => ({
  header: {
    
  },

}));

const Node = (props: any) => {
  const classes = useStyles();
  const [nodes, setNodes]: any | null = useState(null);

  const query = useCallback(() => {
    const fetchNodes = async () => {
      const allNodes: any = await API.graphql(graphqlOperation(listNodes));
      console.log('raw query:', allNodes);
      setNodes(allNodes.data.listNodes.items);
    };

    fetchNodes();
  },[]);


  useEffect(() => {
    query();
    console.log('query nodes', nodes)
  },[]);

  return (
    <>
      <Box className={classes.header}>
        <Header nodes={nodes}/>
      </Box>
      <Canvas nodes={nodes}/>
      
      {props.children}
    </>
  )
}

export default Node;