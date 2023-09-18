import { ChartCard } from './ChartCard';
import {
  CaloriesChart,
  FoodInfoCard,
  InfoWrap,
  Title,
} from './FoodInfo.styled';

export const FoodInfo = () => {
  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <p>1360</p>
          <p>calories</p>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard title={'Carbonohidrates'} />
          <ChartCard title={'Protein'} />
          <ChartCard title={'Fat'} />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};

