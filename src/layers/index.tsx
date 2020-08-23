import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import Search from './search';
import Nodes from './nodes';
import Data from './data';


const useStyles = makeStyles(() => ({
 root: {
   position: 'absolute',
   height: '100%',
   width: '100%'
 },
}));

const Layers = (props: any) => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Search>
        <Nodes>
          <Data/>
        </Nodes>
      </Search>
    </div>
  )
}

export default Layers;