import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Scan = (props: Props) => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleBack = () => {
    navigate('/'); // Navigate to the previous page
  };

  const handleScan = (data: string | null) => {
    if (data) {
      console.log('Scanned Data:', data);
      setQrData(data);
      setIsScanned(true);
      // setTimeout(() => setIsScanned(false), 2000); // Reset after 2 seconds
      navigate('/result');
    }
  };

  const handleError = (err: any) => {
    console.error('Error:', err);
  };

  console.log('qrData', qrData);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          variant="text"
          onClick={handleBack}
          // sx={{ position: 'absolute', top: 16, left: 16 }}
        >
          Back
        </Button>
      </Box>
      <Box>
        {!error && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              // border: '4px solid black',
              overflow: 'hidden',
            }}
          >
            <QrScanner
              delay={300}
              onScan={handleScan}
              onError={handleError}
              style={{ width: '100%' }}
            />
            {/* Blue Border Frame */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '220px',
                height: '220px',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Top-left corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '25px',
                  height: '25px',
                  borderTop: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderLeft: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderTopLeftRadius: '25px', // Rounded corner
                }}
              />

              {/* Top-right corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '25px',
                  height: '25px',
                  borderTop: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderRight: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderTopRightRadius: '25px', // Rounded corner
                }}
              />

              {/* Bottom-left corner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '25px',
                  height: '25px',
                  borderBottom: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderLeft: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderBottomLeftRadius: '25px', // Rounded corner
                }}
              />

              {/* Bottom-right corner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '25px',
                  height: '25px',
                  borderBottom: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderRight: `4px solid ${isScanned ? 'green' : 'blue'}`,
                  borderBottomRightRadius: '25px', // Rounded corner
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Scan;
