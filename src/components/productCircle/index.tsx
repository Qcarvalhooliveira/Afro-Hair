import { ProductCircleContainer } from './styles'

interface ProductCircleProps {
  productImage: string
  altText: string
}

export const ProductCircle: React.FC<ProductCircleProps> = ({
  productImage,
  altText,
}) => {
  return (
    <ProductCircleContainer>
      <button className="highligthImgContainer">
        <img src={productImage} alt={altText} />
      </button>
    </ProductCircleContainer>
  )
}
