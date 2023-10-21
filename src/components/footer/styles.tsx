import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 10rem;
  background: linear-gradient(
    to bottom,
    #da9fc3 0%,
    ${(props) => props.theme['element-background']}
  );
  border-radius: 20px 20px 0 0; 
`

export const Language = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.theme['button-background']};
  gap: 0.5rem;
  width: 5rem;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    height: 2rem;

    background: transparent;
    cursor: pointer;

    color: ${(props) => props.theme['button-background']};
    p {
      opacity: 0;
      transition:
        opacity 0.3s,
        transform 0.3s;
    }

    &:hover {
      p {
        opacity: 1;
        transform: translateX(10px);
      }
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`
export const Contact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['button-background']};

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    width: 15rem;
    div {
      display: flex;
      align-items: center;

      gap: 0.5rem;
      color: ${(props) => props.theme['button-background']};

      .phoneNumber {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      a {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        color: ${(props) => props.theme['button-background']};
        text-decoration: none;
      }

      a:hover {
        color: ${(props) => props.theme['button-text']};
        text-decoration: underline;
      }
    }
  }
`
export const AboutUs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['button-background']};

  p {
    width: 20rem;
    text-align: justify;
    color: ${(props) => props.theme['button-background']};
  }
`

export const Links = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['button-background']};

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['button-background']};
      background: transparent;
      cursor: pointer;

      p {
        opacity: 0;
        transition:
          opacity 0.3s,
          transform 0.3s;
      }

      &:hover {
        color: ${(props) => props.theme['button-text']};
        p {
          color: ${(props) => props.theme['button-background']};
          opacity: 1;
          transform: translateX(10px);
        }
      }

      a {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        color: ${(props) => props.theme['button-background']};
        text-decoration: none;
      }

      a:hover {
        color: ${(props) => props.theme['button-text']};
        text-decoration: underline;
      }
    }
  }
`
export const Mode = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['button-background']};

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;

      background: transparent;
      cursor: pointer;

      color: ${(props) => props.theme['button-background']};

      p {
        opacity: 0;
        transition:
          opacity 0.3s,
          transform 0.3s;
      }

      &:hover {
        color: ${(props) => props.theme['button-text']};
        p {
          color: ${(props) => props.theme['button-background']};
          opacity: 1;
          transform: translateX(10px);
        }
      }
    }
  }
`
