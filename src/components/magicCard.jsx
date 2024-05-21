import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MagicCard from '../assets/magicCard.png';

export default function BasicCard() {
    return (
        <Card sx={{ width: 'auto', height: 'fit-content', mx: 'auto', backgroundImage: 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)', borderRadius: '20px', border:'2px solid #FFFFFF10', margin:'10px' }}>
            <CardContent>
                <Typography variant="h4" component="div" color='white'>
                    Apply On Section
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }} color='#EEE5FFBD'>
                    Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
                </Typography>
            </CardContent>
            <CardActions sx={{padding:'30px'}} >
                <Box
                    component="img"
                    src={MagicCard}
                    // padding='30px'
                    alt="Magic Card"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </CardActions>
        </Card>
    );
}
