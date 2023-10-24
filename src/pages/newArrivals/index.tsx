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

export function NewArrivals() {
  const { products, addToCart } = useProducts()

  const recentProducts = products.slice(-6)

  return (
    <NewArrivalsContainer>
      <div className="Title">
        <h1>New Arrivals</h1>
      </div>
      <div className="Products">
        {recentProducts.map((product) => (
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
    </NewArrivalsContainer>
  )
}
