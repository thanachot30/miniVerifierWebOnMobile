import { iconBack } from '@mini-verifier/shared';
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode; // Accept children as a prop
  icon?: iconBack;
  title?: string;
  redirect?: string;
};

const CommonLayout = ({
  children,
  title,
  redirect = '/',
  icon = iconBack.arrow,
}: Props) => {
  const navigate = useNavigate(); // For navigation
  const handleBack = () => {
    navigate(`${redirect}`);
  };

  console.log('common', title);

  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: '#FFFFFF' }} elevation={1}>
        <Toolbar
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center', // Horizontal alignment
            alignItems: 'center', // Vertical alignment
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={handleBack}
          >
            {icon === iconBack.arrow && (
              <MdOutlineArrowBackIos color="#0064FF" fontSize={20} />
            )}
            {icon === iconBack.cross && (
              <RxCross2 color="#0064FF" fontSize={20} />
            )}
          </IconButton>
          <Box>
            <Typography variant="h6" color="black">
              {title}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: 0 }}>{children}</Box>
    </Box>
  );
};

export default CommonLayout;
