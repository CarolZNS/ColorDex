import styled from "styled-components";

export const StyledApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700;800;900;1000&display=swap'); 
  font-family: sans-serif;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

export const GroupColors = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  gap: 3px;
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
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
`;
