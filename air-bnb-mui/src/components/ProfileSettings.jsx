import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// react icons
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link sx={{
        ":hover": {
          bgcolor: "#f5f5f5",
          borderRadius: 5,
          color: "black"
        },
        padding : "0.7rem"
      }} href="#"> Become A Host</Link>
      <Stack>
        <Button
        sx={{
          ":hover": {
            bgcolor: "#f5f5f5",
            borderRadius: 5
          } 
        }}
        >
          <BsGlobe size={24} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: '1px solid #f5f5f5',
          }}
        >
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;