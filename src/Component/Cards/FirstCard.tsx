import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

const FirstCard = () => {
  return (
    <Container >
      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginBottom: '50px', justifyContent: 'center'}}>
        <Card  sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5ixW3k-Un8ShfS5y94F9C_2PeLxIzU5di9qyn1T9Gg9M9NhIaK5z2YZlhWo_FhwDpqY&usqp=CAU"
              alt="buncake"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.foodmauritius.com/wp-content/uploads/2020/05/pastry-menu2.jpg"
              alt="buncake"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWvh-j7GsRGxq5galGcxHHXATj85RtYbcwA&usqp=CAU"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
        <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.insider.com/5bf58e2948eb123c7e0aea14?width=700"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
      </Grid >
      <Grid  container sx={{ display: 'flex', flexDirection: 'row', marginBottom: '50px', justifyContent: 'center' }}>
        <Card sx={{ width: '200px', margin: '10px' ,border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image='https://image.shutterstock.com/image-photo/cupcakes-strawberries-blueberries-stored-refrigerator-260nw-1912377238.jpg'
              alt="buncake"
            />

          </CardActionArea>

        </Card>
        <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBs30Q6qnB8xSUJqAh5LuL_s1ksuoosXWP_w&usqp=CAU"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
        <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSilcN33196OZfyd9IQqC2itBITlwGrc1nkg&usqp=CAU"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
        <Card sx={{ width: '200px', margin: '10px',border:'1px solid #968d8c',padding: '5px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/attachment_69674187-e1502898440512.jpg?auto=format&q=60&fit=max&w=930"
              alt="buncake"
            />

          </CardActionArea>

        </Card>
      </Grid>
    </Container>

  );
}

export default FirstCard;