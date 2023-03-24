import { Notebook } from "@phosphor-icons/react";
import { AvatarContainer } from "../Avatar/styles";
import { AvatarAndProfile, Container, CoverImage } from "./styles";
export function Sidebar() {
  return (
    <Container>
      <CoverImage src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" />

      <AvatarAndProfile>
        <AvatarContainer
          src="https://avatars.githubusercontent.com/u/104268151?s=400&u=683028b76a787c3d9a750d5a1de2bf7fcef6cb0c&v=4"
          alt="Avatar do github de Pedro Furlan"
        />

        <strong>Pedro Furlan</strong>
        <span>Front-end Developer</span>
        <Notebook size={24} />
      </AvatarAndProfile>
    </Container>
  );
}
