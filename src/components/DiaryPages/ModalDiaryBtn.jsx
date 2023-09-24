import React, { useState, useEffect } from 'react';
import {
  ButtonStyle,
  TextIndexSpan
} from './DiaryPage.styled';

import RecordDiaryModalB from "../../components/RecordDiaryModal/RecordDiaryModalB"
import RecordDiaryModalL from "../../components/RecordDiaryModal/RecordDiaryModalL"
import RecordDiaryModalD from "../../components/RecordDiaryModal/RecordDiaryModalD"
import RecordDiaryModalS from "../../components/RecordDiaryModal/RecordDiaryModalS"

const ModalDiaryBtn = (index) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRecordDiaryModal, setShowRecordDiaryModal] = useState(false);
  



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
    setShowRecordDiaryModal(!showRecordDiaryModal);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  
  
  useEffect(() => {
    if (RecordDiaryModalB || RecordDiaryModalL || RecordDiaryModalD || RecordDiaryModalS) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showRecordDiaryModal]);

  // const Ggg = <RecordDiaryModalB isOpen={isModalOpen} onClose={closeModal} />;
  // let Ggg;
  // if(index.data === "b") {Ggg = RecordDiaryModalB}
  // else if(index.data === "l") {Ggg = RecordDiaryModalL}
  // else if(index.data === "d") {Ggg = RecordDiaryModalD}
  // else if (index.data === "s") {Ggg = RecordDiaryModalS }
  
  // const modalOpen = () => {
  //   if (index.data === "b") return <RecordDiaryModalB isOpen={isModalOpen} onClose={closeModal} />
  //   else if (index.data === "l") return <RecordDiaryModalL isOpen={isModalOpen} onClose={closeModal} />
  //   else if (index.data === "d") return <RecordDiaryModalD isOpen={isModalOpen} onClose={closeModal} />
  //   else return <RecordDiaryModalS isOpen={isModalOpen} onClose={closeModal} />
  // }
  const modalOpen = (index) => {
    if (index === "b") {
      return RecordDiaryModalB
    } else if (index === "l") {
      return RecordDiaryModalL
    } else if (index === "d") {
      return RecordDiaryModalD
    } else {return RecordDiaryModalS}
  }

  // const openModalB = () => {
  //   return RecordDiaryModalB
  // }

  // const openModalL = () => {
  //   return RecordDiaryModalL
  // }
  // const openModalD = () => {
  //   return <RecordDiaryModalD isOpen={isModalOpen} onClose={closeModal}/>
  // }

  
  return (
    <>
      <ButtonStyle onClick={handleClick}
        // className={`record-meal-btn ${isHovered || isFocused ? 'scroll-active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <TextIndexSpan style={isHovered || isFocused ? { fontSize: '18px' } : { fontSize: '14px' }}>
          + Record your meal
        </TextIndexSpan>
      </ButtonStyle>
      {modalOpen(index.data)}

      {/* <RecordDiaryModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <RecordDiaryModalD isOpen={isModalOpen} onClose={closeModal} /> */}
      
      {/* <Ggg isOpen={isModalOpen} onClose={closeModal}/> */}
      {/* {index.data === 'b' && openModalB()}
      {index.data === 'l' && openModalL()}
      {index.data === 'd' && openModalD()} */}
      {/* {index.data === "b" && <RecordDiaryModalB isOpen={isModalOpen} onClose={closeModal} />}
      {index.data === "l" && <RecordDiaryModalL isOpen={isModalOpen} onClose={closeModal} />}
      {index.data === "d" && <RecordDiaryModalD isOpen={isModalOpen} onClose={closeModal} />}
      {index.data === "s" && <RecordDiaryModalS isOpen={isModalOpen} onClose={closeModal} />}       */}
        {/* <RecordDiaryModal />
      </RecordDiaryModal> */}
    </>
  );
};

export default ModalDiaryBtn;