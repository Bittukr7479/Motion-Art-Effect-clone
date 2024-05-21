import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import motionarteffectimg1 from '../assets/motionarteffect-img1.png';
import motionarteffectimg2 from '../assets/motionarteffect-img2.png';
import motionarteffectimg3 from '../assets/motionarteffect-img3.png';
import starimg from '../assets/starimg.png';
import { useTheme } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Page1() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1, padding: 'auto' }}>
            <Typography textAlign='center' color='#EEE5FF' variant='h5' padding='unset'>Trusted by thousands of users around the world</Typography>
            <Grid
                container
                spacing={3}
                display="flex"
                justifyContent="center" 
                margin='auto'
                width='100%'
                paddingTop='50px'
            >
                <Grid item sm={6} md={4} lg={4}>
                    <Item sx={{ color: 'red', backgroundColor: 'transparent' }}>
                        <Stack direction="row" spacing={2}>
                            <img src={motionarteffectimg1} alt="" />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '15px' }} display="flex" justifyContent='center' flexDirection="column" alignItems="center">
                                <img src={starimg} alt="" height="20px" width="165px" />
                                <Typography color="#EEE5FFBD" >
                                    <span>4.5</span> Score, 9 Reviews
                                </Typography>
                            </Box>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    <Item sx={{ color: 'red', backgroundColor: 'transparent' }}>
                        <Stack direction="row" spacing={2}>
                            <img src={motionarteffectimg2} alt="" />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '15px' }} display="flex" justifyContent='center' flexDirection="column" alignItems="center">
                                <img src={starimg} alt="" height="20px" width="165px" />
                                <Typography color="#EEE5FFBD" gutterBottom>
                                    <span>4.5</span> Score, 9 Reviews
                                </Typography>
                            </Box>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item sm={12} md={4} lg={4}
                    sx={{
                        [theme.breakpoints.up('sm')]: {
                            display: 'flex',
                            justifyContent: 'space-around'
                        }
                    }}
                >
                    <Item sx={{ color: 'red', backgroundColor: 'transparent' }}>
                        <Stack direction="row" spacing={2}>
                            <img src={motionarteffectimg3} alt="" />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '15px' }} display="flex" justifyContent='center' flexDirection="column" alignItems="center">
                                <img src={starimg} alt="" height="20px" width="165px" />
                                <Typography color="#EEE5FFBD" gutterBottom>
                                    <span>4.5</span> Score, 9 Reviews
                                </Typography>
                            </Box>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
