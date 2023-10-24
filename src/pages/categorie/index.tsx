import { CategorieContainer, ProductCard, ProductImage, ProductInfo, ProductDescription, ProductPrice } from './styles';
import { useLocation } from 'react-router-dom'; 
import { useProducts } from '../../context/productContext';
import { Handbag } from 'phosphor-react';

export function Categorie() {
  const {products, addToCart} = useProducts();
  const location = useLocation();

  const categoryName = location.pathname.split('/').slice(-1)[0];


  const filteredProducts = products.filter(product => product.category[0] === categoryName);

  return (
    <CategorieContainer>
      <div className="Title">
        <h1>{categoryName}</h1>
      </div>
      <div className="Products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage><img src={product.image} alt="Product" /></ProductImage> 
            <ProductInfo>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price}</ProductPrice>
              <button onClick={() => addToCart(product)}>
                Add to cart <span className="icon"><Handbag size={18}/></span>
              </button>
            </ProductInfo>
          </ProductCard>
        ))}
      </div>
    </CategorieContainer>
  );
}