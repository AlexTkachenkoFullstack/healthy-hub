import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Calories } from './Calories/Calories';
import { Water } from './Water/Water';
import { Weight } from './Weight/Weight';
import { SelectPeriod } from './SelectPeriod/SelectPeriod';

import {
  Frame,
  GraphicsFrame,
  CaloriesFrame,
  WaterFrame,
} from './DashboardPage.styled';
import { fetchStatistics } from 'redux/statistic/operations';

const DashboardPage = () => {
  const [data, setData] = useState({ value: 'lastMonth', label: 'Last Month' });

  const statistics = useSelector(state => state.statistics.statistics);

  const waterData = statistics?.water[data.value];
  const caloriesData = statistics?.calories[data.value];
  const weightData = statistics?.weight[data.value];

  const dispatch = useDispatch();

  const onChange = dat => {
    setData(dat);
  };

  useEffect(() => {
    if (!statistics) {
      dispatch(fetchStatistics());
    }
  }, [dispatch, statistics]);

  return (
    <>
      <Frame>
        <SelectPeriod onChange={onChange} data={waterData} />
        <GraphicsFrame>
          <CaloriesFrame>
            <Calories name="Calories" data={caloriesData} period={data} />
          </CaloriesFrame>
          <WaterFrame>
            <Water name="Water" data={waterData} period={data} />
          </WaterFrame>
        </GraphicsFrame>
        <Weight name="Weight" data={weightData} period={data} />
      </Frame>
    </>
  );
};

export default DashboardPage;
