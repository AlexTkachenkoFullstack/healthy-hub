import { Calories } from './components/Calories';
import { Water } from './components/Water';
import { Weight } from './components/Weight/Weight';
import { SelectPeriod } from './SelectPeriod/SelectPeriod';

import {
  Frame,
  GraphicFrame,
  CaloriesFrame,
  WaterFrame,
} from './DashboardPage.styled';

const DashboardPage = () => {

  return (
    <>
      <div>
        <Frame>
          <div>
            <SelectPeriod />
          </div>
          <GraphicFrame>
            <CaloriesFrame>
              <Calories name="Calories" />
            </CaloriesFrame>
            <WaterFrame>
              <Water name="Water" />
            </WaterFrame>
          </GraphicFrame>
          <Weight name="Weight" />
        </Frame>
      </div>
    </>
  );
};

export default DashboardPage;
