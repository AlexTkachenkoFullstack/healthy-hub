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

const YourGoal = ({ goNext, setGoal, stateGoal }) => {
  useEffect(() => {
    function checkBanana() {
      // Find the "Banana" radio button by its value
      var bananaRadioButton = document.querySelector(
        'input[name="fruit"][value="banana"]'
      );

      if (bananaRadioButton) {
        // Set the "Banana" radio button as checked
        bananaRadioButton.checked = true;
      } else {
        console.log('Banana radio button not found.');
      }
    }
  }, []);

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
                as={CustomRadioInput}
              />
              Lose fat
            </Label>
            <Label>
              <Field
                type="radio"
                name="goal"
                value="Maintain"
                as={CustomRadioInput}
              />
              Maintain
            </Label>
            <Label>
              <Field
                type="radio"
                name="goal"
                value="Gain Muscle"
                as={CustomRadioInput}
              />
              Gain Muscle
            </Label>
          </LabelBlock>
          <ErrorMessage name="yourGoalGroup" />
          <BlockButton>
            <InputButton type="submit">Next</InputButton>
          </BlockButton>
        </Form>
      </YourGoalContainer>
    </Formik>
  );
};

export default YourGoal;
