import { useNavigate } from "react-router-dom";
import { Container, GoToHomeButton } from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleGoToHome() {
    navigate("/");
  }

  return (
    <Container>
      <GoToHomeButton onClick={handleGoToHome}>
        <p>FRONT-BLOG</p>
      </GoToHomeButton>
    </Container>
  );
}
