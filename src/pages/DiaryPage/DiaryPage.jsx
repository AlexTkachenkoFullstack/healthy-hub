import React, {useState, useEffect} from 'react';
// import React, {createContext, useContext, useState, useEffect} from 'react';
// import axios from 'axios'; 
import { Link } from 'react-router-dom';
import GoBackPage from "../../components/DiaryPages/GoBackPage";
import Card from "../../components/DiaryPages/Card";

import {
  SectionDiary,
} from '../../components/DiaryPages/DiaryPage.styled';

import RecordDiaryModalB from "../../components/RecordDiaryModal/RecordDiaryModalB"
import RecordDiaryModalL from "../../components/RecordDiaryModal/RecordDiaryModalL"
import RecordDiaryModalD from "../../components/RecordDiaryModal/RecordDiaryModalD"
import RecordDiaryModalS from "../../components/RecordDiaryModal/RecordDiaryModalS"

// import { createGlobalStyle } from 'styled-components';


const DiaryPage = () => {
  dispu
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleIsOpenModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  useEffect(() => {
    isOpenModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [isOpenModal]);

  return (
    <>
      <Link to="/">
        <GoBackPage />
      </Link>
      <SectionDiary>
        <Card type="Breakfast">
          {isOpenModal && <RecordDiaryModalB handleModal={toggleIsOpenModal} />}
        </Card>
        <Card type="Lunch">
          {isOpenModal && <RecordDiaryModalL handleModal={toggleIsOpenModal} />}
        </Card>
        <Card type="Dinner">
          {isOpenModal && <RecordDiaryModalD handleModal={toggleIsOpenModal} />}
        </Card>
        <Card type="Snack">
          {isOpenModal && <RecordDiaryModalS handleModal={toggleIsOpenModal} />}
        </Card>
      </SectionDiary>
    </>
  );
};

export default DiaryPage;
