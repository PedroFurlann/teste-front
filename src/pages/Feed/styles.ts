import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostContainer = styled.article`
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
  gap: 1rem;
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
  color: ${(props) => props.theme["gray-300"]};
  line-height: 1.6;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  strong {
    margin-top: 1rem;
    font-size: 1.125rem;
  }

  p {
    margin-top: 1rem;
  }
`;

export const ShowCommentsButton = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.625rem;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const CommentsList = styled.div`
  margin-top: 2rem;
`;

export const GoToProfileButton = styled.button`
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
