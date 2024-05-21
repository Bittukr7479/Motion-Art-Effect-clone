import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import MagicStcik from '../assets/magic.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',  // Remove default box shadow
}));

export default function RowAndColumnSpacing() {
    const theme = useTheme();
    const isMdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ width: '80%', paddingTop: '100px' }}>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                direction={isMdOrSmaller ? 'column' : 'row'}
            >
                <Grid item xs={12} md={8}>
                    <Item sx={{ backgroundColor: 'transparent', maxWidth: '748px' }}>
                        <Stack>
                            <Typography textAlign='left' variant='h3' color='white'>
                                Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                            </Typography>
                            <Typography textAlign='left' color='#EEE5FFBD' padding='30px 0px'>
                                Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                            </Typography>
                            <Button 
                                sx={{
                                    width: '333px',
                                    height: '61px',
                                    borderRadius: '20px',
                                    backgroundImage: 'linear-gradient(90deg, #5E11FF 30%, #F87516 100%)'
                                }} 
                                variant="contained"
                            >
                                Purchase From Envato
                            </Button>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item sx={{ backgroundColor: 'transparent' }}>
                        <img src={MagicStcik} alt="" />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
