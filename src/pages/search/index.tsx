import {
  SearchContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductDescription,
  ProductPrice,
} from './styles'
import { useLocation } from 'react-router-dom'
import { useProducts } from '../../context/productContext'
import { Handbag } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function Search() {
  const { products, addToCart } = useProducts()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('query')
    setSearchQuery(query || '')
  }, [location.search])

  const filteredProducts = products.filter((product) => {
    const searchQueryLower = searchQuery.toLowerCase()
    const descriptionLower = product.description.toLowerCase()

    const matchesDescription = descriptionLower.includes(searchQueryLower)

    if (matchesDescription) {
      return true
    }

    const matchesCategory = product.category.some((category) =>
      category.toLowerCase().includes(searchQueryLower),
    )

    return matchesCategory
  })

  return (
    <SearchContainer>
      <div className="Title">
        <h1>{searchQuery}</h1>
      </div>
      <div className="Products">
        {filteredProducts.map((product) => (
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
    </SearchContainer>
  )
}
