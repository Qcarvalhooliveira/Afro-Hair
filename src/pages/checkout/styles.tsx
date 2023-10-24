import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;
  min-height: 150vh;
  padding: 2rem 10rem;

  .userPaymentAndDeliveryInfos {
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

      .moneyIcon {
        width: 1.875rem;
        height: 2.75rem;
        color: ${(props) => props.theme['-purple']};
      }

      .mapPinIcon {
        width: 1.875rem;
        height: 2.75rem;
        color: ${(props) => props.theme['-yellow-dark']};
      }
      .adressPaymentTitle {
        h1 {
          font-family: 'Roboto';
          font-weight: 400;
          line-height: 20.8px;
          font-size: 1rem;
          color: ${(props) => props.theme['-base-subtitle']};
        }

        p {
          font-family: 'Roboto';
          font-weight: 400;
          line-height: 18.2px;
          font-size: 0.875rem;
          color: ${(props) => props.theme['-base-text']};
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
          background: ${(props) => props.theme['-base-input']};
          border: 1px solid ${(props) => props.theme['-base-button']};
        }
        i {
          position: relative;
          margin-left: 18.125rem;
          background: transparent;

          font-family: 'Roboto';
          font-weight: 400;
          line-height: 15.6px;
          font-size: 0.75rem;
          color: ${(props) => props.theme['-base-label']};
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
    .shoppingResume {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 28rem;
      flex: 1;
      border-radius: 6px 44px 6px 44px;
      gap: 1.5rem;
      padding: 2.5rem;

      background: ${(props) => props.theme['-base-card']};

      .shoppingResumeItem {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 8rem;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .item-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .item-description {
          width: 5rem;
        }
        .item-price {
          width: 4rem;
        }

        .addition {
          width: 23rem;
          height: 5.75rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.75rem;

          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 7rem;

            font-family: Roboto;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 18px;

            color: ${(props) => props.theme['body-background']};
            span {
              font-size: 1rem;
              line-height: 20.8px;
            }
          }
        }
        .formValidation {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 23rem;
          height: 2.875rem;
          border-radius: 6px;
          padding: 0.5rem 0.75rem;
          gap: 0.25rem;

          background: ${(props) => props.theme['-yellow']};
          color: ${(props) => props.theme['-white']};

          font-weight: 700;
          line-height: 22.4x;
          font-size: 0.875rem;

          &:hover {
            background: ${(props) => props.theme.background};
          }
        }
      }
    }
  }
`
