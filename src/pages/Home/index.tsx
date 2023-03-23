import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import api from "../../lib/axios";
import { Container } from "./styles";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function Home() {
  

  const [posts, setPosts] = useState<PostProps[]>([]);

  async function getPosts() {
    try {
      await api
        .get("/posts")
        .then((response) => setPosts(response.data.slice(0, 1)));
    } catch (error) {
      throw new Error("Não foi possível carregar os posts da página");
      console.log(error);
    }
  }


  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      {posts && posts.map(post => (
        <PostCard title={post.title} body={post.body} />
      ))}
    </Container>
  );
}
