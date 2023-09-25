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

const DashboardPage = () => {
  // const [data, setData] = useState('');

  return (
    <>
      <Frame>
        <SelectPeriod />
        <GraphicsFrame>
          <CaloriesFrame>
            <Calories name="Calories" />
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
