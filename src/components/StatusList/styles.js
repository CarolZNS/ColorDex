import styled from "styled-components";

export const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
`;

export const Name = styled.span`
  text-align: end;
  text-transform: capitalize;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

export const Value = styled.span`
  text-align: center;
`;
