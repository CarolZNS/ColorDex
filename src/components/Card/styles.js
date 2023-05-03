import styled from "styled-components";

const backgroundColors = [
  "#898989",
  "#a5afde",
  "#c1b1a3",
  "#d0d0d0",
  "#b5f6b8",
  "#f7bde0",
  "#c2a5de",
  "#f6a5a5",
  "#fff",
  "#fff4b9",
];

export const Card = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => backgroundColors[color - 1]};
  cursor: pointer;
  @media (max-width: 550px) {
    width: 150px;
    height: 150px;
    justify-content: center;
    padding: 5px 2px;
  }
`;
export const TypesContainer = styled.div`
  border-radius: 3px;
  text-transform: none;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 9px;
  @media (max-width: 550px) {
    gap: 3px;
    font-size: 12px;
  }
`;
export const Id = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #212121;
  @media (max-width: 550px) {
    font-size: 0.3em;
  }
`;
export const Name = styled.h3`
  text-transform: capitalize;
  @media (max-width: 550px) {
    font-size: 0.8em;
  }
`;
export const TypeChip = styled.span`
  padding: 3px 17px;
  border-radius: 3px;
  background-color: rgba(150, 143, 143, 0.5);
  mix-blend-mode: multiply;
  color: #212121;
  @media (max-width: 550px) {
    padding: 0 8px;
  }
`;
