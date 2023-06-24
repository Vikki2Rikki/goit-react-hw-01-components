import styled from "styled-components";

export const Item = styled.li`
  display: flex; 
  gap:16px;
  align-items: center;
  border: 1px solid black;
  border-radius:4px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
`;
export const Status = styled.span`
   width: 15px;
   height: 15px;
   border-radius: 50%;
   background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')}
`;
export const Avatar = styled.img`
 width: 48px;  
 height: 48px;
 background-color: #d1d1ed;
 border:1px solid black;
 border-radius: 5px;
`;
export const Name = styled.p`
  font-weight: 500; 
`;