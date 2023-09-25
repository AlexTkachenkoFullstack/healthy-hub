import RecordDiaryModalNew from 'components/RecordDiaryModalNew';
import { useState } from 'react';
import {
  AddButton,
  InfoWrap,
  Title,
  Value,
  AddIcon,
  CardWrap,
  CarbWrap,
  ProteinWrap,
  ImageWrap,
} from './DiaryCard.styled';
import { TitleWrap } from './DiaryCard.styled';

const elementSum = (arr, elem) => {
  return Math.round((arr.reduce((sum, dish) => sum + dish[elem], 0) * 10) / 10);
};

export const DiaryCard = ({ title, image, image2x, info }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const proteinSum = elementSum(info, 'protein');
  const carbonohidratesSum = elementSum(info, 'carbonohidrates');
  const fatSum = elementSum(info, 'fat');

  const handleRecordMeal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  return (
    <CardWrap>
      <TitleWrap>
        <ImageWrap>
          <img srcSet={`${image} 1x, ${image2x} 2x`} src={image} alt="Plate" />
        </ImageWrap>
        <Title>{title}</Title>
      </TitleWrap>
      {info.length !== 0 ? (
        <InfoWrap>
          <CarbWrap>
            Carbonohidrates:{' '}
            <Value>{isNaN(carbonohidratesSum) ? 0 : carbonohidratesSum}</Value>
          </CarbWrap>
          <ProteinWrap>
            Protein: <Value>{isNaN(proteinSum) ? 0 : proteinSum}</Value>
          </ProteinWrap>
          <p>
            Fat: <Value>{isNaN(fatSum) ? 0 : fatSum}</Value>
          </p>
        </InfoWrap>
      ) : (
        <AddButton onClick={handleRecordMeal}>
          <AddIcon />
          Record your meal
        </AddButton>
      )}
      {isOpenModal && (
        <RecordDiaryModalNew
          onClose={handleRecordMeal}
          type={title.toLowerCase()}
        />
      )}
    </CardWrap>
  );
};
