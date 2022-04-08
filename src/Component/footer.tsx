import React from 'react';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Image1 from './Images/logo.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AbcIcon from '@mui/icons-material/Abc';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 5 }}
                py={{ xs: 5, sm: 5 }}
                bgcolor='text.secondary'
                color='white'
            >
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} sx={{marginBottom:'10px'}}>Help</Box>
                            <Box>Bakery is a psd Template with great option and a lot of feactures but it may possibly be conceived that ,in the internal part of whole.</Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                                <img src={Image1} />

                            </Box>

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} sx={{marginBottom:'10px'}}>NewsLetter</Box>
                            <Box>Give us Your Email andwe shall send regular updates for new stuff and events</Box>
                            <Grid sx={{marginTop:'10px'}}>
                            <TextField label="Email" id="outlined-size-small" size="small"/>
                            <Button sx={{backgroundColor:'#272929',color:'white',marginLeft:'5px',paddingLeft:'25px',paddingRight:'25px'}}>Subscribe</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 4, sm: 10 }}
                bgcolor='#272929'
                color='white'

            >
                <Container maxWidth='lg' sx={{
                    display: 'flex', alignItem: 'center',fontSize: '14px' ,justifyContent: 'space-evenly'

                }}>
                    <Grid container spacing={3} >
                        <Grid item xs={10} sm={3}>
                            <Typography variant='h6' sx={{fontSize: '15px',marginBottom:'10px'}}>Working Time</Typography>
                            <Box>
                                Monday Friday 8:00am to 8:00pm
                            </Box>
                            <Box>
                                Saturday Sunday 10:00am to 16:30 pm
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Typography variant='h6'sx={{fontSize: '15px',marginBottom:'10px'}}>Happy Hour</Typography>
                            <Box>
                                Join us For happy Hour.
                                </Box>
                                <Box>enjoy discount baked goods
                                </Box>
                                <Box> 8:00pm 5:00pm Daliy
                                </Box>
                        </Grid>

                        <Grid item xs={12} sm={3} sx={{display: 'flex',justifyContent: 'center',flexDirection: 'column'}} >
                            <Typography variant='h6'sx={{fontSize: '15px',marginBottom:'10px'}}>Contacts Us</Typography>
                            <Box>
                                <FacebookIcon />
                                <AbcIcon />
                                <InstagramIcon/>
                               <TwitterIcon/>
                               < EmailIcon/>
                               <LinkedInIcon/>
                            </Box>
                        </Grid>
                        <Grid item xs={8} sm={3}>
                            <Typography variant='h6' sx={{fontSize: '15px'}}>Follow Us</Typography>
                            <Box>
                                0800 123 452 88
                            </Box><Box>
                                257 mig-187 jarauli phase 2
                            </Box>
                            <Box>
                                Test@gmail.com
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
                <Box textAlign='center' pt={{ sx: 5, sm: 10 }}>
                    material Ui WorkShop@ p.ltd
                </Box>
            </Box>


        </footer>
    )
}
export default Footer;