import { Avatar } from "../Avatar";
import { Container, ContentContainer, PostHeader, UserInfo } from "./styles";

interface PostProps {
  title: string;
  body: string;
  realNameUser: string;
  username: string
}

export function PostCard({ title, body, realNameUser, username }: PostProps) {
  return (
    <Container>
      <PostHeader>
        <Avatar />
        <UserInfo>
          <strong>{username}</strong>
          <span>{realNameUser}</span>
        </UserInfo>
      </PostHeader>

      <ContentContainer>
        <p>{title}</p>
        <p>{body}</p>
      </ContentContainer>
    </Container>
  );
}
