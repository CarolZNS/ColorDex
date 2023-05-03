import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-block: 10px;
  gap: 10px;
`;
export const StyledSelect = styled.select`
  border: none;
  background-color: #f3f3f3;
  padding: 4px;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: "Nunito", sans-serif;
  font-size: 14px;
`;

export const StyledOption = styled.option`
  font-family: "Nunito", sans-serif;
`;
