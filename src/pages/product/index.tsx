import { useState } from 'react'
import { ProductContainer } from './styles'
import Star from '../../components/star/index.tsx'
import { useProducts } from '../../context/productContext'
import { useParams } from 'react-router-dom';

const items: number[] = [...(new Array(5).keys() as any)]

export function Product() {
  const { products, addToCart } = useProducts()
  const [activeIndex, setActiveIndex] = useState<number>()
  const {id} = useParams()
  const index = id ? parseInt(id) - 1 : -1;
  


  const onclickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index))
  }
  return (
    <ProductContainer>
      <div className="imageProduct">
        <img src={products[index].image} alt={products[index].name} />
      </div>
      <div className="descriptionProduct">
        <h1>
         {products[index].description}
        </h1>
          <div className="starContainer">
          {items.map((index) => (
            <Star
              onClick={() => onclickStar(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex!}
            />
          ))}
        </div>
        <h3>{'$ ' + products[index].price}</h3>
        <h4>Features</h4>
        <ul>
          <li>
            <b>INDICATION:</b> <br /> {products[index].indication}
          </li>
          <li>
            <b>ACTION:</b> <br /> {products[index].action}
          </li>
          <li>
            <b>ACTIVE INGREDIENT:</b>
            <br /> {products[index].activeIngredients}
          </li>
          <li>
            <b>BENEFITS:</b> <br />
            {products[index].benefits}
          </li>
          <li>
            <b>COMPOSITION:</b> <br /> {products[index].composition}
          </li>
        </ul>
        <div className="buttonContainer">
          <button onClick={() => addToCart(products[index])}> Add to Cart</button>
          <button> Buy Now</button>
        </div>
      </div>
    </ProductContainer>
  )
}
