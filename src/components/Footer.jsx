import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <Box sx={{ backgroundImage: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)', color: '#EEE5FFB8', py: 1 }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection:{xs:'column-reverse', md:'unset'}, alignItems:{xs:'center', md:'unset'}, gap:{xs:'20px', md:'unset'} }} maxWidth='unset'>
                <Grid item md={6} lg={6} margin='0px 95px' display='flex' alignItems='center' >
                    <Typography variant="body2" padding='unset'>
                        © 2023 Copywrite. All rights reserved by QodeMatrix
                    </Typography>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Typography variant="h6" padding='unset'>
                        <Link href='' variant='body2' color='#EEE5FFB8' underline='none' margin='0px 15px'>
                            Documentation
                        </Link>
                        <Link href='' variant='body2' color='#EEE5FFB8' underline='none' margin='0px 15px'>
                            Follow Us
                        </Link>
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
}
