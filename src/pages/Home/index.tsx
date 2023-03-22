import { useEffect, useState } from "react";
import api from "../../lib/axios";

export function Home() {
  interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [posts, setPosts] = useState<PostProps[]>([]);
  async function getPosts() {
    await api.get("/posts").then((response) => setPosts(response.data));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ul>
      {posts && (
        posts.map((post) =>
          <li key={post.id}>
            <b>{post.body}</b>
          </li>
        )
      )}
    </ul>
  )
}