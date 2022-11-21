import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  background-color: tomato;
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 4rem;
  color: cornsilk;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-decoration-line: none !important;
`;

export const ReturnTitle = styled(Link)`
  text-decoration-line: none !important;
`