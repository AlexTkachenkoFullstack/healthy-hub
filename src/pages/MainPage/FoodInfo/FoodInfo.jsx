import { useSelector } from 'react-redux';
import { DoughnutChart } from 'components/DoughnutChart';
import { calcElementsMacros } from 'utils';
import { ChartCard } from './ChartCard';
import {
  CaloriesChart,
  ChartInfoWrap,
  FoodInfoCard,
  InfoWrap,
  Title,
} from './FoodInfo.styled';

import { getFoodIntake } from 'redux/diary/selectors';
import { getDiaryCalories } from 'redux/diary/selectors';

const carbBcg = 'rgba(255, 196, 247, 1)';
const proteinBcg = 'rgba(255, 243, 183, 1)';
const fatBcg = 'rgba(182, 182, 182, 1)';

export const FoodInfo = ({ dailyCalories }) => {
  const diaryInfo = useSelector(getFoodIntake);
  const diaryCalories = useSelector(getDiaryCalories);

  let caloriesChartBcg = '#45FFBC';

  let fatSum = 0;
  let proteinSum = 0;
  let carbonohidratesSum = 0;

  for (const key in diaryInfo) {
    const fat = Math.round(
      (diaryInfo[key].reduce((sum, { fat = 0 }) => sum + fat, 0) * 10) / 10
    );
    fatSum += fat;
    const protein = Math.round(
      (diaryInfo[key].reduce((sum, { protein = 0 }) => sum + protein, 0) * 10) /
        10
    );
    proteinSum += protein;
    const carbonohidrates = Math.round(
      (diaryInfo[key].reduce(
        (sum, { carbonohidrates = 0 }) => sum + carbonohidrates,
        0
      ) *
        10) /
        10
    );
    carbonohidratesSum += carbonohidrates;
  }

  const { carbs, protein, fat } = calcElementsMacros(dailyCalories, 'lose');

  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <DoughnutChart
            dailyCalories={dailyCalories}
            inputValue={diaryCalories}
            chartBcg={caloriesChartBcg}
          />
          <ChartInfoWrap>
            <p>{diaryCalories}</p>
            <p>calories</p>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={carbs}
            elementValue={carbonohidratesSum}
          />
          <ChartCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={protein}
            elementValue={proteinSum}
          />
          <ChartCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={fat}
            elementValue={fatSum}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};
