import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import BrowsersImg from '../assets/BrowsersImg.png'
import { CardActions } from '@mui/material';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', justifyContent:'center', backgroundImage:'linear-gradient(180deg, #0D061F 0%, #251E35 100%)', margin:'30px', padding:'40px 0px' , textAlign:'center', alignItems:'center', borderRadius:'20px', border:'2px solid #FFFFFF10'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" color='white' maxWidth='958px' paddingBottom='15px'>
          Supported by All Popular Browsers
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" margin='auto' maxWidth='373px'>
          Rest assured, Motion Art is designed to be compatible with all major web browsers.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, margin:'auto' }}>
        <CardActions>
                <Box
                    component="img"
                    src={BrowsersImg}
                    alt="Magic Card"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </CardActions>
        </Box>
      </Box>
    </Card>
  );
}