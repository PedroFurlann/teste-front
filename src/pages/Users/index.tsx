import { ArrowLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import api from "../../lib/axios";
import {
  ButtonContainer,
  Container,
  UserCardContainer,
  UserCardContent,
  UserCardField,
  UserCardValue,
} from "./styles";

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const params = useParams();

  const userId = Number(params.userId);

  function handleBackToFeed() {
    navigate("/feed")
  }

  async function fetchUsers() {
    try {
      setIsLoading(true);
      await api.get("/users").then((response) => setUsers(response.data));
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível carregar os dados do usuário");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userId);

  return (
    <>
      <Header />
      <Container>
        {users.map((user) => (
          <>
            {user.id === userId && (
              <>
                {isLoading ? (
                  <Loading />
                ) : (
                  <Container>
                    <Avatar />
                    <UserCardContainer>
                      <UserCardContent>
                        <div>
                          <UserCardField>Nome:  </UserCardField>
                          <UserCardValue>{user.name}</UserCardValue>
                        </div>
                        <div>
                          <UserCardField>Username:  </UserCardField>
                          <UserCardValue>{user.username}</UserCardValue>
                        </div>
                      </UserCardContent>
                      <UserCardContent>
                        <div>
                          <UserCardField>Email:  </UserCardField>
                          <UserCardValue>{user.email}</UserCardValue>
                        </div>
                        <div>
                          <UserCardField>Telefone:  </UserCardField>
                          <UserCardValue>{user.phone}</UserCardValue>
                        </div>
                        <div>
                          <UserCardField>Website:</UserCardField>
                          <UserCardValue>{user.website}</UserCardValue>
                        </div>
                      </UserCardContent>
                    </UserCardContainer>
                    <ButtonContainer onClick={handleBackToFeed}>
                      <ArrowLeft size={20} color="#E1E1E6" weight="fill" />
                      Voltar para o Feed
                      </ButtonContainer>
                  </Container>
                )}
              </>
            )}
          </>
        ))}
      </Container>
    </>
  );
}
