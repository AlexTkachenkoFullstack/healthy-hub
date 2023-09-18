import { useState } from 'react';
import {
  InfoTitle,
  WaterInfoCard,
  Title,
  InfoNumber,
  Unit,
  InfoWrapper,
  Level,
  LeftInfo,
  LeftNumber,
  Button,
  AddIcon,
  ValueWrap,
} from './WaterInfo.styled';

export const WaterInfo = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prev => !prev);
    console.log(isOpenModal);
  };

  return (
    <div>
      <Title>Water</Title>
      <WaterInfoCard>
        <Level></Level>
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
          <Button onClick={toggleModal}>
            <AddIcon />
            Add water intake
          </Button>
        </InfoWrapper>
      </WaterInfoCard>
    </div>
  );
};
