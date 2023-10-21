import { MapPinLine } from 'phosphor-react'
import { CheckoutContainer } from './styles'
import { Counter } from '../../components/counter'
import shampoo from '../../../Imagens/Shampoo/coco.png'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="userPaymentAndDeliveryInfos">
        <p>Complete o seu pedido</p>
        <div className="userInfo">
          <div className="formTitle">
            <span className="mapPinIcon">
              <MapPinLine size={22} />
            </span>
            <span className="adressPaymentTitle">
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </div>
          <form action="">
            <input
              className="cep"
              type="number"
              name="CEP"
              placeholder="CEP"
              required
              minLength={1}
              maxLength={99999999}
              title="Por favor escreva um CEP válido"
              //  value={userInfo.cep}
              // onChange={(e) =>
              //  setUserInfo({ ...userInfo, cep: e.target.value })
              // }
            />
            <input
              className="rua"
              type="text"
              name="Rua"
              placeholder="Rua"
              minLength={1}
              maxLength={300}
              title="Por favor escreva uma rua válida"
              required
              //   value={userInfo.rua}
              //  onChange={(e) =>
              //    setUserInfo({ ...userInfo, rua: e.target.value })
              //  }
            />
            <span>
              <input
                className="numero"
                type="number"
                name="Numero"
                placeholder="Numero"
                required
                min={1}
                max={999}
                title="Por favor escreva um numero válido"
                //   value={userInfo.numero}
                //   onChange={(e) =>
                //      setUserInfo({ ...userInfo, numero: e.target.value })
                //   }
              />
              <div className="complementoEOpcional">
                <input
                  className="complemento"
                  type="text"
                  name="Complemento"
                  placeholder="Complemento"
                  //    value={userInfo.complemento}
                  //    onChange={(e) =>
                  //      setUserInfo({ ...userInfo, complemento: e.target.value })
                  //    }
                />
              </div>
            </span>
            <span>
              <input
                className="bairro"
                type="text"
                name="Bairro"
                placeholder="Bairro"
                required
                minLength={2}
                maxLength={100}
                title="Por favor escreva um bairro válido"
                //  value={userInfo.bairro}
                //   onChange={(e) =>
                //     setUserInfo({ ...userInfo, bairro: e.target.value })
                //   }
              />
              <input
                className="cidade"
                type="text"
                name="Cidade"
                placeholder="Cidade"
                required
                minLength={2}
                maxLength={100}
                title="Por favor escreva uma cidade válida"
                //    value={userInfo.cidade}
                //    onChange={(e) =>
                //      setUserInfo({ ...userInfo, cidade: e.target.value })
                //    }
              />
              <input
                className="uf"
                type="text"
                name="UF"
                placeholder="UF"
                required
                minLength={2}
                maxLength={2}
                title="Informe um UF válido com duas letras"
                //    value={userInfo.uf}
                //    onChange={(e) =>
                //      setUserInfo({ ...userInfo, uf: e.target.value })
                //    }
              />
            </span>
          </form>
        </div>
      </div>
      <div className="shoppingDetails">
        <p>Products Selected</p>
        <div className="shoppingResume">
          <div className="shoppingResumeItem">
            <img src={shampoo} alt="shampoo" />
            <Counter isInCheckout={true} />
          </div>

          <div className="addition">
            <p>
              Total itens
              <span>€ 7,00</span>
            </p>
          </div>

          <button type="submit" className="formValidation">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </CheckoutContainer>
  )
}
