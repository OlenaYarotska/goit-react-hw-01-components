import styled from '@emotion/styled';

export const Card = styled.div`
    background-color: #f3f3f3;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #ecd8d8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16);
    `;

export const Info = styled.div`
    
`;
export const Image = styled.img`
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;
export const Username = styled.p`
    font-size: 18px;
    font-weight: 700;
`;
export const Tag = styled.p`
    color: #817e7e;
    font-size: 12px;
`;
export const Location = styled.p`
    color: #817e7e;
    font-size: 14px;
`;
export const Stats = styled.ul`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
`;
export const StatsItems = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
`;

export const StatsLabel = styled.span`
    color: #817e7e;
`;

export const StatsQuantity = styled.span`
    font-weight:700;
`;