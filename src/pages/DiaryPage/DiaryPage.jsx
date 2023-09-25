import React from 'react'; 
import { Link } from 'react-router-dom';
import {
  SectionDiary,
  TitlePage,
  TitleDiv,
} from '../../components/DiaryPages/DiaryPage.styled';

import GoBackPage from "../../components/DiaryPages/GoBackPage";
import TitlePeriod from "../../components/DiaryPages/TitlePeriod";
import FootListPeriod from "../../components/DiaryPages/FoodListPeriod";


const footCard = index => {
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={index} />
      </TitleDiv>
      <FootListPeriod data={index} />
    </div>
  );
};

const DiaryPage = () => {
  return (
    <>
      <Link to="/">
        <GoBackPage />
      </Link>
      <TitlePage>Diary</TitlePage>
      <SectionDiary>
        {footCard('breakfast')}
        {footCard('lunch')}
        {footCard('dinner')}
        {footCard('snack')}
      </SectionDiary>
    </>
  );
};

export default DiaryPage;
