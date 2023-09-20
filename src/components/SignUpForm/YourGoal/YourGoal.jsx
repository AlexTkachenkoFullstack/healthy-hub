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

const initialValues = {
  goal: '',
};

const YourGoal = ({ goNext, setGoal }) => {
  const handleSubmit = ({ goal }) => {
    setGoal(goal);
    goNext();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <YourGoalContainer>
        <Image src={image} alt="Summer hinking" />
        <Form>
          <YourGoalHeader id="yourGoalGroup">Your Goal</YourGoalHeader>
          <Text>Choose a goal so that we can help you effectively</Text>
          <LabelBlock role="group" aria-labelledby="yourGoalGroup">
            <Label>
              <Field type="radio" name="goal" value="Lose Fat" />
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
