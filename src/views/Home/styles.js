import styled from "styled-components";

export const StyledApp = styled.div`
@media(max-width:550px){
  padding: 2px;
}
`
export const GroupColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  gap: 3px;
  @media(max-width:550px){
    gap: 2px;
  }
`;
export const StyledInput = styled.input`
  height: fit-content;
  width: 50%;
  padding: 6px;
  font-size: 1.3rem;
  letter-spacing: 2px;
  border-style: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  border-radius: 25px;
  margin-bottom: 20px;
  @media(max-width:550px){
    width: 90%;
    font-size: 0.7rem;
    letter-spacing: 1px;
    border-radius: 10px;
  }
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
  @media(max-width:550px){
    gap: 10px;
  }
`;
