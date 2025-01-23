import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import CommonLayout from '../components/CommonLayout';
import { iconBack } from '@mini-verifier/shared';

type Props = {};

const SignUpPage = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <CommonLayout redirect="/login">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#f4f6f8', // Subtle background
          //padding: 2,
          px: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            backgroundColor: '#ffffff',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              textAlign: 'center',
              color: '#333333',
            }}
          >
            Sign up
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <MdOutlineVisibility />
                      ) : (
                        <MdOutlineVisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#1976d2',
                color: '#ffffff',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Box>
    </CommonLayout>
  );
};

export default SignUpPage;
