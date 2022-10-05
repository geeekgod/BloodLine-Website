import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const TeamCards = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth:300,
        p: 1,
        borderRadius: 10,
        boxShadow:
          " rgba(0, 0, 0, 0.24) 0px 3px 8px; !important",
          
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: 200,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems:"center",
          }}
        >
          <img
            src={item.img}
            alt="developer image"
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              margin: "auto",
              filter:
                item.name === "Shreya Shet"
                  ? "brightness(1.3)"
                  : "brightness(1)",
            }}
          />
        </Box>
      </Box>
      <CardContent
        sx={{
          width: "254.79px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mr: "auto !important",
          ml: "auto !important",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.position}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center !important" }}>
        <IconButton
          sx={{ m: "0 !important" }}
          color="primary"
          href={item.linkedIn}
          target="_blank"
          size="large"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={{ m: "0 !important" }}
          color="primary"
          href={item.gitHub}
          target="_blank"
          size="large"
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default React.memo(TeamCards);