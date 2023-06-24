import styled from "styled-components";
import getRandomHexColor from "components/Utility/RenderColor";

export const Section = styled.section`
display: flex;
flex-direction: column;
 width: 100%;  
 border: 1px solid grey;
 margin-top: 20px;
`;

export const Title = styled.h2`
   text-align: center;
   text-transform: uppercase;
   padding-top: 20px;
   padding-bottom: 10px;
`;

export const StatList = styled.ul`
  display: flex; 
 
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column; 
  gap: 8px;
  flex-basis: calc(100% / 4);
  align-items:center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${() => getRandomHexColor()};
`;


export const Label = styled.span`
  font-style: 28px; 
  color: white;
`;
export const Percentage = styled.span`
   font-size: 22px;
    font-weight:700px;
    color: white;
`;