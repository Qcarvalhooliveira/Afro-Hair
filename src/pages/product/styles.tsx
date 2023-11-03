import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  padding: 6rem;
  column-count: 2;
  column-gap: 12rem;
  min-height: 150vh;
  background: ${(props) => props.theme['body-background']};

  .descriptionProduct {
    display: flex;
    flex-direction: column;

    gap: 2rem;
    color: ${(props) => props.theme['button-background']};


  .heartContainer {
    align-items: space-between;
    border: none;
    cursor: pointer;
    background: transparent;
      
      
    }
  }

  .descriptionProduct ul {
    list-style: none;
    line-height: 1.5;
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 10rem;
      padding: 0.6rem 1.2rem;
      background: ${(props) => props.theme['button-text']};
      color: ${(props) => props.theme['button-background']}; 
      font-weight: bold;
      border: none; 
      border-radius: 10px; 
      cursor: pointer; 
      transition: 0.3s;
      
    }
  }

  button:hover {
    background: ${(props) => props.theme['button-background']};
    color: ${(props) => props.theme['button-text']};
  }

  .starContainer {
    display: flex;
    
  }
`
