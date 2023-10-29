import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;
  min-height: 150vh;
  padding: 2rem 10rem;
 

  .userPaymentAndDeliveryInfos {
    font-weight: bold;
    width: 40rem;
    height: 36.9375rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2.5rem;
    background: ${(props) => props.theme['button-text']};
    border-radius: 20px;

    .formTitle {
      
      width: 35rem;
      height: 2.75rem;
      gap: 0.5rem;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      color: ${(props) => props.theme['button-background']};

      .moneyIcon {
        width: 1.875rem;
        height: 2.75rem;
        
      }

      .mapPinIcon {
        width: 1.875rem;
        height: 2.75rem;
        
      }
      .adressPaymentTitle {
        h1 {
          font-family: 'Roboto';
          font-weight: 400;
          line-height: 20.8px;
          font-size: 1rem;
          
        }
      }
    }
    form {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: 1;

      gap: 1rem;

      input {
        height: 2.625rem;
        padding: 0.75rem;
        background: ${(props) => props.theme['-base-input']};
        border: 1px solid ${(props) => props.theme['-base-button']};
        color: ${(props) => props.theme['-base-label']};

        &:active {
          border: 1px solid ${(props) => props.theme['-yellow-dark']};
        }
        &:valid {
          color: ${(props) => props.theme['-base-text']};
        }
      }

      .paymentMethods {
        width: 35rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }

      .cep {
        width: 12.5rem;
      }
      .rua {
        width: 35rem;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
      }
      .numero {
        width: 12.5rem;
      }
      .complementoEOpcional {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0;

        .complemento {
          position: absolute;
          width: 21.75rem;
          
        }
        i {
          position: relative;
          margin-left: 18.125rem;
          background: transparent;

          font-family: 'Roboto';
          font-weight: 400;
          line-height: 15.6px;
          font-size: 0.75rem;
       
        }
      }

      .bairro {
        width: 12.5rem;
      }
      .cidade {
        width: 17.25rem;
      }
      .uf {
        width: 3.75rem;
      }
    }
  }

  .shoppingDetails {
    display: flex;
    flex-direction: column;

    gap: 0.75rem;
  }
  .shoppingResume {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20rem;
    flex: 1;
    border-radius: 20px;
    gap: 1.5rem;
    padding: 2.35rem;
    background: ${(props) => props.theme['button-text']};
    
  }

  .shoppingResumeItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
 

  .product-image {
    max-width: 100px; /* Ajuste o valor conforme necessário */
    max-height: 100px; /* Ajuste o valor conforme necessário */
  }

  .item-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;


  .description-and-price {
     
      flex: 1;
      display: flex;
      flex-direction: column;
    }


    .item-description {
      width: 10rem;
      font-weight: bold;
      font-size: 1rem;
      color: ${(props) => props.theme['button-background']};
     
    }

    .item-price {
      display: flex;
      align-items: flex-start;
      font-size: 1rem;
      
      color: ${(props) => props.theme['button-background']};
    }

  
  }
  button {
      display: flex;
      align-items: flex-end;
      background: transparent;
      border: none;
      cursor: pointer;
   

      &:hover {
      color: ${(props) => props.theme['button-background']};
      }
    }

    }
    
    .addition {
          width: 20rem;
          height: 5.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          
         

          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 18rem;
            

            font-family: Roboto;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 18px;

            color: ${(props) => props.theme['button-background']};
            span {
              font-size: 1rem;
              line-height: 20.8px;
            }
          
          }

          h1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 18rem;
            

            font-family: Roboto;
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 2px;
            color: ${(props) => props.theme['button-background']};

          }

          
      }

      .formValidation {
            appearance: none;
            border: none;
            outline: none;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 15rem;
          height: 2.875rem;
          border-radius: 6px;
          padding: 0.5rem 0.75rem;
          gap: 0.25rem;

          background: ${(props) => props.theme['element-background']};
          color: ${(props) => props.theme['button-background']};

          font-weight: 700;
          line-height: 22.4x;
          font-size: 0.875rem;
          transition: 0.2s;
         

          &:hover {
            background: ${(props) => props.theme['button-background']};
            color: ${(props) => props.theme['element-background']};
          }
        }
`
