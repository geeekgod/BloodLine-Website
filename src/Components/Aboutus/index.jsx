import { Box, Container, Grid, Link, Typography } from "@mui/material";

import TeamCards from "../../Components/Cards";
import rishabh from "../../assets/img/rishabh.jpg";
import shreya_5 from "../../assets/img/shreya_5.jpeg"
import aditi from "../../assets/img/aditi.jpeg";
import sumit from "../../assets/img/sumit.jpeg";

import { Link as Rlink } from "react-router-dom";

import React, { memo } from "react";
import {
  Boxs,
  Card,
  Cards,
  CategoriesWrapper,
  Content,
  Icon, Circle
} from "../Services/ServicesElements";


const data = [
  {
    id:1,
    name: "Rishabhkumar Singh",
    img: rishabh,
    position: "Full-Stack Developer",
    linkedIn: "https://www.linkedin.com/in/rishabhh-singh/",
    gitHub: "https://github.com/thisisrishabh22",
  },
  {
    id:2,
    name: "Shreya Shet",
    img: shreya_5,
    position: "Front-End Developer",
    linkedIn: "https://www.linkedin.com/in/shreyaa-shet/",
    gitHub: "https://github.com/shreyaaashet",
  },
  {
    id:3,
    name: "Aditi Thakre",
    img: aditi,
    position: "Back-End Developer",
    linkedIn: "https://www.linkedin.com/in/aditi-thakre-3554a0221/",
    gitHub: "https://github.com/AditiThakre05",
  },
  {
    id:4,
    name: "Sumitkumar Thakur",
    img:sumit ,
    position: "Back-End Developer",
    linkedIn: "https://www.linkedin.com/in/sumitkumar-thakur-sla0808/",
    gitHub: "https://github.com/Sumitkumar-Thakur",
  },
];

// const AboutUs = () => {
//   return (
//     <Box sx={{ pt: 2, pb: 4 }}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         component="div"
//         color="#DE2A26"
//         fontWeight={600}
//         sx={{ mt: 2, mb: 2, textAlign: "center" }}
//       >
//         BloodLine Developers
//       </Typography>
//       <Container sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
//           {data &&
//             data.map((item, index) => (
//               <Grid item key={index} md={4} xs={12}>
//                 <TeamCards item={item} />
//               </Grid>
//             ))}
//         </Grid>
       
//       </Container>
//     </Box>
//   );
// };

// export default AboutUs;




const Aboutus = ({ serviceItem }) => {
  return (
    <>
      <Boxs id="categories">
        {/* <p
          style={{
            fontSize: 16,
            color: "#2667FF",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "1.4px",
          }}
        >
          Jobs based on your desired category
        </p> */}
        <h1 style={{ textAlign: "center", color: "#DE2A26" }}>BloodLine Developers</h1>
        <Box>
          <CategoriesWrapper>
            <Cards>

           

            {data &&
            data.map((item, index) => (
              <Grid item key={index} md={4} xs={12}>
                <TeamCards item={item} />
              </Grid>
            ))}
             
            </Cards>
          </CategoriesWrapper>
        </Box>
      </Boxs>
    </>
  );
};

export default memo(Aboutus);