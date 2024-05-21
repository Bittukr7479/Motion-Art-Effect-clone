import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Divider, Stack, Typography } from '@mui/material';
import logo from '../public/logo.png';
import MotionArtEffectlogo from '../public/MotionArtEffect-logo.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Page1 from './components/Page1.jsx';
import RatingPage from './components/RatingPage.jsx';
import Magicpage from './components/magicpage.jsx';
import SupportBrowsersCard from './components/supportBrowsersCard.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import MagicCard from './components/magicCard';

const CustomButton = styled(Button)(({ theme }) => ({
  height: "50px",
  width: '186px',
  backgroundColor: 'red',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  '&.button1': {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid white',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white',
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#262626' }}>
            <Box>
              <img src={logo} height='20px' alt="" />
            </Box>
            <Box>
              <Button 
                sx={{ 
                  backgroundColor: '#6f9a37', 
                  '&:hover': {
                    backgroundColor: '#6f9a37',  // Keep the same background color
                    opacity: 0.8,  // Change the opacity on hover
                  } 
                }} 
                variant="contained"
              >
                Buy now
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          padding: {
            xs: '20px 0px 100px 0px',  
            sm: '20px 0px 100px 0px',  
            md: '20px 0px 100px 0px',  
            lg: '20px 0px 100px 0px',  
            xl: '20px 119px 100px 119px',  
          },
        }}
      >
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: 'transparent', padding: 0 }}>
          <Box padding={0}>
            <Container
              disableGutters
              maxWidth={false}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 0,
              }}
            >
              <Box sx={{ bgcolor: 'transparent', height: '53px',padding:'10px' }}>
                <img src={MotionArtEffectlogo} alt="" />
              </Box>
              <Box sx={{ bgcolor: 'transparent', height: '53px', display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', padding:'10px' }}>
                <div>
                  <CustomButton className="button1">
                    Purchase Now
                  </CustomButton>
                </div>
              </Box>
            </Container>
            <Page1 />
            <RatingPage />
            <Magicpage />
            <Stack padding='100px 0px' >
              <Typography width='900px' margin='auto' textAlign='center' variant='h4' color="#fff" 
              sx={{
                width: 'var(--container-widget-width, 45%)'
                }}>
                Apply On Any Section Or Enable For Whole Page
              </Typography>
              <Box  sx={{ display: 'flex',flexWrap:{xs:'wrap',md:'nowrap'}, alignItems: 'flex-start', gap: '20px' }}>
                <Box sx={{
                  width: 'fit-content',
                  height: 'fit-content',
                  marginTop: '100px',
                  borderRadius: '20px',
                }}>
                  <MagicCard />
                </Box>
                <Box sx={{
                  width: 'fit-content',
                  height: 'fit-content',
                  
                  marginTop: {xs:'0px', md:'180px'},
                  borderRadius: '20px',
                }}>
                  <MagicCard />
                </Box>
              </Box>

            </Stack>

            <SupportBrowsersCard />
            <Stack margin='100px  auto' maxWidth='693px' textAlign='center'>
              <Typography variant='h3' color='white'>
                An All-Round Plugin With Powerful Features
              </Typography>
              <Typography variant='h6' color='#EEE5FFBD'>
                Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
              </Typography>
            </Stack>
            <Card />
          </Box>
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
