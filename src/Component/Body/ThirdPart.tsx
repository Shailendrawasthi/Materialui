import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid, Box } from '@mui/material';


const ThirdPart = () => {
  return (
    <Container >
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


        <Grid container sx={{ display: 'flex', flexDirection: 'row', marginBottom: '50px', justifyContent: 'center',fontSize:'14px' }}>
          <Card sx={{ width: '250px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://image.shutterstock.com/image-vector/chef-hat-sign-icon-cooking-260nw-418668469.jpg"
                alt="buncake"
              />
              <CardContent>
                <Typography component="div"sx={{fontSize:'14px'}}>
                  Whethear the Fliting attendence of the one stil and solitary jet had gradually worked aheb
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '250px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://static.vecteezy.com/system/resources/previews/004/890/543/original/circle-shape-with-cup-of-coffee-and-water-drop-on-the-top-free-vector.jpg"
                alt="buncake"
              />
              <CardContent>
                <Typography component="div"sx={{fontSize:'14px'}}>
                  Whethear the Fliting attendence of the one stil and solitary jet had gradually worked aheb
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '250px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://www.lgexperiencehappiness.com/wp-content/uploads/2019/01/skills_outlook.png"
                alt="buncake"
              />
              <CardContent>
                <Typography component="div"sx={{fontSize:'14px'}}>
                  Whethear the Fliting attendence of the one stil and solitary jet had gradually worked aheb
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '250px', margin: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://st2.depositphotos.com/7864410/49067/v/380/depositphotos_490677370-stock-illustration-circle-shape-hot-bakery-smoke.jpg?forcejpeg=true"
                alt="buncake"
              />
              <CardContent>
                <Typography component="div"sx={{fontSize:'14px'}}>
                  Whethear the Fliting attendence of the one stil and solitary jet had gradually worked aheb
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
      </Grid>
    </Container>
  )
}

export default ThirdPart;