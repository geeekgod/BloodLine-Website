import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

import CtaButton from "../Main/CtaButtons";

import {
  LandingContainer,
  LandingWrapper,
  Heading,
  Small,

  BtnWrapper,
  Title,
} from "./LandingCTAElements";

const LandingCTA = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <Heading>
            Get BloodLine today on Appstore 
          </Heading>
            <Typography sx={{color:"#fff",textAlign:'center', fontSize:25,fontWeight:600}}>
            or
            </Typography>
          <BtnWrapper>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            
          <Title>Download the apk </Title> 
              
            
            </Stack>
          </BtnWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default memo(LandingCTA);
