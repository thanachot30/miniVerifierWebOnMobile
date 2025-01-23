import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      navigate('/signup');
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Registration failed.');
    }
  };

  const handleLogin = async () => {
    try {
      navigate('/'); // Navigate to home page on successful login
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Login failed.');
    }
  };

  return (
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
          Login
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
            onClick={handleLogin}
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
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={handleSignup}
            fullWidth
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              borderColor: '#1976d2',
              color: '#1976d2',
              '&:hover': {
                backgroundColor: '#f0f7ff',
                borderColor: '#1565c0',
              },
            }}
          >
            Sign up
          </Button>
          {message && (
            <Typography
              variant="body2"
              sx={{
                color: '#d32f2f',
                marginTop: 2,
                textAlign: 'center',
              }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
