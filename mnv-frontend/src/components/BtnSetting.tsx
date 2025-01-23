import { Button, Box, Typography } from '@mui/material';
import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

type Props = {
  title: string;
  redirect?: string;
};

const BtnSetting = ({ title, redirect }: Props) => {
  return (
    <Button
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bgcolor: 'white',
        color: 'black',
        px: 3,
        width: '95%',
        borderRadius: '10px',
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            textTransform: 'none',
          }}
        >
          {title}
        </Typography>
      </Box>
      <MdArrowForwardIos size={25} />
    </Button>
  );
};

export default BtnSetting;
