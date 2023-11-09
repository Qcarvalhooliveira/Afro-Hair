import { useState, useEffect } from 'react'
import { ProductContainer } from './styles'
import Star from '../../components/star/index.tsx'
import { useProducts } from '../../context/productContext'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { Heart } from 'phosphor-react';

import axios from 'axios'


const items: number[] = [...(new Array(5).keys() as any)]

export function Product() {
  const { products, addToCart } = useProducts()
  const [activeIndex, setActiveIndex] = useState<number>()
  const { id } = useParams()
  const index = id ? parseInt(id) - 1 : -1
  const navigate = useNavigate()
 
  const [isLiked, setIsLiked] = useState(false)
  useEffect(()=>{
    setIsLiked(products[index]?.isSelected || false)
    
  },[products, index])
   

  const onclickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index))
  }

  const { translation } = useLanguage()

  const handleShoppingClick = () => {
    navigate('/')
  }

  const handleClickHeart = async () => {
    if (index >= 0 && index < products.length) {
      const product = products[index];
      const userId = localStorage.getItem('userId');
      const authToken = localStorage.getItem('authToken');

      if (!userId || !authToken) {
        console.error('User ID or auth token not available.');
        return;
      }

      try {
        if (isLiked) {  
        await axios.delete(`http://localhost:3333/likes/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          data: {
            productLiked: product.id
          }
        });
        } else {
         await axios.post(`http://localhost:3333/likes/${userId}`,{ productLiked: String(product.id)}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
         })
        }
        setIsLiked(!isLiked); 
      } catch (error) {
        console.error('Error updating like', error);
      }    
    }
  }


  return (
    <ProductContainer>
      <div className="imageProduct">
        <img src={products[index].image} alt={products[index].name} />
      </div>
      <div className="descriptionProduct">
        <h1>{products[index].description}  
        <button className="heartContainer" onClick={handleClickHeart}>
  <Heart
    size={30}
    color={isLiked ? "red" : "black"}
    weight={isLiked ? "fill" : "thin"}
  />
</button> 
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
        <h3>{'€ ' + products[index].price}</h3>
        <h4>{translation.productpage.features}</h4>
        <ul>
          <li>
            <b>{translation.productpage.indication}</b> <br />{' '}
            {products[index].indication}
          </li>
          <li>
            <b>{translation.productpage.action}</b> <br />{' '}
            {products[index].action}
          </li>
          <li>
            <b>{translation.productpage.active}</b>
            <br /> {products[index].activeIngredients}
          </li>
          <li>
            <b>{translation.productpage.benefits}</b> <br />
            {products[index].benefits}
          </li>
          <li>
            <b>{translation.productpage.composition}</b> <br />{' '}
            {products[index].composition}
          </li>
        </ul>
        <div className="buttonContainer">
          <button onClick={() => addToCart(products[index])}>
            {translation.productpage.add}
          </button>
          <button onClick={handleShoppingClick}>
            {translation.productpage.shopping}</button>
        </div>
      </div>
    </ProductContainer>
  )
}
