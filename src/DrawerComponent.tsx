import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "black",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/" className={classes.link}>Home</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/menu" className={classes.link}>Menu</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/feature" className={classes.link}>Feature</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/shop" className={classes.link}>Shop</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/blog" className={classes.link}>Blog</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/aboutus" className={classes.link}>About Us</Link>
            
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;