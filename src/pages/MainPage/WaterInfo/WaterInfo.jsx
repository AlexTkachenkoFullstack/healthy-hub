import { WaterChart } from 'components/WaterChart';
import {
  InfoTitle,
  WaterInfoCard,
  WaterTitle,
  InfoNumber,
  Unit,
  InfoWrapper,
  Level,
  LeftInfo,
  LeftNumber,
  Button,
  AddIcon,
  ValueWrap,
  WaterBar,
  WaterPercentage,
} from './WaterInfo.styled';

export const WaterInfo = ({ handleModal, waterConsumtion }) => {
  const leftWaterIntake = 1500 - waterConsumtion;

  const waterPercent =
    waterConsumtion <= 1500 ? Math.round((waterConsumtion * 100) / 1500) : 100;

  const offset =
    waterPercent <= 84 ? Math.ceil((waterPercent / 100) * 176 + 10) : 88;
  const percentColor = waterPercent <= 85 ? 'rgba(182, 195, 255, 1)' : 'green';

  return (
    <div>
      <WaterTitle>Water</WaterTitle>
      <WaterInfoCard>
        <Level>
          <WaterBar>
            <WaterPercentage
              $offset={offset}
              $percentColor={percentColor}
            >{`${waterPercent}%`}</WaterPercentage>
            <WaterChart waterIntake={waterPercent} />
          </WaterBar>
        </Level>
        <InfoWrapper>
          <InfoTitle>Water consumption</InfoTitle>
          <ValueWrap>
            <InfoNumber>
              {waterConsumtion} <Unit>ml</Unit>
            </InfoNumber>
            <LeftInfo>
              left:
              <LeftNumber>
                {leftWaterIntake > 0 ? leftWaterIntake : 0}
              </LeftNumber>
              <Unit>ml</Unit>
            </LeftInfo>
          </ValueWrap>
          <Button onClick={handleModal}>
            <AddIcon />
            Add water intake
          </Button>
        </InfoWrapper>
      </WaterInfoCard>
    </div>
  );
};
