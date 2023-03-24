import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TitleContainer = styled.h1`
  font-size: 5rem;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme["gray-100"]};


  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: none;
  padding: 0.5rem 8rem;
  margin-top: 0.625rem;
  cursor: pointer;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 4rem;
  }
`