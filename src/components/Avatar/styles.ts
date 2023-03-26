import styled from "styled-components";

export const AvatarContainer = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme["gray-800"]};
  outline: 2px solid ${(props) => props.theme["green-500"]};
`;
