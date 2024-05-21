import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #fba33f 20%, #ec0bd0 30%, #3421ec 40%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textAlign: 'left',
}));

export default function Page1() {
  return (
    <Box sx={{ flexGrow: 1, padding:'80px 0px' }}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Item sx={{ backgroundColor: 'transparent', padding:'10px'}}>
            <GradientText marginRight="45%" variant='h6'  paddingLeft='15px'>
              Transform Your Website
            </GradientText>
            <Typography marginRight="45%" textAlign='left' variant='h6' color='white' paddingLeft='15px'>
              With Motion Art Effect
            </Typography>
          </Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item sx={{ backgroundColor: 'transparent', padding:'10px' }}>
            <Typography textAlign='left' variant='h2' color='#EEE5FF'>
              Attract Your Visitors Attention With Colorful 
            </Typography>
            <GradientText variant='h2' marginBottom='30px'>
              Motion Art Effect
            </GradientText>
            <Typography textAlign='left' color='#EEE5FFBD'>
              Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
            </Typography>
          </Item>
        </Grid>
        <Grid item md={3} xs={12}>
          <Item sx={{ backgroundColor: 'transparent' }}></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
