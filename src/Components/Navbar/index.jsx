import React, { memo, useState } from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import icon from "../../assets/img/icon.png";

import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const Navbar = ({ matches }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <>
      <Box elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "5px 10px",
            }}
            component="div"
          >
            {/* logo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ width: "60px",height:"60px",color:"rgba(222,42,38,1)",fontWeight:700,fontSize:'35px' }} alt="BloodLine"> BloodLine</h3>
            
            </Box>

            {/* Links */}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Link to='/'>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "rgba(222,42,38,1)",
                    fontSize: "1.2rem",
                  }}
                >
                  Home
                </Typography>
                </Link>
              

               
                <Link to='/aboutus'>
                  <Typography
                    sx={{
                      marginRight: "20px",
                      cursor: "pointer",
                      color: "rgba(222,42,38,1)",
                      fontSize: "1.2rem",
                    }}
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    About-us
                  </Typography>
                </Link>
               {/* <Link to="/contactus">
               <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    
                    color: "rgba(222,42,38,1)",
                    fontSize: "1.2rem",
                  }}
                >
                  Contact
                </Typography>
               </Link> */}
             
              </Box>
            )}

            {/* button links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {matches ?(
                <IconButton size="large" onClick={() => setOpenDrawer(true)}>
                  <MenuIcon fontSize="inherit" htmlColor="rgba(222,42,38,1)"/>
                </IconButton>
              ):null}
            </Box>
           
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default memo(Navbar);
