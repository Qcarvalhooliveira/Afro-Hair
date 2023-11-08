import {
  NewArrivalsContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductDescription,
  ProductPrice,
} from './styles'
import { useProducts } from '../../context/productContext'
import { Handbag } from 'phosphor-react'
import { useLanguage } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'

export function NewArrivals() {
  const { translation } = useLanguage()
  const { products, addToCart } = useProducts()

  const recentProducts = products.slice(-6)

  return (
    <NewArrivalsContainer>
      <div className="Title">
        <h1>{translation.homePage.newArrivals}</h1>
      </div>
      <div className="Products">
        {recentProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
            <ProductImage>
              <img src={product.image} alt="Product" />
            </ProductImage>
            </Link>
            <ProductInfo>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>€{product.price}</ProductPrice>
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
    </NewArrivalsContainer>
  )
}
