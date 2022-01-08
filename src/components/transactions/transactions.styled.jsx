import styled from '@emotion/styled';

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #ecd8d8;
`;
export const TableHeading = styled.th`
    padding: 15px 50px;
    background-color: #4891c2;
   &:not(:last-child) {
        border-right: 1px solid #ecd8d8;
   };
`;

export const TableRow = styled.tr`
     &:nth-of-type(2n) {
         background-color: #b4c6d6;
     }
     
`;
export const TableData = styled.td`
   padding: 8px 12px; 
   text-align: justify; 
`;