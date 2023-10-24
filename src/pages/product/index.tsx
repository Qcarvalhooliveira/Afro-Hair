import { useState } from 'react'
import { ProductContainer } from './styles'
import Star from '../../components/star/index.tsx'
import { useProducts } from '../../context/productContext'

const items: number[] = [...(new Array(5).keys() as any)]

export function Product() {
  const { products, addToCart } = useProducts()
  const [activeIndex, setActiveIndex] = useState<number>()

  const onclickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index))
  }
  return (
    <ProductContainer>
      <div className="imageProduct">
        <img src={products[5].image} alt={products[5].name} />
      </div>
      <div className="descriptionProduct">
        <h1>
          Novex – Mystic Black Après-shampoing – Santo Black Ponderoso – 300 ml
        </h1>{' '}
        //TODO : change name
        <div className="starContainer">
          {items.map((index) => (
            <Star
              onClick={() => onclickStar(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex!}
            />
          ))}
        </div>
        <h3>{'$ ' + products[5].price}</h3>
        <h4>Features</h4>
        <ul>
          <li>
            <b>INDICATION:</b> <br /> {products[5].indication}
          </li>
          <li>
            <b>ACTION:</b> <br /> {products[5].action}
          </li>
          <li>
            <b>ACTIVE INGREDIENT:</b>
            <br /> {products[5].activeIngredients}
          </li>
          <li>
            <b>BENEFITS:</b> <br />
            {products[5].benefits}
          </li>
          <li>
            <b>COMPOSITION:</b> <br /> {products[5].composition}
          </li>
        </ul>
        <div className="buttonContainer">
          <button onClick={() => addToCart(products[5])}> Add to Cart</button>
          <button> Buy Now</button>
        </div>
      </div>
    </ProductContainer>
  )
}
