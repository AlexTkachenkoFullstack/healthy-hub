import { useState } from 'react';
import { redirect } from 'react-router-dom';
import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';
import signUp from './signUp';

const SignUpForm = () => {
  // зберігати у локальний стейт, а на сотанній частині форми зробити submit усіх стейтів
  const [step, setStep] = useState(1);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [goal, setGoal] = useState(null);
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);
  const [activity, setActivity] = useState(null);

  const userRegister = () => {
    const userData = {
      name,
      email,
      password,
      goal,
      gender,
      height,
      weight,
      age,
      activity,
    };
    signUp(userData);
    setStep(1);
    setName('');
    setEmail('');
    setPassword('');
    setGoal('');
    setGender('');
    setHeight('');
    setWeight('');
    setAge('');
    setActivity('');
    redirect('/signin');
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
      {step >= 6 && userRegister()}
    </>
  );
};

export default SignUpForm;
