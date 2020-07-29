import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import Search from './search';
import Nodes from './nodes';
import Data from './data';


const useStyles = makeStyles(() => ({
 root: {},
}));

const Layers = (props: any) => {
  
  const classes = useStyles();

  return (
    <Search>
      <Nodes>
        <Data/>
      </Nodes>
    </Search>
  )
}

export default Layers;