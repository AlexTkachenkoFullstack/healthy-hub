import { nanoid } from 'nanoid';
import { avarageValue } from 'utils/DashBoard/avarageValue';
import {
  WeightBody,
  WeigthFrame,
  WeigthItem,
  ScrollWrap,
  GraphicHeader,
  GraphicTitle,
  Avarage,
  Value,
  WeightData,
  WeightDate,
} from '../DashboardPage.styled';

export const Weight = ({ name, data: dataWeight, period }) => {
  if (!dataWeight) {
    return;
  }

  return (
    <>
      <WeightBody>
        <GraphicHeader>
          <GraphicTitle>{name}</GraphicTitle>
          <Avarage>
            Avarage value:<Value>{avarageValue(dataWeight)} kg</Value>
          </Avarage>
        </GraphicHeader>
        <ScrollWrap>
          <WeigthFrame>
            {dataWeight.length ? (
              dataWeight.map(({ value, date }) => {
                return (
                  <WeigthItem key={nanoid()}>
                    <WeightData>{value}</WeightData>
                    <WeightDate>{date}</WeightDate>
                  </WeigthItem>
                );
              })
            ) : (
              <p> Created by HealthyHub🍎Team</p>
            )}
          </WeigthFrame>
        </ScrollWrap>
      </WeightBody>
    </>
  );
};
