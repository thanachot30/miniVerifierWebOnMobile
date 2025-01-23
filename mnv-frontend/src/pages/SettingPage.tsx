import React from 'react';
import CommonLayout from '../components/CommonLayout';
import { Box, Button, Typography } from '@mui/material';
import { MdArrowForwardIos } from 'react-icons/md';
import BtnSetting from '../components/BtnSetting';
type Props = {};

const SettingPage = (props: Props) => {
  return (
    <>
      <CommonLayout title="Setting">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#F5F5F5',
            minHeight: '100vh',
            width: '100%',
            //overflow: 'hidden',
            pt: 7,
          }}
        >
          <Typography
            variant="h6"
            sx={{ p: 2, color: 'gray', fontWeight: 'bold' }}
          >
            General
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <BtnSetting title={'Review onboarding'} />
            <BtnSetting title={'Profile'} />
            <BtnSetting title={'Preset Config'} />
            <BtnSetting title={'History'} />
          </Box>
        </Box>
      </CommonLayout>
    </>
  );
};

export default SettingPage;
