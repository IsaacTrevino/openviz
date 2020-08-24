import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import Canvas from './canvas';
import Header from './header';

const useStyles = makeStyles((theme) => ({
  header: {
    
  },

}));

const Node = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <Header/>
      </Box>
      <Canvas/>
      
      {props.children}
    </>
  )
}

export default Node;