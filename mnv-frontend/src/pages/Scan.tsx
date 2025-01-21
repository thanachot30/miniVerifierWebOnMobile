import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
type Props = {};

const borderStyle = `4px solid #0064FF`;

const Scan = (props: Props) => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleScan = (data: string | null) => {
    if (data) {
      console.log('Scanned Data:', data);
      setQrData(data);
      // setTimeout(() => setIsScanned(false), 2000); // Reset after 2 seconds
    }
  };

  const handleError = (err: any) => {
    console.error('Error:', err);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Box>
        {!error && (
          <Box
            sx={{
              p: 0,
              m: 0,
              position: 'relative',
              width: '100%',
              height: '100%',
              //border: '4px solid black',
              overflow: 'hidden',
            }}
          >
            <QrScanner
              //delay={300}
              onScan={handleScan}
              onError={handleError}
              style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
              facingMode={'environment'}
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
                  borderTop: borderStyle,
                  borderLeft: borderStyle,
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
                  borderTop: borderStyle,
                  borderRight: borderStyle,
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
                  borderBottom: borderStyle,
                  borderLeft: borderStyle,
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
                  borderBottom: borderStyle,
                  borderRight: borderStyle,
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
