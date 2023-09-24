import React from 'react';
import { Link } from 'react-router-dom';
import GoBackPage from 'components/DiaryPages/GoBackPage';
import Breakfast from 'components/DiaryPages/Breakfast';
// import Lunch from 'components/DiaryPages/Lunch';
// import Dinner from 'components/DiaryPages/Dinner';
// import Snack from 'components/DiaryPages/Snack';

const DiaryPage = () => {
  return (
    <>
      <Link to="/">
        <GoBackPage />
      </Link>
      <h1>Diary Page</h1>
      <Breakfast />
      {/* <Lunch /> */}
      {/* <Dinner /> */}
      {/* <Snack /> */}
    </>
  );
};

export default DiaryPage;
