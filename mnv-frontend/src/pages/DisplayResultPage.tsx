import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { GoCheckCircleFill } from 'react-icons/go';
import { PiWarningCircleFill } from 'react-icons/pi';
import ResultLayout from '../components/ResultLayout';
import CommonLayout from '../components/CommonLayout';
import { iconBack } from '@mini-verifier/shared';
type Props = {};

const DisplayResult = (props: Props) => {
  const navigate = useNavigate(); // For navigation
  const location = useLocation();
  const data_scan = location.state;
  const [loading, setLoading] = useState(true); // State to manage loading
  const [resultData, setResultData] = useState<any | null>(null); // State for result data
  const [bgColor, setbgColor] = useState('');
  const [result, setresult] = useState<null | boolean>(null);
  const bgcolorSuccess = '#001E3C';
  const bgcolorFailed = '#DE5F29';
  const handleBack = () => {
    navigate('/'); // Navigate to the previous page
  };

  useEffect(() => {
    // Simulate a delay of 5 seconds
    if (!data_scan) {
      navigate('/error');
    }
    const result = true;
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading
      if (result) {
        setresult(result);
        setbgColor(bgcolorSuccess);
      } else {
        setresult(result);
        setbgColor(bgcolorFailed);
      }
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  console.log('location', location, data_scan);

  return (
    <>
      {loading ? (
        <CommonLayout title="Result" icon={iconBack.cross} redirect="/">
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
              <CircularProgress
                sx={{
                  color: '#0064FF', // Customize the color
                }}
              />
              <Typography variant="body1">Waiting for holder...</Typography>
            </Box>
          </Box>
        </CommonLayout>
      ) : (
        <CommonLayout title="Result" icon={iconBack.cross} redirect="/">
          <Box>
            <Box
              sx={{
                bgcolor: bgColor,
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {result ? (
                  <GoCheckCircleFill color="#2DCD73" size={56} />
                ) : (
                  <PiWarningCircleFill color="#F2DA00" size={56} />
                )}

                <Typography variant="h6" sx={{ mt: 2 }}>
                  {result ? 'Valid credential' : 'Unable to verify'}
                </Typography>
              </Box>
            </Box>

            {/* Credential Details Card */}
            <Card
              sx={{
                mx: 2,
                mt: -4,
                borderRadius: 2,
                boxShadow: 2,
                bgcolor: '#FFFFFF',
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Concert Ticket
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Name:
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Shane Wanit
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Employee ID:
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    2521163326
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Email:
                  </Typography>
                  <Typography variant="body2">
                    shane.wanit@bangkokbank.com
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Back to Home Button */}
            <Box
              sx={{
                position: 'absolute', // Position relative to the page
                bottom: '40px', // Offset from the bottom
                left: '50%', // Center horizontally
                transform: 'translateX(-50%)', // Adjust for perfect horizontal centering
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                onClick={handleBack}
                sx={{
                  bgcolor: '#0064FF',
                  color: '#FFFFFF',
                  px: 4,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                }}
              >
                Back to home
              </Button>
            </Box>
          </Box>
        </CommonLayout>
      )}
    </>
  );
};

export default DisplayResult;
