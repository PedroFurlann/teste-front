import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 2.5rem;
  justify-content: center;
`;

export const LoadingSpinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: 3rem;
  height: 3rem;
  border: 10px solid ${(props) => props.theme["gray-100"]};
  border-top: 10px solid ${(props) => props.theme["green-500"]};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;
