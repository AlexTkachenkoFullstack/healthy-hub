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

export const DiaryCard = ({ title, image, image2x, info }) => {
  const { carbonohidrates, protein, fat } = info;

  const handleRecordMeal = () => {
    console.log('click record meal');
  };

  return (
    <CardWrap>
      <TitleWrap>
        <ImageWrap>
          <img srcSet={`${image} 1x, ${image2x} 2x`} src={image} alt="Plate" />
        </ImageWrap>
        <Title>{title}</Title>
      </TitleWrap>
      {carbonohidrates !== 0 && protein !== 0 && fat !== 0 ? (
        <InfoWrap>
          <CarbWrap>
            Carbonohidrates: <Value>{carbonohidrates}</Value>
          </CarbWrap>
          <ProteinWrap>
            Protein: <Value>{protein}</Value>
          </ProteinWrap>
          <p>
            Fat:: <Value>{fat}</Value>
          </p>
        </InfoWrap>
      ) : (
        <AddButton onClick={handleRecordMeal}>
          <AddIcon />
          Record your meal
        </AddButton>
      )}
    </CardWrap>
  );
};
