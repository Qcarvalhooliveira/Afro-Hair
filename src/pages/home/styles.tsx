import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  padding: 2rem 10rem;
  background: ${(props) => props.theme['body-background']};

  .keen-slider__slide img {
    max-width: 100%;
    max-height: 60%;
    object-fit: cover;
  }
`

export const HighlightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .highlightTitles {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;

    h2 {
      margin-bottom: 10px;
      color: ${(props) => props.theme['button-background']};
    }

    button {
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme['button-background']};
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: ${(props) => props.theme['button-text']};
      }
    }
  }

  .highlightImages {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`
