import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import VerifyIcon from '../assets/tdesign_verify-filled.svg';

type Props = {
  children: React.ReactNode; // Accept children as a prop
};

const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/setting');
  };

  return (
    <Box sx={{ P: 0, m: 0 }}>
      <AppBar position="fixed" sx={{ bgcolor: '#FFFFFF' }} elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
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
            sx={{
              mr: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Subtle background on hover
                transform: 'scale(1.1)', // Slight zoom effect
                transition: 'all 0.2s ease', // Smooth transition
              },
              '& svg': {
                color: 'black', // Ensure icon color is black by default
                transition: 'color 0.2s ease', // Smooth color transition
              },
              '&:hover svg': {
                color: 'blue', // Change icon color on hover
              },
            }}
            onClick={handleclick}
          >
            <FaBars size={24} color="black" /> {/* React Icons FaBars */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: 8 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
