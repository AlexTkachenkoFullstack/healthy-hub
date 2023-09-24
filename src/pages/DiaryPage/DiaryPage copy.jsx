import React from 'react';
import { useEffect, useState } from 'react';
// import React, {createContext, useContext, useState, useEffect} from 'react';
// import axios from 'axios'; 
import { Link } from 'react-router-dom';
import {
  SectionDiary,
  TitlePage,
  TitleDiv,
} from '../../components/DiaryPages/DiaryPage.styled';

// import { createGlobalStyle } from 'styled-components';

import GoBackPage from "../../components/DiaryPages/GoBackPage";
import TitlePeriod from "../../components/DiaryPages/TitlePeriod";
import FootListPeriod from "../../components/DiaryPages/FootListPeriod";

import RecordDiaryModalB from "../../components/RecordDiaryModal/RecordDiaryModalB"
import RecordDiaryModalL from "../../components/RecordDiaryModal/RecordDiaryModalL"
import RecordDiaryModalD from "../../components/RecordDiaryModal/RecordDiaryModalD"
import RecordDiaryModalS from "../../components/RecordDiaryModal/RecordDiaryModalS"


// const GlobalContext = createContext();
// const dataFoot = {
//   id: "",
//   img: "",
//   type: "",
//   products: [{
//     name: "",
//     carbonohidrates: null,
//     protein: null,
//     fat: null,
//     calories: null,
//   }]
// }

// const breakfastModal = () => {
const breakfastModal = () => {
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={'b'} />
      </TitleDiv>
      <FootListPeriod data={'b'} />
      <RecordDiaryModalB />
    </div>
  );
};

const lanchModal = () => { 
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={'l'} />
      </TitleDiv>
      <FootListPeriod data={'l'} />
      <RecordDiaryModalL />
    </div>    
  );
};
const dinnerModal = () => {
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={'d'} />
      </TitleDiv>
      <FootListPeriod data={'d'} />
      <RecordDiaryModalD />
    </div>
  );
};

// const sneckModal = () => {
const sneckModal = () => {
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={'s'} />
      </TitleDiv>
      <FootListPeriod data={'s'} />
      {/* <RecordDiaryModalS /> */}
    </div>
  );
};



// const FootToDo = () => {
const PeriodСard = props => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TitleDiv>
        <TitlePeriod data={props} />
      </TitleDiv>
      <FootListPeriod data={props} />
      {/* <Modal/> */}
    </>
  );
};



const DiaryPage = () => {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const toggleIsOpenModal = () => {
  //   setIsOpenModal(isOpenModal => !isOpenModal);
  // };

  // useEffect(() => {
  //   isOpenModal
  //     ? (document.body.style.overflow = 'hidden')
  //     : (document.body.style.overflow = '');
  // }, [isOpenModal]);


  return (
    <>
      <Link to="/">
        <GoBackPage />
      </Link>
      <TitlePage>Diary</TitlePage>
      <SectionDiary>
        {/* {periodСard('b')}
        {periodСard('l')}
        {periodСard('d')}
        {periodСard('s')} */}
        {breakfastModal()}
        {lanchModal()}
        {dinnerModal()}
        {sneckModal()}
      </SectionDiary>
    </>
  );
};

export default DiaryPage;
