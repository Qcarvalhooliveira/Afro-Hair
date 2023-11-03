import { useState } from 'react'
import { ProductContainer } from './styles'
import Star from '../../components/star/index.tsx'
import { useProducts } from '../../context/productContext'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { Heart } from 'phosphor-react';
import { useLikedProducts } from '../../context/likedContext';


const items: number[] = [...(new Array(5).keys() as any)]

export function Product() {
  const { products, addToCart } = useProducts()
  const [activeIndex, setActiveIndex] = useState<number>()
  const { id } = useParams()
  const index = id ? parseInt(id) - 1 : -1
  const navigate = useNavigate()
  const { likedProducts, setLikedProducts } = useLikedProducts();
  const [isLiked, setIsLiked] = useState(
    likedProducts.some((likedProduct) => likedProduct.id === products[index].id)
  );

  const onclickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index))
  }

  const { translation } = useLanguage()

  const handleShoppingClick = () => {
    navigate('/')
  }

  const handleClickHeart = () => {
    if (index >= 0 && index < products.length) {
      const product = products[index];

      if (isLiked) {  
        setLikedProducts(likedProducts.filter((likedProduct) => likedProduct.id !== product.id));
      } else {
        setLikedProducts([...likedProducts, product]);
      }

      setIsLiked(!isLiked); 
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
    color={likedProducts.some((likedProduct) => likedProduct.id === products[index].id) ? "red" : "black"}
    weight={likedProducts.some((likedProduct) => likedProduct.id === products[index].id) ? "fill" : "thin"}
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
