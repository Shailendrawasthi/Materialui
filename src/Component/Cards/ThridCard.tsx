import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid, Box } from '@mui/material';

const ThirdCard = () => {
  return (
    <Container >
      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h6' borderBottom={1} sx={{fontSize:'14px'}}>Blog Posts</Typography>
        <Box sx={{ marginBottom: '20px',fontSize:'14px' }}>Checkout our latest blog post what we are talking about</Box>
      </Grid>
      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginBottom: '50px', justifyContent: 'center' }}>
        <Card sx={{ width: '250px', margin: '10px',border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCL4LU8JMFJKqOSNdUFK-DiYSvH6cTAvQrw&usqp=CAU"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
        <Card sx={{ width: '250px', margin: '10px' ,border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hTVBx2uovEAOdkTE-lkE4SX2pZDT7hjwYA&usqp=CAU"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
        <Card sx={{ width: '250px', margin: '10px',border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGoZOMrkZWB3jyxNPZ-cDW_NOhJdOPnDhFA&usqp=CAU"
              alt="buncake"
            />

          </CardActionArea>

        </Card>

      </Grid >

    </Container>
  )
}

export default ThirdCard;;