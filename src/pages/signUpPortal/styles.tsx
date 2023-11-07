import styled from 'styled-components'

export const SignUpPortalContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 150vh;
  justify-content: center;
  padding: 2rem 10rem;


  .signUp {
  color: ${(props) => props.theme['button-background']};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: ${(props) => props.theme['button-text']};
  border: 1px solid #ccc;
  padding: 50px;
  border-radius: 8px;
  width: 500px;
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
  .error-message {
      color: red;
      font-weight: bolder;
    }
}
`
