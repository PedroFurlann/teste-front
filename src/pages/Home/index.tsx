import { ArrowRight } from "@phosphor-icons/react";
import { ButtonContainer, Container, TitleContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <TitleContainer>
        Front-end Blog
      </TitleContainer>

      <ButtonContainer>
        Acessar Feed
        <ArrowRight size={20} color="#E1E1E6" />
      </ButtonContainer>
    </Container>
  )
}