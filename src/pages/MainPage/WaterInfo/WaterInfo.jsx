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

const waterIntake = 90;

const waterPercent = waterIntake <= 100 ? waterIntake : 100;
const offset =
  waterPercent <= 84 ? Math.ceil((waterPercent / 100) * 176 + 10) : 88;
const percentColor = waterPercent <= 85 ? 'rgba(182, 195, 255, 1)' : 'green';

export const WaterInfo = ({ handleModal }) => {
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
            <WaterChart waterIntake={waterIntake} />
          </WaterBar>
        </Level>
        <InfoWrapper>
          <InfoTitle>Water consumption</InfoTitle>
          <ValueWrap>
            <InfoNumber>
              1050 <Unit>ml</Unit>
            </InfoNumber>
            <LeftInfo>
              left:<LeftNumber>450</LeftNumber>
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
