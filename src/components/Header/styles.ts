import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme["gray-800"]};
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;

  p {
    font-weight: bolder;
    color: ${props => props.theme["gray-100"]};
  }
`