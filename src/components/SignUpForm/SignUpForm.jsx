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
  // const [height, setHeight]=useState('');
  // const [weight, setWeight]=useState('');
  // const [age, setAge]=useState('');
  // const [activity, setActivity] = useState('');

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    goal: '',
    gender: '',
    height: '',
    weight: '',
    activity: '',
    age: '',
  });

  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    console.log(data);
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <>
      <div className="container">
        {step === 1 && (
          <div>
            <SignUpFirst goNext={handleNextStep} data={data} />
          </div>
        )}

        {step === 2 && (
          <div>
            <YourGoal
              goNext={handleNextStep}
              goBack={handlePrevStep}
              data={data}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <AgeAndGender
              goNext={handleNextStep}
              goBack={handlePrevStep}
              data={data}
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <BodyParameters
              goNext={handleNextStep}
              goBack={handlePrevStep}
              data={data}
            />
          </div>
        )}

        {step === 5 && (
          <div>
            <YourActivity
              goBack={handlePrevStep}
              goNext={handleNextStep}
              data={data}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
