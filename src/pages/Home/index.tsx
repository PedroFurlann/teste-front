import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import api from "../../lib/axios";
import { Container } from "./styles";

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

interface PostUserProps {
  name: string;
  username: string;
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);

  async function fetchPosts() {
    try {
      await api
        .get("/posts")
        .then((response) => setPosts(response.data.slice(0, 11)));
    } catch (error) {
      throw new Error("Não foi possível carregar os posts da página");
      console.log(error);
    }
  }

  async function fetchUsers() {
    try {
      await api.get("/users").then((response) => setUsers(response.data));
    } catch (error) {
      throw new Error("Não foi possível carregar as informações dos usuários");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            key={post.id}
            username={users.find((user) => user.id === post.userId)!.username}
            realNameUser={users.find((user) => user.id === post.userId)!.name}
          />
        ))}
    </Container>
  );
}
