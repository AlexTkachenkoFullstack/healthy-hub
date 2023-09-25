import React from 'react';
import { Link } from 'react-router-dom';
import GoBackPage from 'components/DiaryPages/GoBackPage';
import Breakfast from 'components/DiaryPages/Breakfast';
import { MainTitle } from 'components/DiaryPages/DiaryPage.styled';
// import Lunch from 'components/DiaryPages/Lunch';
// import Dinner from 'components/DiaryPages/Dinner';
// import Snack from 'components/DiaryPages/Snack';

const DiaryPage = () => {
  return (
    <div style={{ padding: '20px 0 52px' }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/">
          <GoBackPage />
        </Link>
        <MainTitle>Diary</MainTitle>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        <Breakfast />
        <Breakfast />
        <Breakfast />
        <Breakfast />
      </div>

      {/* <Lunch /> */}
      {/* <Dinner /> */}
      {/* <Snack /> */}
    </div>
  );
};

export default DiaryPage;
