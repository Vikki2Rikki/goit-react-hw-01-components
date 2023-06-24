import styled from "styled-components";

export const Table = styled.table`
  width: 100%; 
  margin-top: 20px;
  border: 1px solid lightgrey;
`;

export const TableHead = styled.thead`
text-transform:uppercase;
color:whitesmoke;
background-color: #4fc0e0;
   
`;

export const TableRow = styled.tr`
  &:nth-child(2n){
   background-color:lightgrey;
  } 
`;

export const HeadName = styled.th`
    padding-top: 10px;
padding-bottom: 10px; 
`;

export const TableBody = styled.tbody`
 
`;

export const TableData = styled.td`
   padding-top: 10px;
padding-bottom: 10px; 
text-align:center;

`;