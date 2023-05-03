import styled from "styled-components";

const typeColors = {
  dark: "#636363",
  flying: "#a890f0",
  normal: "#d9caa9",
  fire: "#f0a067",
  water: "#97c3ed",
  grass: "#78c850",
  fighting: "#c15f5a",
  poison: "#CC7ECC",
  electric: "#f8d030",
  ground: "#e0c068",
  rock: "#b8a038",
  psychic: "#f9799f",
  ice: "#D1E7EE",
  bug: "#a8b820",
  ghost: "#8d7fa6",
  steel: "#b8b8d0",
  dragon: "#bb9df2",
  fairy: "#ffbbeb",
};

export const TypeChip  = styled.div`
    background-color: ${({ type }) => typeColors[type]};
    border: solid 1px rgba(0,0,0,0.2);
    padding: 0.3rem 1.5rem;
    border-radius: 1.5rem;
`
export const Type = styled.span`
  text-transform: capitalize;
  font-size: 1em;
  color: ${({ type }) => (type === 'dark')? "#fff" : "#000"};
`;