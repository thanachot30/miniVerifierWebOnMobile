import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
type Props = {};

const Scan = (props: Props) => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleResult = (result: any, error: any) => {
    if (result) {
      setQrData(result?.text || ''); // Extract QR code text
    }
    if (error) {
      console.error(error);
      setError('Error while scanning.');
    }
  };
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <QrReader
        constraints={{ facingMode: 'environment' }} // Use back camera
        onResult={handleResult} // Updated to use onResult instead of onScan/onError
        scanDelay={300} // Optional: scan delay in milliseconds
        containerStyle={{ width: '100%' }}
        videoStyle={{ width: '100%' }}
      />
      {/* Display Scanned Data */}
      {qrData && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Scanned Data: <strong>{qrData}</strong>
        </Typography>
      )}

      {/* Display Error Message */}
      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default Scan;
