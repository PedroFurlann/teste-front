import { useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
import api from "../../lib/axios";
import {
  Container,
  ContentContainer,
  PostContainer,
  PostHeader,
  ShowCommentsButton,
  UserInfo,
} from "./styles";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface CommentProps {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [showComments, setShowComments] = useState<number[]>([]);

  function handleShowComments(postId: number) {
    if (showComments.includes(postId)) {
      setShowComments(showComments.filter((id) => id !== postId));
    } else {
      setShowComments([...showComments, postId]);
    }
  }

  async function fetchPosts() {
    try {
      await api
        .get("/posts")
        .then((response) => setPosts(response.data.slice(0, 11)));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar os posts da página");
    }
  }

  async function fetchUsers() {
    try {
      await api.get("/users").then((response) => setUsers(response.data));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar as informações dos usuários");
    }
  }

  async function fecthComments() {
    try {
      await api.get("/comments").then((response) => setComments(response.data));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar os comentário desse post");
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchPosts();
    fecthComments();
  }, []);

  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <PostContainer key={post.id}>
            <PostHeader>
              <Avatar />
              <UserInfo>
                <strong>
                  {users.find((user) => user.id === post.userId)?.username}
                </strong>
                <span>
                  {users.find((user) => user.id === post.userId)?.name}
                </span>
              </UserInfo>
            </PostHeader>

            <ContentContainer>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </ContentContainer>

            <ShowCommentsButton onClick={() => handleShowComments(post.id)}>
              {showComments.includes(post.id)
                ? "Recolher comentários"
                : "Mostrar comentários"}
            </ShowCommentsButton>
          </PostContainer>
        ))}
    </Container>
  );
}
