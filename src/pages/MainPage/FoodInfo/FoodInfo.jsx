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

const carbBcg = 'rgba(255, 196, 247, 1)';
const proteinBcg = 'rgba(255, 243, 183, 1)';
const fatBcg = 'rgba(182, 182, 182, 1)';

export const FoodInfo = () => {
  const valueNorm = 1700;
  let inputValue = 1600;
  let chartBcg = '#45FFBC';

  const { carbs, protein, fat } = calcElementsMacros(valueNorm, 'lose');
  const elements = {
    carbs: 124,
    protein: 40,
    fat: 20,
  };

  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <DoughnutChart
            valueNorm={valueNorm}
            inputValue={inputValue}
            chartBcg={chartBcg}
          />
          <ChartInfoWrap>
            <p>{inputValue}</p>
            <p>calories</p>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={carbs}
            elementValue={elements.carbs}
          />
          <ChartCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={protein}
            elementValue={elements.protein}
          />
          <ChartCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={fat}
            elementValue={elements.fat}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};
