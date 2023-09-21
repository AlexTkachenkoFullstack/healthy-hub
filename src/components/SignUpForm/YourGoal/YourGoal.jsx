import { Formik, Form, Field } from 'formik';
import image from '../../../assets/images/summer-hiking.png';
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

const initialValues = {
  goal: '',
};

const YourGoal = ({ goNext, setGoal }) => {
  const handleSubmit = ({ goal }) => {
    setGoal(goal);
    goNext();
  };

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
          <BlockButton>
            <InputButton type="submit">Next</InputButton>
          </BlockButton>
        </Form>
      </YourGoalContainer>
    </Formik>
  );
};

export default YourGoal;
