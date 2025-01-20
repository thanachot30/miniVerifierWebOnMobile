import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import VerifyIcon from '../assets/tdesign_verify-filled.svg';
type Props = {};

const Layout = (props: Props) => {
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: '#FFFFFF' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              p: 0,
              m: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center', // Horizontal alignment
              alignItems: 'center', // Vertical alignment
            }}
          >
            <img src={VerifyIcon} alt="Verify Icon" width={24} height={24} />

            <Typography variant="h6" sx={{ flexGrow: 1, pl: 1 }} color="black">
              Mini Verifier
            </Typography>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FaBars size={24} color="black" /> {/* React Icons FaBars */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
