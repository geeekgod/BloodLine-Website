import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CustomBtn from "../Main/CustomBtn";
import { Link } from "react-router-dom";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <List>
        <ListItem divider  onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
         
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          
          <ListItemIcon sx={{ px: 5 }}>
            <ListItemText>Contact</ListItemText>
          </ListItemIcon>
          
        </ListItem>
        {/* buttons */}
       
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
