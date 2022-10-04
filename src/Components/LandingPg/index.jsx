import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
} from "./LandingElements";
import React, { memo } from "react";
import CtaButton from "../Main/CtaButtons";
import { Link } from "react-router-dom";

const Home = ({
  matches,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headLine}</Heading>
                <SubTitle>{description}</SubTitle>
               
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default memo(Home);
