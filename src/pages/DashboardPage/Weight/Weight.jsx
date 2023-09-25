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

import { YearWeightSet } from '../../../utils/DashBoard/TempData/YearWeightSet';

export const Weight = ({ name }) => {
  return (
    <>
      <WeightBody>
        <GraphicHeader>
          <GraphicTitle>{name}</GraphicTitle>
          <Avarage>
            Avarage value:<Value>{avarageValue(YearWeightSet)} kg</Value>
          </Avarage>
        </GraphicHeader>
        <ScrollWrap>
          <WeigthFrame>
            {YearWeightSet.map(({ date, data }) => {
              return (
                <WeigthItem key={nanoid()}>
                  <WeightData>{data}</WeightData>
                  <WeightDate>{date}</WeightDate>
                </WeigthItem>
              );
            })}
          </WeigthFrame>
        </ScrollWrap>
      </WeightBody>
    </>
  );
};
