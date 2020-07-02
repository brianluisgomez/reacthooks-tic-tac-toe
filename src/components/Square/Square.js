import React from 'react';
import { Button, Typography } from '@material-ui/core/';

const Square = ({ value, onClick }) => (
  <Button variant='outlined' color='primary' onClick={onClick}>
    {' '}
    <Typography variant='h5' color='textSecondary' align='center'>
      {value}
    </Typography>
  </Button>
);

export default Square;
