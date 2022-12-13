import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Startup.css';

export default function ButtonSizes() {
  return (
    <span className='button'>
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="large">How do you want to start?</Button>
      </div>
      <div>
        <Button variant="contained" size="medium">
          Create A New Resume 
        </Button>
        <Button variant="contained" size="large">
          Already Have A Resume
        </Button>
      </div>
    </Box>
    </span>
  );
}