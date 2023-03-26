import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme["gray-800"]};
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;

  p {
    font-weight: bolder;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const GoToHomeButton = styled.button`
  border: none;
  background: none;
  font-size: inherit;
  color: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme["gray-500"]};
    text-decoration: underline;
  }
`;
