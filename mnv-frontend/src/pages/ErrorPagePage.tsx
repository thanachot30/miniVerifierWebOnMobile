import React from 'react';
import { PiWarningCircleBold } from 'react-icons/pi';
import { Box, Typography } from '@mui/material';
import CommonLayout from '../components/CommonLayout';
type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <>
      <CommonLayout>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh', // Full height of the viewport
              width: '100vw', // Full width of the viewport
              backgroundColor: '#FFFFFF', // Optional: Background color
            }}
          >
            <PiWarningCircleBold size={40} color="#0064FF" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centers content vertically
                alignItems: 'center', // Centers content horizontally

                textAlign: 'center', // Ensures text is centered inside the Box
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Service unavailable!
              </Typography>
              <Typography variant="h5" fontSize={18}>
                The server is temporarily unavailable.
              </Typography>
              <Typography variant="h5" fontSize={18}>
                Please try again later.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CommonLayout>
    </>
  );
};

export default ErrorPage;
