import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import FirstCard from '../Cards/FirstCard';
import SecondCard from '../Cards/SecondCard';
import ThridCard from '../Cards/ThridCard';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';


const Body = () => {
    return (
        <Box >
            <Container>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', fontSize: '13px' }}>
                    <Typography variant="h6" sx={{ borderBottom: '1px solid', fontSize: '14px' }}>Our Letest Bakery Products</Typography>
                    <Box sx={{ color: 'grey' }}>Please check these are our latest products</Box>
                </Grid>
                <Grid>
                    <FirstCard />
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <button style={{ padding: '10px 20px 10px 20px', backgroundColor: 'white' }}>See all Products</button>
                </div>
                <Box borderBottom={1} borderTop={1}>
                    <Container
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: '100%',
                            height: "35vh",
                            flexGrow: 1,
                            backgroundSize: 'cover',
                            backgroundImage: `url(${"https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/10/20065424/international-chef-day.jpg"})`
                        }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img style={{ width: '200px', maxWidth: '100%', height: '200px' }} src='https://media-cdn.tripadvisor.com/media/photo-p/17/ca/af/34/chif-of-adriatica.jpg' />
                            <Typography variant='h5' sx={{ color: 'brown' }}>"We give Best bekary products"</Typography>
                        </Grid>
                    </Container>
                </Box>
                <Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', fontSize: '13px' }}>
                        <Typography variant="h6" sx={{ borderBottom: '1px solid', fontSize: '14px' }}>Main service we provide</Typography>
                        <Box sx={{ color: 'grey' }}>Our services are best in town.we provide best Bakery product</Box>
                    </Grid>

                    <Grid>
                        <Box><ThirdPart /></Box>
                    </Grid>
                </Grid>
                <Grid borderBottom={1} borderTop={1} sx={{ marginBottom: '40px' }}>

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
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                            <Typography variant="h4" sx={{ color: 'brown' }}>DIFFERENT TYPES OF BREAD PRODUCTS</Typography>
                            <Typography sx={{ color: 'brown' }} >There are so many types of thing persent</Typography>
                            <img style={{ width: '400px', marginTop: '50px', maxWidth: '100%' }} src=' https://im.rediff.com/getahead/2015/nov/26food1.jpg?w=670&h=900' />
                        </Box>
                    </Container>
                </Grid>
                <Box><SecondPart /></Box>
                <Box><SecondCard /> </Box>
                <Box><ThridCard /></Box>
            </Container>
        </Box>
    )
}

export default Body;