import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import { FaBars, FaCar, FaQrcode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import FluentBook from '../assets/fluent_book-default-28-regular.svg';
import antSetting from '../assets/ant-design_setting-outlined.svg';
import Icon_qr from '../assets/qrIcon.svg';
import Scan from './ScanPage';
import BackLayout from '../components/BackLayout';
import Layout from '../components/Layout';
type Props = {};

const Home = (props: Props) => {
  // const navigate = useNavigate(); // React Router's navigation hook
  const [showScan, setShowScan] = useState(false);

  const handleClick = () => {
    //
    setShowScan(true);
  };
  const handleBack = () => {
    setShowScan(false); // Return to the Home content
    //console.log('back');
  };

  return (
    <>
      {!showScan ? (
        <Layout>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ pb: 1, fontWeight: 'bold' }}
                  color="black"
                >
                  Category
                </Typography>
              </Box>

              <Box>
                <Card
                  elevation={3}
                  sx={{ p: 2, borderRadius: 2, bgcolor: '#F5F5F5' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center', // Vertical alignment
                    }}
                  >
                    <Typography variant="subtitle1" fontSize={16}>
                      Preset Category
                    </Typography>
                    <IconButton>
                      <img
                        src={antSetting}
                        alt="setting"
                        width={20}
                        height={20}
                      />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: '#FFFFFF',
                      borderRadius: 2,
                      border: '1px solid black',
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row', pb: 1 }}>
                      <img
                        src={FluentBook}
                        alt="book Icon"
                        width={24}
                        height={24}
                      />
                      <Typography sx={{ pl: 1, fontWeight: 'bold' }}>
                        Default
                      </Typography>
                    </Box>

                    <Typography sx={{ color: '#5E5E66' }}>
                      All Can You Read.
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: '3%', // Vertical center
                left: '50%', // Horizontal center
                transform: 'translate(-50%, -50%)', // Adjust for perfect center alignment
              }}
            >
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '80vw',
                  p: 1,
                }}
              >
                <img src={Icon_qr} alt="qr Icon" width={18} height={18} />
                <Box sx={{ pl: 1 }}>Scan QR Code</Box>
              </Button>
            </Box>
          </Box>
        </Layout>
      ) : (
        <BackLayout handleBack={handleBack}>
          <Scan />
        </BackLayout>
      )}
    </>
  );
};

export default Home;
