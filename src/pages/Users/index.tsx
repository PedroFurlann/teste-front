import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import { Loading } from "../../components/Loading";
import api from "../../lib/axios";
import {
  CardContainer,
  Container,
  UserEmailContainer,
  UserInfoContainer,
  UserNameContainer,
  UserPhoneContainer,
  UserUsernameContainer,
  UserWebsiteContainer,
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

  const params = useParams();

  const userId = Number(params.userId);

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
    <Container>
      {users.map((user) => (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {user.id === userId && (
                <CardContainer>
                  <Avatar />
                  <UserInfoContainer>
                    <UserUsernameContainer>{user.username}</UserUsernameContainer>
                    <UserNameContainer>
                      {user.name}
                    </UserNameContainer>
                    <UserEmailContainer>{user.email}</UserEmailContainer>
                    <UserPhoneContainer>{user.phone}</UserPhoneContainer>
                    <UserWebsiteContainer>{user.website}</UserWebsiteContainer>
                  </UserInfoContainer>
                </CardContainer>
              )}
            </>
          )}
        </>
      ))}
    </Container>
  );
}
