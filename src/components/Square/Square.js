import React from 'react';
import styles from './Square.module.css';
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

// Not used

//const Square = ({ value, onClick }) => (
//     <button className={styles.square} onClick={onClick}>
//       {value}
//     </button>
//   );
