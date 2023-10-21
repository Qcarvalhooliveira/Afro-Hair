import { styled } from 'styled-components'

export const ProductCircleContainer = styled.div`
  .highligthImgContainer {
    width: 15rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme['button-background']};
    border-radius: 50%;
    overflow: hidden;
    margin: 0 10px;
    background: ${(props) => props.theme.white};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border: 1px solid ${(props) => props.theme['button-text']};
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`
