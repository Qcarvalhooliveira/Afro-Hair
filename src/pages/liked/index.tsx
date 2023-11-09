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
  import axios from 'axios';
  import { useEffect } from 'react'

  
  export function Liked() {
   
  const { translation } = useLanguage()
  const { products, addToCart, likedProducts: likedProductsFromContext, setLikedProducts, getLikedProductsFromContext, removeFromLiked } = useProducts();

  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    const authToken = localStorage.getItem('authToken');

    if(userId && authToken) {
      const fetchLikedProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:3333/likes/${userId}`, {
            headers: {
              'Authorization': `Bearer ${authToken}`,
            },
          });

          const likedProductsId = response.data.likesTables.map((likedProduct:{ productLiked: number }) => likedProduct.productLiked ) 
        
          const likedProductFromContet = getLikedProductsFromContext(likedProductsId)
       


          setLikedProducts(likedProductFromContet)
        } catch (error) {
          console.error('Error fetching liked products', error);
        }
      };

      fetchLikedProducts();
    
    }
  }, [getLikedProductsFromContext, setLikedProducts])


  console.log('Products:', products);
  console.log('Liked Products from Context:', likedProductsFromContext);
    
    return (
      <LikedContainer>
        <div className="Title">
          <h1>{translation.header.liked}</h1>
        </div>
        <div className="Products">
          {likedProductsFromContext.map((product, index) => (
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
  