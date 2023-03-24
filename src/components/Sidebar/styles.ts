import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const AvatarAndProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 1.6;
  }

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${(props) => props.theme["gray-600"]};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ButtonContainer = styled.button`
  display: block;
  background: transparent;
  color: ${(props) => props.theme["green-300"]};
  border: 1px solid ${(props) => props.theme["green-300"]};
  padding: 0.3rem 1rem;
  margin-top: 0.625rem;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: color 0.1s, background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme["green-500"]};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;

    svg {
      size: 5;
    }
  }
`;
