import React, { useState } from 'react';
import {
  SvgEdit,
  TextSpan
} from './DiaryPage.styled';
import sprite from '../../assets/images/icons/icons.svg';

import EditDiaryModal from '../../components/EditDiaryModal/EditDiaryModal';

const EditBtn = (type) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [colorEdit, setColorEdit] = useState('#B6B6B6');

  // --- Блок керування hover-ом і focus-ом 
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsEditing(true);
    setColorEdit(isEditing ? 'red' : '#B6B6B6');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsEditing(false);
    setColorEdit(isEditing ? 'red' : '#B6B6B6');
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsEditing(true);
    setColorEdit(isEditing ? 'red' : '#B6B6B6');
    console.log(isFocused);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsEditing(false);
    setColorEdit(isEditing ? 'red' : '#B6B6B6');
    console.log(isHovered);
  };
  // ---------
  
  const handleClick = () => {
    setIsFocused(false);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex="0"
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      <SvgEdit style={{ stroke: colorEdit }}>
        <use href={sprite + '#icon-edit-2'}></use>
      </SvgEdit>
      <TextSpan style={{ color: colorEdit }}> Edit</TextSpan>
      {isModalOpen && <EditDiaryModal onClose={closeModal} type={type.type} product={type.product}/>}
    </div>
  );
};


export default EditBtn;