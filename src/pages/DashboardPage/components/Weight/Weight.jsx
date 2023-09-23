import { nanoid } from 'nanoid';
import { avarageValue } from '../../../../utils/DashBoard/avarageValue';
import {
  WeightBody,
  WeightHeader,
  WeigthFrame,
  WeigthItem,
} from '../../DashboardPage.styled';

import { YearWeightSet } from '../../../../utils/DashBoard/TempData/YearWeightSet';

export const Weight = ({ name }) => {
  return (
    <>
      <WeightBody>
        <WeightHeader>
          <p>{name}</p>
          <p>Avarage value: {avarageValue(YearWeightSet)} kg</p>
        </WeightHeader>
        <WeigthFrame>
          {YearWeightSet.map(({ date, data }) => {
            return (
              <WeigthItem key={nanoid()}>
                <div>{data}</div>
                <div>{date}</div>
              </WeigthItem>
            );
          })}
        </WeigthFrame>
      </WeightBody>
    </>
  );
};
