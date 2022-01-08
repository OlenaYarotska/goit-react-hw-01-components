import styled from '@emotion/styled';

export const SectionStats = styled.section`
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 350px;
`;
export const SectionTitle = styled.h2`
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid #ecd8d8;
    text-transform: uppercase;
    font-size: 20px;
    color: #505050;
`;
export const StatList = styled.ul`
    display: flex;
    flex-wrap: nowrap;  
    padding-bottom: 20px;
`;

export const StatItems = styled.li`
    display: flex;
    width: calc(100% / 5);
    flex-direction: column;
    align-items: center;
    border: 1px solid #ecd8d8;
    background-color: ${getRandomHexColor};
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatsLabel = styled.span`
    color: #cece;
    font-size: 14px;
    font-weight:700;
`;

export const Percentage = styled.span`
    color: #cece;
    font-size: 16px;
     font-weight:700;
`;