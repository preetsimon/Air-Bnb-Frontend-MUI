import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { GiSailboat } from 'react-icons/gi';
import { flexCenter } from '../themes/commonStyles';
import { pink } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <GiSailboat  style={{color: "#51abf0",fontSize: "40px"}} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        Rent-A-Yacht
      </Typography>
    </Box>
  );
};

export default Logo;