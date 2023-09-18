import { Formik, Form, Field } from 'formik';
import image from '../../../assets/images/summer-hiking.png';
import "./YourGoal.css";
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

const YourGoal = ({ goNext, goBack }) => {
  return (
    <Formik>
      {() => (
        <YourGoalContainer>
          <Image src={image} alt="Summer hinking" />
          <Form>
            <YourGoalHeader id="your-goal-group">Your Goal</YourGoalHeader>
            <Text>Choose a goal so that we can help you effectively</Text>
            <LabelBlock role="group" aria-label="your-goal-group">
              <Label>
                <Field type="radio" name="Your Goal" value="Lose fat" />
                Lose fat
              </Label>
              <Label>
                <Field type="radio" name="Your Goal" value="Maintain" />
                Maintain
              </Label>
              <Label>
                <Field type="radio" name="Your Goal" value="Gain Muscle" />
                Gain Muscle
              </Label>
            </LabelBlock>
            <BlockButton>
              <InputButton type="submit" onClick={goNext}>
                Next
              </InputButton>
            </BlockButton>
          </Form>
        </YourGoalContainer>
      )}
    </Formik>
  );
};

export default YourGoal;
