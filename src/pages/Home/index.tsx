import { useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
import { CommentCard } from "../../components/CommentCard";
import { Loading } from "../../components/Loading";
import api from "../../lib/axios";
import {
  CommentsList,
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
  const [isLoading, setIsLoading] = useState(false);

  function handleShowComments(postId: number) {
    if (showComments.includes(postId)) {
      setShowComments(showComments.filter((id) => id !== postId));
    } else {
      setShowComments([...showComments, postId]);
    }
  }

  async function fetchPosts() {
    try {
      setIsLoading(true);
      await api
        .get("/posts")
        .then((response) => setPosts(response.data.slice(0, 11)));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar os posts da página");
    } finally {
        setIsLoading(false)
    }
  }

  async function fetchUsers() {
    try {
      setIsLoading(true)
      await api.get("/users").then((response) => setUsers(response.data));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar as informações dos usuários");
    } finally {
        setIsLoading(false)
    }
  }

  async function fecthComments() {
    try {
      setIsLoading(true)
      await api.get("/comments").then((response) => setComments(response.data));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar os comentário desse post");
    } finally {
        setIsLoading(false)
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
          <>
            {isLoading ? (
              <Loading />
            ) : (
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
                {showComments.includes(post.id) && (
                  <CommentsList>
                    {comments
                      .filter((comment) => comment.postId === post.id)
                      .map((comment) => (
                        <CommentCard
                          key={comment.id}
                          username={comment.email}
                          title={comment.name}
                          body={comment.body}
                        />
                      ))}
                  </CommentsList>
                )}
              </PostContainer>
            )}
          </>
        ))}
    </Container>
  );
}