import { ArrowRight } from "@phosphor-icons/react";
import { ButtonContainer, Container, TitleContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleGoToFeed() {
    navigate("/feed");
  }

  return (
    <Container>
      <TitleContainer>Front-Blog</TitleContainer>

      <ButtonContainer onClick={handleGoToFeed}>
        Acessar Feed
        <ArrowRight size={20} color="#E1E1E6" weight="fill" />
      </ButtonContainer>
    </Container>
  );
}
