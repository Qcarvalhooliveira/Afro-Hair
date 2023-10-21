import { CategorieContainer, ProductCard, ProductImage, ProductInfo, ProductDescription, ProductPrice } from './styles';
import { useLocation } from 'react-router-dom'; 
import { ProductsContext } from '../../context/productContext';
import { useContext } from 'react';
import { Handbag } from 'phosphor-react';

export function Categorie() {
  const products = useContext(ProductsContext);
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
            <ProductImage src={product.image} alt="Product" />
            <ProductInfo>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price}</ProductPrice>
              <button onClick={() => products.addToCart(product)}>
                Add to cart <span className="icon"><Handbag size={18}/></span>
              </button>
            </ProductInfo>
          </ProductCard>
        ))}
      </div>
    </CategorieContainer>
  );
}