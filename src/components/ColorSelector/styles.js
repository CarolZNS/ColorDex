import styled from "styled-components";

export const RadioSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  &:hover {
    background-color: #ffe6e2;
  }
`;
export const Input = styled.input.attrs({ type: "radio" })`
  width: 1.3em;
  height: 1.3em;
  accent-color: tomato;
  &:checked {
    ${RadioSelector}{
      background-color: #ffe6e2
    }
  };
`;


export const Label = styled.label`
  text-transform: capitalize;
`;
