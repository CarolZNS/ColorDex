import styled from "styled-components";

const getBgColor = (color) => {
  const colors = ["#898989", "#a5afde", "#c1b1a3", "#d0d0d0", "#b5f6b8", "#f7bde0", "#c2a5de", "#f6a5a5", "transparent", "#fff4b9"];
  return `background-color: ${colors[color-1]}`
}

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
  ${({color})=>getBgColor(color)};
  cursor: pointer;
`
export const Img = styled.img`
  width: 61%;
  height: 61%;
`
export const Types = styled.div`
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
`
export  const Id = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #212121;
`
export const Name = styled.h3`
  text-transform: capitalize;
`
export const Type = styled.span`
  padding: 3px 17px;
  border-radius: 3px;
  background-color: rgba(150, 143, 143, 0.5);
  mix-blend-mode: multiply;
  color: #212121;
`