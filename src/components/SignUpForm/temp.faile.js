import { useState } from 'react';
import './styles.css';
import { Formik, Form, Field } from 'formik';

export default function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    weight: '',
    height: '',
    gender: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [buttonVisibility, setButtonVisibility] = useState(false);

  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepFive next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return <div className="App">{steps[currentStep]}</div>;
}

const StepOne = props => {
  return (
    <Formik initialValues={props.data}>
      {() => (
        <Form>
          <p>Name</p>
          <Field name="name" />
          <p>E-mail</p>
          <Field name="email" />
          <p>Password</p>
          <Field name="password" />
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <div id="your-goal-group">Your Goal</div>
          <div role="group" aria-label="your-goal-group">
            <label type="radio" name="Your Goal" value="Lose fat">
              Lose fat
            </label>
            <label type="radio" name="Your Goal" value="Maintain">
              Maintain
            </label>
            <label type="radio" name="Your Goal" value="MaintainGain Muscle">
              MaintainGain Muscle
            </label>
          </div>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

const StepThree = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <div id="gender-group">Select your gender</div>
          <div role="group" aria-label="gender-group">
            <label>
              <Field type="radio" name="Select your gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="Select your gender" value="female" />
              Female
            </label>
          </div>
          <p>Your age</p>
          <Field name="age" />
          <p>
            <button type="submit">Next</button>
          </p>
          <p>
            <button type="button">Back</button>
          </p>
        </Form>
      )}
    </Formik>
  );
};

const StepFour = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <p>Body parameters</p>
          <p>Height</p>
          <Field name="Height" />
          <p>Weight</p>
          <Field name="Weight" />
          <p>
            <button type="submit">Next</button>
          </p>
          <p>
            <button type="button">Back</button>
          </p>
        </Form>
      )}
    </Formik>
  );
};

const StepFive = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <div id="your-activity-group">Your Activity</div>
          <div role="group" aria-labelledby="your-activity-group">
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="12" />
                1.2 - if you do not have physical activity and sedentary work
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="1375" />
                1,375 - if you do short runs or light gymnastics 1-3 times a
                week
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="155" />
                1.55 - if you play sports with average loads 3-5 times a week
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="1725" />
                1,725 ​​- if you train fully 6-7 times a week
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="19" />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </p>
            </label>
          </div>
          <p>
            <button type="submit">Next</button>
          </p>
          <p>
            <button type="button">Back</button>
          </p>
        </Form>
      )}
    </Formik>
  );
};
