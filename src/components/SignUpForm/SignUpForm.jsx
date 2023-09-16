import { useState } from 'react';
import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';

const SignUpForm = () => {
  // зберігати у локальний стейт, а на сотанній частині форми зробити submit усіх стейтів
  const [step, setStep] = useState(1);
  // const [name, setName]=useState('');
  // const [email, setEmail]=useState('');
  // const [password, setPassword]=useState('');
  // const [goal, setGoal]=useState('');
  // const [gender, setGender]=useState('');
  // const  [bodyParams, setBodyParams]=useState('');
  // const [activity, setActivity] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const registerUser = e => {
    console.log(e);
  };

  console.log('ster', step);
  // console.log("name", name)
  // console.log("email", email)
  // console.log("password", password)
  // console.log("goal", goal)
  // console.log("gender", gender)
  // console.log("bodyParams", bodyParams)
  // console.log("activity", activity)
  return (
    <>
      <div className="container">
        {step === 1 && (
          <div>
            <SignUpFirst goNext={handleNextStep} />
          </div>
        )}

        {step === 2 && (
          <div>
            <YourGoal goNext={handleNextStep} goBack={handlePrevStep} />
          </div>
        )}

        {step === 3 && (
          <div>
            <AgeAndGender goNext={handleNextStep} goBack={handlePrevStep} />
          </div>
        )}

        {step === 4 && (
          <div>
            <BodyParameters goNext={handleNextStep} goBack={handlePrevStep} />
          </div>
        )}

        {step === 5 && (
          <div>
            <YourActivity goBack={handlePrevStep} goNext={handleNextStep} />
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
