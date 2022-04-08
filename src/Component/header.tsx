import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import DrawerComponent from "../DrawerComponent";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme:any) => ({
 
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    padding: "10px",
  },
}));

const Header=()=>{
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          
            <Grid container xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px',marginBottom:'20px'}} >
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/menu" className={classes.link}>
                Menu
              </Link>
              <Link to="/feature" className={classes.link}>
                Feature
              </Link>
              
              <Link to="/shop" className={classes.link}>
                Shop
              </Link>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
              <Link to="/aboutus" className={classes.link}>
                About Us
              </Link>
            </Grid>
         
        )}
      
      </>
  );
}
export default Header;
