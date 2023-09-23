import {
  Card,
  CardImage,
  InfoWrap,
  Title,
  ValueWrap,
  Calories,
} from './RecommendedCard.styled';

import noImage from '../../assets/images/meal-periods/noimage.png';

export const RecommendedCard = ({ info }) => {
  const { name, amount, img: image, calories } = info;
  const onError = e => (e.target.src = noImage);


  return (
    <Card>
      <CardImage>
        <img src={image} alt="name" onError={e => onError(e)} />
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
