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

export const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme["gray-600"]};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;

  /* a {
    display: block;
    background: transparent;
    color: ${props => props.theme["green-500"]};
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    transition: color 0.1s backgroun-color 0.1s;

    &:hover {
      background-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
    }
  } */
`