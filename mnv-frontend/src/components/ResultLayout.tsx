import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
type Props = {
  children: React.ReactNode; // Accept children as a prop
};

const ResultLayout = ({ children }: Props) => {
  const navigate = useNavigate(); // For navigation
  const handleBack = () => {
    navigate('/');
  };
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
            <RxCross2 color="#0064FF" fontSize={20} />
          </IconButton>
          <Box>
            <Typography variant="h6" color="black">
              Result
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: 6 }}>{children}</Box>
    </Box>
  );
};

export default ResultLayout;
