import React from 'react';
// import axios from 'axios'; 
import { Link } from 'react-router-dom';
import {
  SectionDiary,
  TitlePage,
  TitleDiv,
} from '../../components/DiaryPages/DiaryPage.styled';

import GoBackPage from "../../components/DiaryPages/GoBackPage";
import TitlePeriod from "../../components/DiaryPages/TitlePeriod";
import FootListPeriod from "../../components/DiaryPages/FootListPeriod";


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
      {/* <Link to="/main"> */}
        <GoBackPage />
      </Link>
      <TitlePage>Diary</TitlePage>
      <SectionDiary>
        {footCard('Breakfast')}
        {footCard('Lunch')}
        {footCard('Dinner')}
        {footCard('Snack')}
      </SectionDiary>
    </>
  );
};

export default DiaryPage;


// export default App;