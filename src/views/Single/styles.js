import styled from "styled-components";

const handleColor = (color) => {
  switch (color) {
    case "black":
      return "#898989";
    case "blue":
      return "#a5afde";
    case "yellow":
      return "#fff4b9";
    case "brown":
      return "#c1b1a3";
    case "gray":
      return "#d0d0d0";
    case "green":
      return "#b5f6b8";
    case "pink":
      return "#f7bde0";
    case "purple":
      return "#c2a5de";
    case "red":
      return "#f6a5a5";
    case "white":
      return "#fff";
    default:
      return "#fff";
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UniqueCard = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 10px 16px 32px;
  margin: 10px 0;
  background-color: ${({ color }) => handleColor(color)};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
`;
export const Img = styled.img`
  width: 300px;
  height: 300px;
`;
export const Id = styled.p`
  font-weight: lighter;
  font-size: 0.8em;
  color: #212121;
`;
export const Name = styled.p`
  text-transform: capitalize;
  font-size: 1.5em;
  font-weight: bold;
`;
export const TypeGrid = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 16px;
`;
export const StatusTable = styled.div`
  line-height: 1.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 10px;
`;
