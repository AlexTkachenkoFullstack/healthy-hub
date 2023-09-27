import React from 'react';
import { Link } from 'react-router-dom';
import GoBackPage from 'components/DiaryPages/GoBackPage';
import Breakfast from 'components/DiaryPages/Breakfast';
import { MainTitle } from 'components/DiaryPages/DiaryPage.styled';
import Dinner from 'components/DiaryPages/Dinner';
import Lunch from 'components/DiaryPages/Lunch';
import Snack from 'components/DiaryPages/Snack';
import {
  DiaryCardHeader,
  PartsOfMeal,
} from 'components/DiaryPages/DiaryCard.styled';

const DiaryPage = () => {
  return (
    <div style={{ padding: '20px 0 52px' }}>
      <DiaryCardHeader>
        <Link to="/">
          <GoBackPage />
        </Link>
        <MainTitle>Diary</MainTitle>
      </DiaryCardHeader>
      <PartsOfMeal>
        <Breakfast />
        <Dinner />
        <Lunch />
        <Snack />
      </PartsOfMeal>
    </div>
  );
};

export default DiaryPage;
