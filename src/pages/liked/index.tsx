import {
    LikedContainer,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductDescription,
    ProductPrice,
  } from './styles'
  import { useProducts } from '../../context/productContext'
  import { Handbag } from 'phosphor-react'
  import { useLanguage } from '../../context/LanguageContext'
  
  export function Liked() {
   
  const { translation } = useLanguage()
  const { products, addToCart } = useProducts()

  const recentProducts = products.slice(-6)


    
    return (
      <LikedContainer>
        <div className="Title">
          <h1>{translation.header.liked}</h1>
        </div>
        <div className="Products">
          {recentProducts.map((product, index) => (
          <ProductCard key={index}>
              <ProductImage>
                <img src={product.image} alt="Product" />
              </ProductImage>
              <ProductInfo>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <button onClick={() => addToCart(product)}>
                  Add to cart{' '}
                  <span className="icon">
                    <Handbag size={18} />
                  </span>
                </button>
              </ProductInfo>
            </ProductCard>
          ))}
        </div>
      </LikedContainer>
    )
  }
  