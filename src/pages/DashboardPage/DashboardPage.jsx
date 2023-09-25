import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Calories } from './Calories/Calories';

import { Water } from './Water/Water';
import { Weight } from './Weight/Weight';
import { SelectPeriod } from './SelectPeriod/SelectPeriod';
// import { GoBackBtn } from './GoBackBtn/GoBackBtn';

import {
  Frame,
  GraphicsFrame,
  CaloriesFrame,
  WaterFrame,
} from './DashboardPage.styled';
import { fetchStatistics } from 'redux/statistic/operations';

const DashboardPage = () => {
  // const [data, setData] = useState('');

  const statistics = useSelector(state => state.statistics.statistics)
  
  console.log(statistics)
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (!statistics) {
      dispatch(fetchStatistics());
    }
  },[dispatch, statistics])

  return (
    <>
      <Frame>
        <SelectPeriod />
        <GraphicsFrame>
          <CaloriesFrame>
            <Calories name="Calories"
              stat={ statistics} />
          </CaloriesFrame>
          <WaterFrame>
            <Water name="Water" />
          </WaterFrame>
        </GraphicsFrame>
        <Weight name="Weight" />
      </Frame>
    </>
  );
};

export default DashboardPage;
