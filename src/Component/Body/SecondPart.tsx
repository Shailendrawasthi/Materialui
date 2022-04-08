import React from 'react';

import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const SecondPart = () => {
    return (
        <Box borderBottom={1} borderTop={1}> 
        <Container
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: '100%',
                height: "75vh",
                flexGrow: 1,
                backgroundSize: 'cover',
                backgroundImage: `url(${"https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/10/20065424/international-chef-day.jpg"})`
            }}>
            <Grid container>
                <Grid item lg={8} sm={8} xs={12}>
                    <img style={{ maxWidth: '100%' }} src='https://simg.nicepng.com/png/small/871-8713665_super-responsive-preview-ecommerce-website-design-ux.png' />
                </Grid>
                <Grid item lg={4} sm={4} xs={12} >
                    <Box sx={{ display: 'flex', marginBottom: '30px' }}>
                        <Button><AppSettingsAltOutlinedIcon sx={{ FontSize: 'large', color: 'black' }} /> </Button>
                        <Typography variant='h5'>Notification</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', marginBottom: '30px' }}>
                        <Button><AppSettingsAltOutlinedIcon sx={{ FontSize: 'large', color: 'black' }} /> </Button>
                        <Typography variant='h5'>Notification</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', marginBottom: '30px' }}>
                        <Button><AppSettingsAltOutlinedIcon sx={{ FontSize: 'large', color: 'black' }} /> </Button>
                        <Typography variant='h5'>Notification</Typography>
                    </Box>
                </Grid>
            </Grid>

        </Container>
        </Box>
    )
}

export default SecondPart;