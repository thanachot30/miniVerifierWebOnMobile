import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const DisplayResult = (props: Props) => {
  const navigate = useNavigate(); // For navigation
  const [loading, setLoading] = useState(true); // State to manage loading
  const [resultData, setResultData] = useState<any | null>(null); // State for result data

  const handleBack = () => {
    navigate('/'); // Navigate to the previous page
  };

  const driverMockData = {
    name: 'John Doe',
    licenseNumber: 'D123456789',
    dateOfBirth: '1990-01-15',
    address: '123 Main Street, Springfield, IL, USA',
    licenseClass: 'C',
    issueDate: '2022-05-01',
    expiryDate: '2032-05-01',
    endorsements: ['Motorcycle', 'Passenger Vehicle'],
    restrictions: ['Corrective Lenses'],
  };

  useEffect(() => {
    // Simulate a delay of 5 seconds
    const timer = setTimeout(() => {
      setResultData(driverMockData); // Set the mock data
      setLoading(false); // Stop loading
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '40vh',
          bgcolor: 'green',
          position: 'relative',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Button
            variant="text"
            sx={{
              color: 'white',
              '&:hover': {
                bgcolor: 'white',
              },
              textDecoration: 'underline',
            }}
            onClick={handleBack}
          >
            Back
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          {loading ? (
            <CircularProgress color="inherit" sx={{ ml: 2 }} />
          ) : (
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                ml: 2,
              }}
            >
              Valid
            </Typography>
          )}
        </Box>
      </Box>

      {/* Details Section */}
      <Box sx={{ padding: 2 }}>
        {!loading && (
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Driver Details</Typography>
            <Typography variant="body1">
              <strong>License Number:</strong> {resultData.licenseNumber}
            </Typography>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {resultData.dateOfBirth}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {resultData.address}
            </Typography>
            <Typography variant="body1">
              <strong>License Class:</strong> {resultData.licenseClass}
            </Typography>
            <Typography variant="body1">
              <strong>Issue Date:</strong> {resultData.issueDate}
            </Typography>
            <Typography variant="body1">
              <strong>Expiry Date:</strong> {resultData.expiryDate}
            </Typography>
            <Typography variant="body1">
              <strong>Endorsements:</strong>{' '}
              {resultData.endorsements.join(', ')}
            </Typography>
            <Typography variant="body1">
              <strong>Restrictions:</strong>{' '}
              {resultData.restrictions.join(', ')}
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default DisplayResult;
