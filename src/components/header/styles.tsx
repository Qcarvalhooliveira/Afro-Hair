import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 2rem 10rem;
  background: linear-gradient(
    to bottom,
    #da9fc3 0%,
    ${(props) => props.theme['element-background']}
  );
  border-radius: 0 0 20px 20px; /* Ajuste o valor conforme necessário para o arredondamento desejado */

  .menu {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['button-text']};
    background: ${(props) => props.theme['button-background']};

    cursor: pointer;

    width: 2.5rem;
    height: 2rem;

    border-radius: 6px;
    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme['button-text']};
      color: ${(props) => props.theme['button-background']};
    }
  }

  .Home {
    display: flex;
    border: none;
    color: ${(props) => props.theme['button-background']};
    background: transparent;
    cursor: pointer;
    transition: 0.3s;
  }

  &:hover {
    color: ${(props) => props.theme['button-text']};
  }

  img {
    border: none;
    border-radius: 20%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme['button-background']};
      background: transparent;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: ${(props) => props.theme['button-text']};
      }
    }
    .liked-count {
      position: absolute;
      top: 70px;
      right: 195px;
      color: ${(props) => props.theme['button-text']};
      background: ${(props) => props.theme['button-background']};
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    .shopping-count {
      position: absolute;
      top: 70px;
      right: 155px;
      color: ${(props) => props.theme['button-text']};
      background: ${(props) => props.theme['button-background']};
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }

  form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -16px;

    input {
      position: relative;
      width: 30rem;
      height: 2rem;

      padding: 0.5rem 2rem 0.5rem 0.5rem;
      border: 1px solid ${(props) => props.theme['button-background']};
      border-radius: 6px;
      outline: none;

      &:focus {
        border: 1px solid ${(props) => props.theme['button-text']};
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      color: ${(props) => props.theme['button-background']};
    }
  }
`
