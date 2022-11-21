import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  background-color: #ff6347;
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 4rem;
  color: #fff8dc;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-decoration-line: none !important;
`;

export const ReturnTitle = styled(Link)`
  text-decoration-line: none !important;
`