import { Container, ContentContainer, PostHeader, UserInfo } from "./styles";

interface PostProps {
  title: string;
  body: string;
  user?: {
    name: string;
    username: string;
  };
}

export function PostCard({ title, body, user }: PostProps) {
  return (
    <Container>
      <PostHeader>
        <UserInfo>
          <strong>{user?.username}</strong>
          <span>{user?.name}</span>
        </UserInfo>
      </PostHeader>

      <ContentContainer>
        <p>{title}</p>
        <p>{body}</p>
      </ContentContainer>
    </Container>
  );
}
