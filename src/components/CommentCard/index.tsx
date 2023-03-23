import { Avatar } from "../Avatar";
import { Container, ContentContainer, UserInfo } from "./styles";

interface CommentCardProps {
  username: string;
  title: string;
  body: string
}

export function CommentCard({ username, title, body }: CommentCardProps) {
  <Container>
    <Avatar />
    
    <ContentContainer>
      <header>
        <UserInfo>
          <strong>{username}</strong>
        </UserInfo>
      </header>

      <strong>{title}</strong>
      <p>{body}</p>
    </ContentContainer>
  </Container>
}