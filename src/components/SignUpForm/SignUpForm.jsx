import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/operations';

import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';

const SignUpForm = () => {
  // зберігати у локальний стейт, а на сотанній частині форми зробити submit усіх стейтів
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('lose fat');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState(1.2);

  const dispatch = useDispatch();

  const userRegister = () => {
    const userData = {
      name,
      email,
      password,
      goal,
      gender,
      height: Number(height),
      weight: Number(weight),
      age: Number(age),
      activity: Number(activity),
    };
    dispatch(registrationThunk(userData));
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <>
      {step === 1 && (
        <div>
          <SignUpFirst
            goNext={handleNextStep}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <YourGoal
            goNext={handleNextStep}
            goBack={handlePrevStep}
            setGoal={setGoal}
            dataGoal={goal}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <AgeAndGender
            goNext={handleNextStep}
            goBack={handlePrevStep}
            setAge={setAge}
            setGender={setGender}
            dataGender={gender}
            dataAge={age}
          />
        </div>
      )}

      {step === 4 && (
        <div>
          <BodyParameters
            goNext={handleNextStep}
            goBack={handlePrevStep}
            setHeight={setHeight}
            setWeight={setWeight}
            dataHeight={height}
            dataWeight={weight}
          />
        </div>
      )}

      {step === 5 && (
        <div>
          <YourActivity
            goBack={handlePrevStep}
            goNext={handleNextStep}
            setActivity={setActivity}
            dataActivity={activity}
          />
        </div>
      )}
      {step > 5 && userRegister()}
    </>
  );
};

export default SignUpForm;
