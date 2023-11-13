import styled from 'styled-components'
export const IconStyle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  padding: 0.5rem;
  color: ${(props) => props.theme['-background']};
`

export const StyledSuccess = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 10rem;
  gap: 4.125rem;

  .successTitle {
    h1 {
      width: 22.0625rem;
      height: 2.625rem;
      text-align: left;

      color: ${(props) => props.theme['-yellow-dark']};
      font-family: 'baloo 2';
      font-weight: 800;
      line-height: 41.6px;
      font-size: 2rem;
    }

    p {
      width: 34.5rem;
      height: 1.625rem;
      text-align: left;

      color: ${(props) => props.theme['-base-subtitle']};
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 26px;
      font-size: 1.25rem;
    }
  }
  .recapImgContainer {
    display: flex;
    text-align: center;
    justify-content: space-between;

    .deliveryRecapBorder {
      position: relative;
      width: 33rem;
      height: 17rem;

      background: linear-gradient(to right,  #8d56e5, ${(props) => props.theme['element-background']});
      border-radius: 6px 36px 6px 36px;

      .deliveryRecap {
        width: 32.875rem;
        height: 16.875rem;
        position: absolute;

        border-radius: 6px 36px 6px 36px;
        top: 1px;
        left: 1px;
        background-color: ${(props) => props.theme['-background']};

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        gap: 2rem;
        padding: 2.5rem;

        .deliveryRecapInfo {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          height: 2.625rem;
          gap: 0.75rem;

          .mapPin {
            background: ${(props) => props.theme['-purple']};
          }

          .timer {
            background: ${(props) => props.theme['-yellow']};
          }

          .dollar {
            background: ${(props) => props.theme['-yellow-dark']};
          }

          p {
            text-align: left;
            color: ${(props) => props.theme['-base-text']};

            font-family: 'Roboto';
            font-weight: 400;
            line-height: 20.8px;
            font-size: 1rem;

            strong {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`