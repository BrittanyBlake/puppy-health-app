import React from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Delete = () => {
  const handleClick = e => {
    e.preventDefault();
    console.log('deleted');
  };

  return (
    <div>
      <Grid item xs={8}>
        <DeleteForeverIcon onClick={handleClick} />
      </Grid>
    </div>
  );
};

export default Delete;
