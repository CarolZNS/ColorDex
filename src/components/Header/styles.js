import styled from "styled-components";

export const Header = styled.div`
  background-color: #ff6347;
  padding: 20px;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 4rem;
  color: #fff8dc;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-decoration-line: none !important;
  flex-grow: 1;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const ReturnLink = styled.button`
  cursor: pointer;
  padding: 6px 15px;
  font-size: 1.5em;
  font-family: "Nunito", sans-serif;
  border-style: none;
  border-radius: 100%;
  background-color: #fff8dc;
  position: absolute;
  left: 30px;
  top: 40px;
  text-decoration-line: none !important;
  @media (max-width: 550px) {
    font-size: 1em;
    padding: 3px 9px;
    left: 24px;
    top: 29px;
  }
`;
