import styled from "styled-components";

const colorMap = {
  black: "#898989",
  blue: "#a5afde",
  yellow: "#fff4b9",
  brown: "#c1b1a3",
  gray: "#d0d0d0",
  green: "#b5f6b8",
  pink: "#f7bde0",
  purple: "#c2a5de",
  red: "#f6a5a5",
  white: "#fff",
  unknown: "#fbfbfb",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 550) {
    padding: 0 10px;
  }
`;
export const Error = styled.span`
color:red;
font-style: italic;
`
export const PokemonCard = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 16px 32px;
  margin: 10px 0;
  background-color: ${({ color }) => colorMap[color]};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  @media(max-width:550px){
    padding: 6px 0 30px;
    gap: 0.2rem;
    font-size: 14px;
  }
`;

export const Img = styled.img`
  max-width: 300px;
  max-height: 300px;
`;

export const Id = styled.p`
  font-weight: lighter;
  font-size: 1em;
  color: #212121;
`;
export const Bold = styled.p`
  text-transform: capitalize;
  font-size: 1.5em;
  font-weight: bold;
`;
export const ColorLabel = styled.span`
  font-weight: lighter;
`;
export const TypeGrid = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
export const StatusTable = styled.div`
  line-height: 1.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 10px;
`;
