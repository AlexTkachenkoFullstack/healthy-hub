import { Formik, Form, Field } from 'formik';
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

const YourGoal = ({ goNext, setGoal, stateGoal }) => {
  const handleSubmit = ({ goal }) => {
    setGoal(goal.toLoweCae);
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
          <LabelBlock role="group" aria-labelledby="yourGoalGroup">
            <Label>
              <Field
                type="radio"
                name="goal"
                value="Lose Fat"
                checked={stateGoal === 'lose fat' ? false : true}
                as={CustomRadioInput}
              />
              Lose fat
            </Label>
            <Label>
              <Field
                type="radio"
                name="goal"
                value="Maintain"
                checked={stateGoal === 'maintain' ? false : true}
                as={CustomRadioInput}
              />
              Maintain
            </Label>
            <Label>
              <Field
                type="radio"
                name="goal"
                value="Gain Muscle"
                checked={stateGoal === 'gain muscle' ? false : true}
                as={CustomRadioInput}
              />
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
