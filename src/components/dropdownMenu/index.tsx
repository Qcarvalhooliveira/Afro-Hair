// Dropdown.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownContainer, MenuItem } from './styles.tsx';

interface DropdownMenuProps {
  isOpen: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/categorie/${category}`);
  };

  if (!isOpen) return null;

  return (
    <DropdownContainer>
      <MenuItem onClick={() => handleCategoryClick('Conditioner')}>Conditioner</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Leave-In')}>Leave-In Conditioner</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Kit')}>Kit</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Treatment')}>Treatment Cream</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Shampoo')}>Shampoo</MenuItem>
    </DropdownContainer>
  );
};