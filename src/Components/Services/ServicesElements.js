import styled from "@emotion/styled";

export const Boxs = styled.div`
  display: flex;
  padding: 4rem 10px;
  background-color: rgba(0, 0, 0, 0.03);
  flex-direction: column;
  align-items: center;
`;

export const CategoriesWrapper = styled.div`
  max-width: 100%;
`;

export const Cards = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  margin-top: 1rem;
  /* position: relative; */
  width: 250px;
  padding:2rem;

  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: all ease-in-out 0.9s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 20px -9px rgba(222,42,38,1);

  }
`;
export const Circle=styled.div`
/* position: absolute; */
z-index:1;

width: 20px;
height:20px;
padding:2rem;
background-color: rgb(222,42,38);
border-radius: 50px;



cursor: pointer;

`;

export const Icon = styled.img`
  /* width: 40px; */
`;
export const Content = styled.div`
  text-align:center;
  color:#7A7A7A;
`;