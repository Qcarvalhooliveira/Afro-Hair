import { styled } from 'styled-components'

export const DropdownContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 10rem;
  background: ${(props) => props.theme['button-background']};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 100;
  width: 200px;
  padding: 1rem;
`

export const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme['button-text']};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme['button-text']};
    color: ${(props) => props.theme['button-background']};
  }
`
