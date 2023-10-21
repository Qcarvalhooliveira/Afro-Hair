import styled from 'styled-components';

export const CategorieContainer = styled.div`

  display: flex;
  min-height: 150vh;
  padding: 2rem 10rem;
  background: ${(props) => props.theme['body-background']};


  .Products {
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 20px;

    Title {
      margin-top: 20px;
      color: ${(props) => props.theme['button-background']};
    }
  };
    button {
      display: flex;
      width: 120px;
      height: 30px; 
      font-size: 16px;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      border-radius: 20px;
      color: ${(props) => props.theme['button-text']};
      background: ${(props) => props.theme['button-background']};
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: ${(props) => props.theme['button-text']};
        color: ${(props) => props.theme['button-background']};
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }
  };
`;
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductImage = styled.img`
  margin-top: 20px;
  max-width: 50%; 
  max-height: auto;
  
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const ProductDescription = styled.p`
  margin-top: 10px;
`;

export const ProductPrice = styled.span`
  margin-top: 10px;
`;

