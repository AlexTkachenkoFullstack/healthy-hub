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
  yourGoalGroup: yup.string().required('Goal is required is required'),
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
          <YourGoalHeader id="yourGoalGroup">Your Goal</YourGoalHeader>
          <Text>Choose a goal so that we can help you effectively</Text>
          <LabelBlock role="group" aria-labelledby="yourGoalGroup">
            <Label>
              <Field type="radio" name="goal" value="lose fat" />
              Lose fat
            </Label>
            <Label>
              <Field type="radio" name="goal" value="maintain" />
              Maintain
            </Label>
            <Label>
              <Field type="radio" name="goal" value="main muscle" />
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
