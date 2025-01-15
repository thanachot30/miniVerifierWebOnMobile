import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Scan = (props: Props) => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // For navigation
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null); // Store media stream
  const handleResult = (result: any, error: any) => {
    if (result) {
      console.log(result?.text);
      setQrData(result?.text || ''); // Extract QR code text
    }
    if (error) {
      console.error(error);
      setError('Error while scanning.');
    }
  };
  const handleBack = () => {
    stopMediaStream();
    navigate('/'); // Navigate to the previous page
  };
  const stopMediaStream = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }
  };

  // Automatically start camera when component mounts
  useEffect(() => {
    const initializeCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }, // Use back camera
        });
        setMediaStream(stream);
      } catch (err) {
        console.error('Failed to access camera:', err);
        setError('Failed to access camera. Please check permissions.');
      }
    };

    initializeCamera();

    return () => stopMediaStream(); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Box sx={{ display: 'flex' }}>
        <Button
          variant="text"
          onClick={handleBack}
          // sx={{ position: 'absolute', top: 16, left: 16 }}
        >
          Back
        </Button>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          border: '4px solid black',
        }}
      >
        <QrReader
          constraints={{ facingMode: 'environment' }} // Use back camera
          onResult={handleResult} // Updated to use onResult instead of onScan/onError
          scanDelay={300} // Optional: scan delay in milliseconds
          containerStyle={{ width: '100%' }}
          videoStyle={{ width: '100%' }}
        />
        {/* Blue Border Frame */}
        {mediaStream && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '250px',
              height: '250px',
              transform: 'translate(-50%, -50%)',
              border: '4px solid blue', // Blue border
              borderRadius: '10px', // Optional: Rounded corners
              pointerEvents: 'none', // Allows interaction with QR scanner
            }}
          />
        )}
      </Box>

      {/* Display Scanned Data */}
      {qrData && (
        <Box>
          <Typography
            sx={{
              mt: 2,
              fontSize: '3vh', // Set font size relative to viewport height
              width: '100%', // Set width relative to viewport width
              mx: 'auto', // Center horizontally
              textAlign: 'center', // Center text
              backgroundColor: '#f0f0f0', // Optional: Add background for clarity
              padding: '1vh', // Optional: Add padding relative to viewport height
              borderRadius: '10px', // Optional: Rounded corners
            }}
          >
            Scanned Data: <strong>{qrData}</strong>
          </Typography>
        </Box>
      )}

      {/* Display Error Message */}
      {/* Display Error Message */}
      {error && (
        <Typography
          variant="body1"
          color="error"
          sx={{
            mt: 2,
            fontSize: '2.5vh', // Set font size relative to viewport height
            width: '80vw', // Set width relative to viewport width
            mx: 'auto',
            textAlign: 'center',
            backgroundColor: '#ffe6e6', // Optional: Add a light red background for errors
            padding: '1vh',
            borderRadius: '10px',
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default Scan;
