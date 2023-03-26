import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 90vh;
`;

export const UserCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  grid-gap: 0.625rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-600"]};
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const UserCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserCardField = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

export const UserCardValue = styled.span`
  font-size: 1.125rem;
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
`;
