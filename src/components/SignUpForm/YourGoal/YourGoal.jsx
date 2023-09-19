import { Formik, Form, Field } from 'formik';
import image from '../../../assets/images/summer-hiking.png';
import './YourGoal.css';
import {
  YourGoalContainer,
  Image,
  YourGoalHeader,
  Text,
  Label,
  LabelBlock,
  InputButton,
  BlockButton,
} from './YourGoal.styled';

import * as yup from 'yup';

const schema = yup.object().shape({
  'your-goal-group': Yup.string().required('Goal is required is required'),
});

const YourGoal = ({ goNext, data }) => {
  const handleSubmit = values => {
    console.log(values);
    goNext(values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      <YourGoalContainer>
        <Image src={image} alt="Summer hinking" />
        <Form>
          <YourGoalHeader id="your-goal-group">Your Goal</YourGoalHeader>
          <Text>Choose a goal so that we can help you effectively</Text>
          <LabelBlock role="group" aria-labelledby="your-goal-group">
            <Label>
              <Field type="radio" name="goal" value="Lose fat" />
              Lose fat
            </Label>
            <Label>
              <Field type="radio" name="goal" value="Maintain" />
              Maintain
            </Label>
            <Label>
              <Field type="radio" name="goal" value="Gain Muscle" />
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
