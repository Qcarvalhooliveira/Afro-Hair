// Dropdown.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownContainer, MenuItem } from './styles.tsx';
import { useLanguage } from '../../context/LanguageContext.tsx';


interface DropdownMenuProps {
  isOpen: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/categorie/${category}`);
  };

  if (!isOpen) return null;

  const { translation } = useLanguage();

  return (
    <DropdownContainer>
      <MenuItem onClick={() => handleCategoryClick('Conditioner')}>{translation.dropdownMenu.conditioner}</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Leave-In')}>{translation.dropdownMenu.leaveIn}</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Kit')}>{translation.dropdownMenu.kit}</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Treatment')}>{translation.dropdownMenu.treatment}</MenuItem>
      <MenuItem onClick={() => handleCategoryClick('Shampoo')}>{translation.dropdownMenu.shampoo}</MenuItem>
    </DropdownContainer>
  );
};