import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }
`;

export const UserInfo = styled.div`
  strong {
    display: block;
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme["gray-700"]};
  padding: 1rem;
  border-radius: 8px;

  header {
    display: flex;
    align-items: flex-start;

    strong {
      font-size: 1.125rem;
      margin-top: 1rem;
      color: ${(props) => props.theme["gray-300"]};
      margin-bottom: 0.5rem;
    }
  }

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  p {
    margin-top: 0.875rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;
