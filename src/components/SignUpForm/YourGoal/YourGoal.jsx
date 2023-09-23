import { Formik, Form, Field, ErrorMessage } from 'formik';
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

const initialValues = {
  goal: '',
};

const YourGoal = ({ goNext, setGoal, dataGoal }) => {
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

        <Form>
          <YourGoalHeader id="yourGoalGroup">Your Goal</YourGoalHeader>
          <Text>Choose a goal so that we can help you effectively</Text>
          <LabelBlock role="group" aria-labelledby="goalGroup">
            <Label>
              <Field
                type="radio"
                name="goal"
                value="lose fat"
                as={CustomRadioInput}
                required
                checked
              />
              Lose fat
            </Label>
            <Label>
              <Field
                type="radio"
                name="goal"
                value="maintain"
                as={CustomRadioInput}
                required
              />
              Maintain
            </Label>
            <Label>
              <Field
                type="radio"
                name="goal"
                value="gain muscle"
                as={CustomRadioInput}
                required
                checked
              />
              Gain Muscle
            </Label>
          </LabelBlock>
          <ErrorMessage name="goalGroup" />
          <BlockButton>
            <InputButton type="submit">Next</InputButton>
          </BlockButton>
        </Form>
      </YourGoalContainer>
    </Formik>
  );
};

export default YourGoal;
