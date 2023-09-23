import {
  Card,
  CardImage,
  InfoWrap,
  Title,
  ValueWrap,
  Calories,
} from './RecommendedCard.styled';

export const RecommendedCard = ({ info }) => {
  const { name, amount, img, calories } = info;

  return (
    <Card>
      <CardImage>
        <img src={img} alt="name" />
      </CardImage>

      <InfoWrap>
        <Title>{name}</Title>
        <ValueWrap>
          <p>{amount}</p>
          <Calories>{calories} calories</Calories>
        </ValueWrap>
      </InfoWrap>
    </Card>
  );
};
