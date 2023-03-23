import styled from "styled-components";

export const Container = styled.article`
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 2.5rem;
  border-radius: 8px;

  & + article {
    margin-top: 2rem;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${(props) => props.theme["gray-100"]};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 1.6;
  }
`;

export const ContentContainer = styled.article`
  color: ${props => props.theme["gray-300"]};
  line-height: 1.6;
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }
`

