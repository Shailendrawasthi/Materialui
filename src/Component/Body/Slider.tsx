import { Typography, Paper } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme:any) => ({
  root: {
   
   ['@media (min-width:100px)']: { 
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'blue',
      maxWidth:'100%',fontSize:'25px'
    }
    },
  }));

const Img = styled('img')({
  margin: 'none',
  maxWidth: '200px',
  maxHeight: '120px',
  paddingBottom: '150px',

});
const Img1 = styled('img')({
  margin: 'none',
  maxWidth: '400px',
  maxHeight: '140px',
  marginBottom: "250px"

});




function Slider() {
  const classes = useStyles();
  const [activeChild, setActiveChild] = useState(0);

  const itemData = useMemo(() => [
    {
      img: 'https://thumbs.dreamstime.com/b/fresh-bakery-products-ingredients-his-cooking-fresh-bakery-products-ingredients-his-cooking-banner-space-133632708.jpg',
      title: 'Breakfast',
      id: 1,
    },
    {
      img: 'https://e7.pngegg.com/pngimages/565/81/png-clipart-bun-bakery-product-market-bakery-items-baked-goods-food.png',
      title: 'Burger',
      id: 2,
    },
    {
      img: 'https://previews.123rf.com/images/serezniy/serezniy1812/serezniy181210997/112926856-different-bakery-products-on-white-background.jpg',
      title: 'Camera',
      id: 3,
    },
    {
      img: 'https://thumbs.dreamstime.com/z/fresh-bread-still-life-bakery-product-top-view-flour-egg-plunger-grunge-textured-background-77191975.jpg',
      title: 'Camera',
      id: 4,
    },


  ], []);

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {

        setActiveChild((a) => (a - 2 < 0 ? itemData.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {

        setActiveChild((a) => (a + 2 > itemData.length - 1 ? 0 : a + 1));
      }
    },
    [itemData]
  );

  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: "100%",
          height: 650,
          flexGrow: 1,


        }}

      >
        <Carousel
          index={activeChild}
          autoPlay={false}
          navButtonsAlwaysVisible
        >
          {itemData.map((i) => {
            return (

              <ImageListItem sx={{
                width: "100%",
                backgroundImage: `url(${i.img}?w=900&h=600&fit=crop&auto=format)`
              }} key={i.id} >
                <Grid container  sx={{ color: "white", textAlign: "center",display:'flex',flexDirection:"column" }}>
                  <Grid item>
                    <Img1 src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740" />
                  </Grid>
                  </Grid>
                  
                  <Grid item  sx={{ display:'flex',flexDirection:'column',textAlign: 'center',marginBottom:'80px',color:'white',maxWidth:'100%'}}>
                    <Typography variant='h2' className={classes.root} sx={{backgroundColor: '#ab4d13',width:'500px',fontSize:'50px'}}>Coffe and croissant</Typography>
                    <Typography variant='h6' className={classes.root} sx={{ backgroundColor: '#d6941a',width:'350px'}}>Pleasures and teaste in one peace</Typography>
                  </Grid>
                  
               
              </ImageListItem>
            );
          })}
        </Carousel>
      </Paper>
    </>
  );
}

export default Slider;