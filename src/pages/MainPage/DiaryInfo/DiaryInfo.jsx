import { useSelector } from 'react-redux';
import { DiaryCard } from './DiaryCard';
import { CardsWrap, DiaryLink, Title, TitleWrapper } from './DiaryInfo.styled';

import breakfast from '../../../assets/images/meal-periods/breakfast.png';
import breakfast2x from '../../../assets/images/meal-periods/breakfast-2x.png';
import dinner from '../../../assets/images/meal-periods/dinner.png';
import dinner2x from '../../../assets/images/meal-periods/dinner-2x.png';
import lunch from '../../../assets/images/meal-periods/lunch.png';
import lunch2x from '../../../assets/images/meal-periods/lunch-2x.png';
import snack from '../../../assets/images/meal-periods/snack.png';
import snack2x from '../../../assets/images/meal-periods/snack-2x.png';
import { getFoodIntake } from 'redux/diary/selectors';

export const DiaryInfo = () => {
  const diaryInfo = useSelector(getFoodIntake);

  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = diaryInfo;

  return (
    <div>
      <TitleWrapper>
        <Title>Diary</Title>
        <DiaryLink to="diary">See more</DiaryLink>
      </TitleWrapper>
      <CardsWrap>
        <DiaryCard
          title={'Breakfast'}
          image={breakfast}
          image2x={breakfast2x}
          info={breakfastInfo}
        />
        <DiaryCard
          title={'Lunch'}
          image={lunch}
          image2x={lunch2x}
          info={lunchInfo}
        />
        <DiaryCard
          title={'Dinner'}
          image={dinner}
          image2x={dinner2x}
          info={dinnerInfo}
        />
        <DiaryCard
          title={'Snack'}
          image={snack}
          image2x={snack2x}
          info={snackInfo}
        />
      </CardsWrap>
    </div>
  );
};
