// likedContext.js
import { createContext, FC, useState, ReactNode, useContext } from 'react'

export interface LikedProduct {
  price: ReactNode;
  description: ReactNode;
  image: string | undefined;
  id: number;

}

interface LikedContextType {
    likedProducts: LikedProduct[];
    setLikedProducts: React.Dispatch<React.SetStateAction<LikedProduct[]>>;
    removeFromLiked: (productId: number) => void;
}

export const LikedContext = createContext<LikedContextType | undefined>(
    undefined,
    )

export const useLikedProducts = () => {
  const context = useContext(LikedContext);
  if (context === undefined) {
    throw new Error('useLikedProducts must be used within a LikedProvider');
  }
  return context;
};

export const LikedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState<LikedProduct[]>([]);
  const removeFromLiked = (productId: number) => {
    setLikedProducts((prevLikedProducts) => prevLikedProducts.filter((product) => product.id !== productId));
  };

  return (
    <LikedContext.Provider value={{ likedProducts, setLikedProducts, removeFromLiked }}>
      {children}
    </LikedContext.Provider>
  );
};
