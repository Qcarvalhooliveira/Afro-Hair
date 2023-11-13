import { MapPinLine, Trash } from 'phosphor-react'
import { CheckoutContainer } from './styles'
import { Counter } from '../../components/counter'
import { useLanguage } from '../../context/LanguageContext'
import { useProducts } from '../../context/productContext'
import {Paypal} from '../../components/paypal/paypal'


export function Checkout() {
  const { translation } = useLanguage()
  const { cart, removeItemFromCart, updateCartItemQuantity } = useProducts();
  

  const calculateTotalOfItens = () => {
    let total = 0
    for (const item of cart) {
      total += item.quantity
    }
    return total
  }

  const CalculateTotalPrice = () => {
    let total = 0
    for (const item of cart) {
      if (item.price !== undefined) {
        total += item.price * item.quantity
      }
    }
    return total
  }
  return (
    <CheckoutContainer>
      <div className="userPaymentAndDeliveryInfos">
        <p>{translation.checkout.order}</p>
        <div className="userInfo">
          <div className="formTitle">
            <span className="mapPinIcon">
              <MapPinLine size={22} />
            </span>
            <span className="adressPaymentTitle">
              <h1>{translation.checkout.delivery}</h1>
              <p>{translation.checkout.address}</p>
            </span>
          </div>
          <form action="">
            <input
              className="cep"
              type="number"
              name={translation.checkout.cep}
              placeholder={translation.checkout.cep1}
              required
              minLength={1}
              maxLength={99999999}
              title={translation.checkout.validCep}
              //  value={userInfo.cep}
              // onChange={(e) =>
              //  setUserInfo({ ...userInfo, cep: e.target.value })
              // }
            />
            <input
              className="rua"
              type="text"
              name={translation.checkout.street}
              placeholder={translation.checkout.street}
              minLength={1}
              maxLength={300}
              title={translation.checkout.validStreet}
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
                name={translation.checkout.number}
                placeholder={translation.checkout.number}
                required
                min={1}
                max={999}
                title={translation.checkout.validNumber}
                //   value={userInfo.numero}
                //   onChange={(e) =>
                //      setUserInfo({ ...userInfo, numero: e.target.value })
                //   }
              />
              <div className="complementoEOpcional">
                <input
                  className="complemento"
                  type="text"
                  name={translation.checkout.complement}
                  placeholder={translation.checkout.complement}
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
                name={translation.checkout.neighborhood}
                placeholder={translation.checkout.neighborhood}
                required
                minLength={2}
                maxLength={100}
                title={translation.checkout.validNeighborhood}
                //  value={userInfo.bairro}
                //   onChange={(e) =>
                //     setUserInfo({ ...userInfo, bairro: e.target.value })
                //   }
              />
              <input
                className="cidade"
                type="text"
                name={translation.checkout.city}
                placeholder={translation.checkout.city}
                required
                minLength={2}
                maxLength={100}
                title={translation.checkout.validCity}
                //    value={userInfo.cidade}
                //    onChange={(e) =>
                //      setUserInfo({ ...userInfo, cidade: e.target.value })
                //    }
              />
            </span>
          </form>
        </div>
      </div>
      <div className="shoppingDetails">
        <p>{translation.checkout.products}</p>
        <div className="shoppingResume">
          {cart.map((item) => (
            <div key={item.id} className="shoppingResumeItem">
              <img src={item.image} alt={item.name} className="product-image"/>
              <div className="item-details">
              <div className="description-and-price">
                <p className="item-description">{item.description}</p>
                <p className="item-price">Price: € {item.price}</p>
              </div>
                <span>
                  <Counter initialQuantity={item.quantity} onQuantityChange={(quantity) => updateCartItemQuantity(item.id, quantity)}/>
                </span>
                
              </div>
              <button onClick={() => removeItemFromCart(item.id)}>
                <Trash size={20} />
                </button>
            </div>
          ))}

          <div className="addition">
            <p>
              {translation.checkout.itens}
              <span>{calculateTotalOfItens()}</span>
              </p>
              <h1>
              {translation.checkout.total}
              <span>€ {CalculateTotalPrice()}</span>
              </h1>
          </div>

          
            <Paypal/>
          
        </div>
      </div>
    </CheckoutContainer>
  )
}
