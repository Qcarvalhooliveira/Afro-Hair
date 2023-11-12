import { useState, useEffect } from 'react'
import { ProductContainer } from './styles'
import Star from '../../components/star/index.tsx'
import { LikedProduct, useProducts } from '../../context/productContext'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { Heart } from 'phosphor-react';

import axios from 'axios'


const items: number[] = [...(new Array(5).keys() as any)]

export function Product() {
  const { products, addToCart, likedProducts, setLikedProducts } = useProducts()
  const [activeIndex, setActiveIndex] = useState<number>()
  const { id } = useParams()
  const index = id ? parseInt(id) - 1 : -1
  const navigate = useNavigate()
 
  
  useEffect(() => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index))
  }, [index])
   

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
      
        const likedProductIds = likedProducts.map((likedProduct) => likedProduct.id)
        
      console.log('Liked Products:', likedProducts);
      console.log('Product to Update:', product);

      const productLiked = String(product.id);
       
        if (likedProductIds.includes(product.id)) {  
          
          console.log('Removing Like...');
        await axios.delete(`http://localhost:3333/likes/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          data: {
            productLiked
          }
        });
        } else {
          console.log('Adding Like...');
         await axios.post(`http://localhost:3333/likes/${userId}`,{ productLiked: String(product.id)}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
         })
        }
        // @ts-ignore
        setLikedProducts((prevLikedProducts) => {
          if (likedProductIds.includes(product.id)) {
            console.log('Removing Like from State...');
            return prevLikedProducts.filter((likedProduct: LikedProduct) => likedProduct.id !== product.id) as LikedProduct[];
          } else {
            console.log('Adding Like to State...');
            return [...prevLikedProducts, product];
          }
        });
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
    color={likedProducts.some((likedProduct) => likedProduct.id === products[index]?.id) ? "red" : "black"}
    weight={likedProducts.some((likedProduct) => likedProduct.id === products[index]?.id) ? "fill" : "thin"}
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
