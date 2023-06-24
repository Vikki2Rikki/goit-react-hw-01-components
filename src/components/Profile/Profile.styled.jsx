import styled from "styled-components";

export const ProfileCard = styled.div`
  border: 2px solid grey;
  border-radius: 3px; 
  width: 100%;
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   text-align:center;
   align-items: center;
   padding-top: 32px;
   padding-bottom: 32px;
`;

export const Avatar = styled.img`
width: 120px;
height: 120px;
   border-radius: 50%;
   margin-top: 24px;
   margin-bottom: 24px;
   background-color: #5400ae;
`;

export const Name = styled.p`
 font-size: 28px;  
 font-weight:700;
 margin-bottom: 6px;
`;

export const Tag = styled.p`
font-size: 20px;
font-weight: 500px;
color: #666161;
 margin-bottom: 6px;  
`;
export const Location = styled.p`
   font-size: 20px;
font-weight: 500px;
color: #666161;
`;

export const StatsList = styled.ul`
display: flex;
justify-content: space-around;

 border-top: 1px solid  grey; 
 background-color: #d2d0d0;
`;

export const Item = styled.li`
   display: flex;
   flex-direction:column;
   flex-basis: calc(100% / 3);
   align-items: center;
   gap: 6px;
   padding-top: 14px;
padding-bottom: 14px;
   border: 1px solid grey;
`;

export const Label = styled.span`
  font-size:18px;
  font-weight: 500px;
   
`;

export const Quanity = styled.span`
font-size: 18px;
  font-weight: 700; 
`;
