import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${props => props.theme["gray-800"]};
  border-radius: 8px;
  overflow: hidden;
`

export const CoverImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`

export const AvatarAndProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);

  span {
    font-size: 0.875rem;
    color: ${props => props.theme["gray-400"]};
    line-height: 1.6;
  }

  strong {
    margin-top: 1rem;
    color: ${props => props.theme["gray-100"]};
  }
`