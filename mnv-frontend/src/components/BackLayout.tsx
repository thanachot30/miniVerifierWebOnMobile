import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';

type Props = {
  children: React.ReactNode; // Accept children as a prop
  handleBack: () => void;
};

const BackLayout = ({ children, handleBack }: Props) => {
  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: '#FFFFFF' }} elevation={1}>
        <Toolbar
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center', // Horizontal alignment
            alignItems: 'center', // Vertical alignment
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={handleBack}
          >
            <MdOutlineArrowBackIos color="#0064FF" fontSize={20} />
          </IconButton>
          <Box>
            <Typography variant="h6" color="black">
              Scan QR Code
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box>{children}</Box>
    </Box>
  );
};

export default BackLayout;
