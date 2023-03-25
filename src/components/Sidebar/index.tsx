import { House, Notebook, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { AvatarContainer } from "../Avatar/styles";
import {
  AvatarAndProfile,
  ButtonContainer,
  Container,
  CoverImage,
  Footer,
} from "./styles";

export function Sidebar() {
  const navigate = useNavigate();

  function handleGoToHome() {
    navigate("/");
  }

  return (
    <Container>
      <CoverImage src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" />

      <AvatarAndProfile>
        <a href="https://github.com/PedroFurlann" target="_blank">
          <AvatarContainer
            src="https://avatars.githubusercontent.com/u/104268151?s=400&u=683028b76a787c3d9a750d5a1de2bf7fcef6cb0c&v=4"
            alt="Avatar do github de Pedro Furlan"
          />
        </a>

        <a href="https://github.com/PedroFurlann" target="_blank">
          <strong>Pedro Furlan</strong>
        </a>
        <a href="https://github.com/PedroFurlann" target="_blank">
          <span>Front-end Developer</span>
        </a>
        <Notebook size={24} />
      </AvatarAndProfile>

      <Footer>
        <ButtonContainer onClick={handleGoToHome}>
          Home
          <House size={20} weight="fill" />
        </ButtonContainer>
      </Footer>
    </Container>
  );
}
