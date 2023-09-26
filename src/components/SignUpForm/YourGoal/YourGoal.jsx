import { Formik, Form } from 'formik';
import lowQualityImage from '../../../assets/images/summer-hiking.png';
import highQualityImage from '../../../assets/images/summer-hiking-2x.png';

import {
  YourGoalContainer,
  Image,
  YourGoalHeader,
  Text,
  Label,
  LabelBlock,
  InputButton,
  BlockButton,
  CustomRadioInput,
} from './YourGoal.styled';

import { goalSchema } from '../validationLibs';
import { useEffect } from 'react';

const YourGoal = ({ goNext, setGoal, dataGoal }) => {
  const initialValues = {
    goal: dataGoal,
  };

  useEffect(() => {
    const selectorString = 'input[type="radio"][value="' + dataGoal + '"]';
    const checkedButton = document.querySelector(selectorString);
    if (!checkedButton) {
      return;
    }
    checkedButton.checked = true;
  }, [dataGoal]);

  const handleSubmit = ({ goal }) => {
    setGoal(goal);
    goNext();
  };

  const isRetinaDisplay =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;

  const image = isRetinaDisplay ? highQualityImage : lowQualityImage;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={goalSchema}
    >
      <YourGoalContainer>
        <Image src={image} alt="Summer hinking" />

        <Form autoComplete="off">
          <YourGoalHeader id="yourGoalGroup">Your Goal</YourGoalHeader>
          <Text>Choose a goal so that we can help you effectively</Text>
          <LabelBlock role="group" aria-labelledby="goalGroup">
            <Label>
              <CustomRadioInput
                type="radio"
                name="goal"
                value="lose fat"
                required
              />
              Lose fat
            </Label>
            <Label>
              <CustomRadioInput type="radio" name="goal" value="maintain" />
              Maintain
            </Label>
            <Label>
              <CustomRadioInput type="radio" name="goal" value="gain muscle" />
              Gain Muscle
            </Label>
          </LabelBlock>
          <BlockButton>
            <InputButton type="submit">Next</InputButton>
          </BlockButton>
        </Form>
      </YourGoalContainer>
    </Formik>
  );
};

export default YourGoal;
