// src/components/LoginPortal/styles.js
import styled from 'styled-components'

export const LoginPortalContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 15rem;
  color: ${(props) => props.theme['button-background']};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 100;
  width: 200px;
  padding: 1rem;
  background-color: ${(props) => props.theme['button-text']};
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: auto;
  margin-top: 50px;

  h2 {
    margin-bottom: 10px;
    color: ${(props) => props.theme['button-background']};
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 4px;
      background: ${(props) => props.theme['button-background']};
      color: ${(props) => props.theme['button-text']};      
      cursor: pointer;

      &:hover {
        
        background: ${(props) => props.theme['element-background']};
      }
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
      color: ${(props) => props.theme['button-background']};
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
      
      &:hover {
        
        color: ${(props) => props.theme['element-background']};
      }
    }
  }
`
