import { ProductCircleContainer } from './styles'
import { Link } from 'react-router-dom'

interface ProductCircleProps {
  productImage: string
  altText: string
  productIndex: number
}

export const ProductCircle: React.FC<ProductCircleProps> = ({
  productImage,
  altText,
  productIndex,
}) => {
  return (
    <ProductCircleContainer>
      <Link to={`/product/${productIndex}`}>
      <button className="highligthImgContainer">
        <img src={productImage} alt={altText} />
      </button>
      </Link>
    </ProductCircleContainer>
  )
}
