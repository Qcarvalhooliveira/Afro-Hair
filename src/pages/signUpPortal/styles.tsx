// src/components/LoginPortal/styles.js
import styled from 'styled-components'

export const SignUpPortalContainer = styled.div`

  color: ${(props) => props.theme['button-background']};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 1rem;
  min-height: 150vh;
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
      color: ${(props) => props.theme['element-background']};
      background: ${(props) => props.theme['button-background']};
      cursor: pointer;
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
    }
  }
`
