import { useState } from 'react';
import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';

const SignUpForm=()=>{

    // зберігати у локальний стейт, а на сотанній частині форми зробити submit усіх стейтів
    const [step, setStep] = useState(1);
    // const [name, setName]=useState('');
    // const [email, setEmail]=useState('');
    // const [password, setPassword]=useState('');
    // const [goal, setGoal]=useState('')


    const handleNextStep = () => {
      setStep(step + 1);
    };
  
    const handlePrevStep = () => {
      setStep(step - 1);
    };

    return (<>
    <div className='container'>
      {step === 1 && (
        <div>
          <SignUpFirst goNext={handleNextStep}/>
        </div>
      )}

      {step === 2 && (
        <div>
           <YourGoal goNext={handleNextStep} goBack={handlePrevStep}/>
        </div>
      )}

      {step === 3 && (
        <div>
          <AgeAndGender goNext={handleNextStep} goBack={handlePrevStep}/>
        </div>
      )}

        {step === 4 && (
        <div>
          <BodyParameters goNext={handleNextStep} goBack={handlePrevStep}/>
        </div>
      )}

        {step === 5 && (
        <div>
          <YourActivity goBack={handlePrevStep}/>
        </div>
      )}

    </div>
    
    </>)
}

export default SignUpForm