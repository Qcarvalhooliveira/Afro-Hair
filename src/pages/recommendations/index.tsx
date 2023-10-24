import {
    RecommendationsContainer,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductDescription,
    ProductPrice,
  } from './styles'
  import { useProducts } from '../../context/productContext'
  import { Handbag } from 'phosphor-react'
import { useLanguage } from '../../context/LanguageContext'
  
  export function Recommendations() {

    const { translation } = useLanguage()
    const { products, addToCart } = useProducts()
  
    const recommendatedProducts = products.filter((product) => product.category.includes('Best Seller'))
  
    return (
      <RecommendationsContainer>
        <div className="Title">
          <h1>{translation.homePage.recommendations}</h1>
        </div>
        <div className="Products">
          {recommendatedProducts.map((product) => (
            <ProductCard key={product.id}>
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
      </RecommendationsContainer>
    )
  }
  