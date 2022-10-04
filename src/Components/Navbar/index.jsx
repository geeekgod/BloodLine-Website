import React, { memo, useState } from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import icon from "../../assets/img/icon.png";

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
              padding: "20px 10px",
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
              <img
                style={{ width: "50%" }}
                src="/src/assets/img/icon.png"
                alt="BloodLine"
              />
            </Box>

            {/* Links */}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                    fontSize: "1.2rem",
                  }}
                >
                  Home
                </Typography>

               
                <Link to='/aboutus'>
                  <Typography
                    sx={{
                      marginRight: "20px",
                      cursor: "pointer",
                      color: "#616161",
                      fontSize: "1.2rem",
                    }}
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    About-Us
                  </Typography>
                </Link>
               <Link to="/contactus">
               <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                    fontSize: "1.2rem",
                  }}
                >
                  Contact
                </Typography>
               </Link>
             
              </Box>
            )}

            {/* button links */}
           
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default memo(Navbar);
