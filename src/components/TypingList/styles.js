import styled from "styled-components";

const handleTypeBg = (type) =>{
  switch(type){
    case 'dark':
      return "#636363";
    case 'flying':
      return "#a890f0";
      case 'normal':
      return "#d9caa9";
      case 'fire':
      return "#f0a067";
      case 'water':
      return "#97c3ed";
      case 'grass':
      return "#78c850";
      case 'fighting':
      return "#c15f5a";
      case 'poison':
      return "#9e629e";
      case 'electric':
      return "#f8d030";
      case 'ground':
      return "#e0c068";
      case 'rock':
      return "#b8a038";
      case 'psychic':
      return "#f9799f";
      case 'ice':
      return "#D1E7EE";
      case 'bug':
      return "#a8b820";
      case 'ghost':
      return "#8d7fa6";
      case 'steel':
      return "#b8b8d0";
      case 'dragon':
      return "#bb9df2";
      case 'fairy':
      return "#ffbbeb";
    default:
      return '#fff';
  }
}

export const InnerChip  = styled.div`
    background-color: ${({ type }) => handleTypeBg(type)};
    border: solid 1px rgba(0,0,0,0.2);
    padding: 0.3rem 1.5rem;
    border-radius: 0.5rem;
`
export const Type = styled.span`
  text-transform: capitalize;
  font-size: 1em;
`;