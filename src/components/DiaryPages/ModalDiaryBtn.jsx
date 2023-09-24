import React, { useState } from 'react';
import {
  ButtonStyle,
  TextIndexSpan
} from './DiaryPage.styled';


import RecordDiaryModal from '../RecordDiaryModal/RecordDiaryModal';

const ModalDiaryBtn = (mob) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

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
    <>
      <ButtonStyle onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        {/* <TextIndexSpan style={ssds()}>+ Record your meal</TextIndexSpan> */}
        <TextIndexSpan style={isHovered || isFocused ? { fontSize: '18px' } : { fontSize: '14px' }}>
          + Record your meal
        </TextIndexSpan>
      </ButtonStyle>

      <RecordDiaryModal isOpen={isModalOpen} onClose={closeModal} typeName={mob.nameType} />
    </>
  );
};

export default ModalDiaryBtn;