import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

export const UserUsernameContainer = styled.h2`
  margin: 0;
`;

export const UserNameContainer = styled.p`
  margin: 0;
`;

export const UserEmailContainer = styled.p`
  margin: 0;
`;

export const UserPhoneContainer = styled.p`
  margin: 0;
`;

export const UserWebsiteContainer = styled.p`
  margin: 0;
`;

