import { useEffect, useState } from "react";
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
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Container>
      {users.map((user) => (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <CardContainer>
              <Avatar />
              <UserInfoContainer>
                <UserNameContainer>{user.name}</UserNameContainer>
                <UserUsernameContainer>{user.username}</UserUsernameContainer>
                <UserEmailContainer>{user.email}</UserEmailContainer>
                <UserPhoneContainer>{user.phone}</UserPhoneContainer>
                <UserWebsiteContainer>{user.website}</UserWebsiteContainer>
              </UserInfoContainer>
            </CardContainer>
          )}
        </>
      ))}
    </Container>
  );
}
