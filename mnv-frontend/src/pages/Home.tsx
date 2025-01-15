import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import { FaBars, FaCar, FaQrcode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate(); // React Router's navigation hook
  const handleNavigate = () => {
    navigate('/qr'); // Navigate to the Scanner route
  };
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        m: 0,
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MINI • Verify
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FaBars size={24} /> {/* React Icons FaBars */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        {/* Saved Information */}
        <Card elevation={1} sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Saved Information
          </Typography>
          <Box
            sx={{ height: '5px', bgcolor: 'green', mt: 1, width: '30%' }}
          ></Box>
        </Card>
        {/* Driver License Card */}

        {/* <Card elevation={2} sx={{ borderRadius: 2, p: 2 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FaCar size={40} />
            <Box>
              <Typography variant="h6">Driver Licence</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                PRESET USE CASE
              </Typography>
            </Box>
          </CardContent>
        </Card> */}

        {/* QR Code Button */}
        <Box
          onClick={handleNavigate}
          sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: 'blue',
              color: 'white',
              height: '60px',
              maxWidth: '400px',
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
              gap: 1,
            }}
          >
            <FaQrcode size={30} /> {/* React Icons FaQrcode */}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
