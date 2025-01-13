import { useState } from 'react';
import {
  startRegistration,
  startAuthentication,
} from '@simplewebauthn/browser';
import axios from 'axios';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const { data: options } = await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/auth/register`,
        { username }
      );
      console.log('options', options.challenge);

      const attestation = await startRegistration({ optionsJSON: options });

      console.log('attestation', attestation);

      await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/auth/register/verify`,
        {
          username,
          credential: attestation,
        }
      );
      setMessage('Registration successful!');
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Registration failed.');
    }
  };

  const handleLogin = async () => {
    try {
      console.log('username', username);

      const { data: options } = await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/auth/login`,
        { username }
      );

      const assertion = await startAuthentication({ optionsJSON: options });

      console.log('assertion', assertion);

      await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/auth/login/verify`,
        {
          username,
          credential: assertion,
        }
      );
      setMessage('Login successful!');
      navigate('/home'); // Navigate to home page on successful login
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Login failed.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" gutterBottom>
          Passkey Authentication
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>
          {message && (
            <Typography variant="body1" color="textSecondary">
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
