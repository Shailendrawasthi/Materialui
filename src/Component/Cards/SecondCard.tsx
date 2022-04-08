import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, Container, Grid, Box } from '@mui/material';

const SecondCard = () => {
  return (
    <Container >
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'20px' }}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h6' borderBottom={1} sx={{fontSize:'14px'}}>Team Member</Typography>
          <Box sx={{ marginBottom: '20px',fontSize:'14px' }}>main core of our company is our team see the best people we have</Box>
        </Grid>

        <Grid container sx={{ display: 'flex', flexDirection: 'row', marginBottom: '50px', justifyContent: 'center' }}>
          <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg?size=626&ext=jpg"
                alt="buncake"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Cheif. Morgan
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card sx={{ width: '200px', margin: '10px' ,border:'1px solid #968d8c',padding: '5px'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.escoffier.edu/wp-content/uploads/2016/02/Smiling-female-chef-with-white-hat-and-uniform-in-a-kitchen-e1611773135718.jpg"
                alt="buncake"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Cheif. smiliy
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/13/sous-chef-commercial-kitchen.jpg.rend.hgtvcom.476.357.suffix/1631578603095.jpeg"
                alt="buncake"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Cheif.Cloy
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://im.rediff.com/getahead/2015/mar/27chef-ranveer-brar-1.jpg"
                alt="buncake"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Cheif. Brandan
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        </Grid >
       
      </Grid>
    </Container>
  )
}

export default SecondCard;