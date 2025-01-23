import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
type Props = {};

const borderStyle = `8px solid #0064FF`;
const sizeBorderFrame = 25;

const Scan = (props: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate(); // For navigation

  const sizeW = 270;
  const sizeH = 270;

  const qrData = {
    id: 1,
    name: 'John Doe',
    result: 'Success',
  };

  const handleScan = (data: string | null) => {
    if (data) {
      console.log('Scanned Data:', data);
      navigate('/result', { state: qrData });
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
              // style={previewStyle}
              facingMode={'environment'}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Gray with opacity
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 
                0 calc(50% - ${sizeW / 2}px),
                 calc(50% - ${sizeW / 2}px) calc(50% - ${sizeH / 2}px),
                 calc(50% - ${sizeW / 2}px) calc(50% + ${sizeH / 2}px),
                 calc(50% + ${sizeW / 2}px) calc(50% + ${sizeH / 2}px), 
                calc(50% + ${sizeW / 2}px) calc(50% - ${sizeH / 2}px),
                 0 calc(50% - ${sizeH / 2}px))`,
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${sizeW}px`,
                height: `${sizeH}px`,
                transform: 'translate(-50%, -50%)',
                //border: `4px solid #0064FF`, // Blue border for the frame
                zIndex: 2,
              }}
            >
              {/* Top-left corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${sizeBorderFrame}px`,
                  height: `${sizeBorderFrame}px`,
                  borderTop: borderStyle,
                  borderLeft: borderStyle,
                  // borderTopLeftRadius: '25px', // Rounded corner
                }}
              />

              {/* Top-right corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: `${sizeBorderFrame}px`,
                  height: `${sizeBorderFrame}px`,
                  borderTop: borderStyle,
                  borderRight: borderStyle,
                  // borderTopRightRadius: '25px', // Rounded corner
                }}
              />

              {/* Bottom-left corner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: `${sizeBorderFrame}px`,
                  height: `${sizeBorderFrame}px`,
                  borderBottom: borderStyle,
                  borderLeft: borderStyle,
                  // borderBottomLeftRadius: '25px', // Rounded corner
                }}
              />

              {/* Bottom-right corner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: `${sizeBorderFrame}px`,
                  height: `${sizeBorderFrame}px`,
                  borderBottom: borderStyle,
                  borderRight: borderStyle,
                  // borderBottomRightRadius: '25px', // Rounded corner
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
