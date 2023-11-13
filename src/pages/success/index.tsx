import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Motoboy from '../../../Imagens/motoboy.svg'
import { IconStyle, StyledSuccess } from './styles'
import { useLocation } from 'react-router-dom'

export function Success() {
  const location = useLocation()
  const { userInfo, totalPaid } = location.state

  return (
    <StyledSuccess>
      <div className="successTitle">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é so aguardar que logo o pedido chegara até você</p>
      </div>
      <div className="recapImgContainer">
        <div className="deliveryRecapBorder">
          <div className="deliveryRecap">
            <div className="deliveryRecapInfo">
              <IconStyle className="mapPin">
                <MapPin />
              </IconStyle>
              <p>
                Entrega em rua <br />
                <strong>
                {userInfo.numero}, {userInfo.rua}
                </strong>
                <br />
                {userInfo.bairro} - {userInfo.cidade}
              </p>
            </div>
            <div className="deliveryRecapInfo">
              <IconStyle className="timer">
                <Timer />
              </IconStyle>
              <p>
                Previsão de entrega
                <strong>
                  <br />
                  7 - 15 dias
                </strong>
              </p>
            </div>
            <div className="deliveryRecapInfo">
              <IconStyle className="dollar">
                <CurrencyDollar />
              </IconStyle>
              <span>
                <p>
                  Valor pago
                  <br />
                  <strong>{totalPaid}</strong>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="successImg">
          <img src={Motoboy} alt="DeliveryBoy on a moto" />
        </div>
      </div>
    </StyledSuccess>
  )
}