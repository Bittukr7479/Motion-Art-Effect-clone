import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardlightWeightImg from '../assets/CardlightWeightImg.png';
import CardResponsiveImg from '../assets/CardResponsiveImg.png';
import CarduserFrInterfaceImg from '../assets/CarduserFrInterfaceImg.png';

export default function MediaCard() {
  return (
    <Grid container spacing={3} sx={{ padding: '20px', backgroundColor: 'transparent' }}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card sx={{ padding: '30px', height: '378px', borderRadius: '20px', border: '2px solid #FFFFFF10', backgroundImage: 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)' }}>
          <img src={CardlightWeightImg} alt="Light Weight" />
          <CardContent sx={{ padding: '20px 0px 0px 0px' }}>
            <Typography gutterBottom variant="h5" color="white" component="div">
              Light Weight
            </Typography>
            <Typography variant="body2" color="#EEE5FFBD">
              Motion Art for Elementor is designed to be lightweight.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card sx={{ padding: '30px', height: '378px', borderRadius: '20px', border: '2px solid #FFFFFF10', backgroundImage: 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)' }}>
          <img src={CardResponsiveImg} alt="100% Responsive" />
          <CardContent sx={{ padding: '20px 0px 0px 0px' }}>
            <Typography gutterBottom variant="h5" color="white" component="div">
              100% Responsive
            </Typography>
            <Typography variant="body2" color="#EEE5FFBD">
              Create a consistent visual experience across all devices.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card sx={{ padding: '30px', height: '378px', borderRadius: '20px', border: '2px solid #FFFFFF10', backgroundImage: 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)' }}>
          <img src={CarduserFrInterfaceImg} alt="User Friendly Interface" />
          <CardContent sx={{ padding: '20px 0px 0px 0px' }}>
            <Typography gutterBottom variant="h5" color="white" component="div">
              User Friendly Interface
            </Typography>
            <Typography variant="body2" color="#EEE5FFBD">
              Ensure a smooth experience for both applicants and administrators.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
