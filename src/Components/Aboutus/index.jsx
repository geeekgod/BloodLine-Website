import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import TeamCards from "../../Components/Cards";
import rishabh from "../../assets/img/rishabh.jpg";
import shreya_5 from "../../assets/img/shreya_5.jpeg"
import aditi from "../../assets/img/aditi.jpeg";
import sumit from "../../assets/img/sumit.jpeg";

import { Link as Rlink } from "react-router-dom";

const data = [
  {
    name: "Rishabhkumar Singh",
    img: rishabh,
    position: "Full-Stack Developer",
    linkedIn: "https://www.linkedin.com/in/rishabhh-singh/",
    gitHub: "https://github.com/thisisrishabh22",
  },
  {
    name: "Shreya Shet",
    img: shreya_5,
    position: "Front-End Developer",
    linkedIn: "https://www.linkedin.com/in/shreyaa-shet/",
    gitHub: "https://github.com/shreyaaashet",
  },
  {
    name: "Aditi Thakre",
    img: aditi,
    position: "Back-End Developer",
    linkedIn: "https://www.linkedin.com/in/aditi-thakre-3554a0221/",
    gitHub: "https://github.com/AditiThakre05",
  },
  {
    name: "Sumitkumar Thakur",
    img:sumit ,
    position: "Back-End Developer",
    linkedIn: "https://www.linkedin.com/in/sumitkumar-thakur-sla0808/",
    gitHub: "https://github.com/Sumitkumar-Thakur",
  },
];

const AboutUs = () => {
  return (
    <Box sx={{ pt: 2, pb: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        color="#DE2A26"
        fontWeight={600}
        sx={{ mt: 2, mb: 2, textAlign: "center" }}
      >
        BloodLine Developers
      </Typography>
      <Container>
        <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
          {data &&
            data.map((item, index) => (
              <Grid item key={index} md={4} xs={12}>
                <TeamCards item={item} />
              </Grid>
            ))}
        </Grid>
        {/* <Box sx={{ p: 2 }}>
          <Rlink style={{ marginTop: "10px", padding: 2 }} to="/">
            <Link>Go back</Link>
          </Rlink>
        </Box> */}
      </Container>
    </Box>
  );
};

export default AboutUs;