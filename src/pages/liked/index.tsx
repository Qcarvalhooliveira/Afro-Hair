import {
    LikedContainer,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductDescription,
    ProductPrice,
  } from './styles'
  import { useProducts } from '../../context/productContext'
  import { Handbag, Trash } from 'phosphor-react'
  import { useLanguage } from '../../context/LanguageContext'
  import { useLikedProducts } from '../../context/likedContext'
  
  export function Liked() {
   
  const { translation } = useLanguage()
  const { products, addToCart } = useProducts()

  const { likedProducts, removeFromLiked } = useLikedProducts();




    
    return (
      <LikedContainer>
        <div className="Title">
          <h1>{translation.header.liked}</h1>
        </div>
        <div className="Products">
          {likedProducts.map((product, index) => (
          <ProductCard key={index}>
              <ProductImage>
                <img src={product.image} alt="Product" />
              </ProductImage>
              <ProductInfo>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <button onClick={() => addToCart(products[index])}>
                  Add to cart{' '}
                  <span className="icon">
                    <Handbag size={18} />
                  </span>
                </button>
                <button onClick={() => removeFromLiked(product.id)}>
                <Trash size={20} />
                </button>
              </ProductInfo>
            </ProductCard>
          ))}
        </div>
      </LikedContainer>
    )
  }
  