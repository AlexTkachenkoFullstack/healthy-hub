import { useState } from 'react';
import { redirect } from 'react-router-dom';
import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';
import signUp from './signUp';
import { ErrorUserModal } from './ErrorUserModal/ErrorUserModal';

const SignUpForm = () => {
  // зберігати у локальний стейт, а на сотанній частині форми зробити submit усіх стейтів
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');

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
    try {
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
    } catch (error) {
      setErrorsMessage(error);
      setIsOpenModal(true);
    }
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const toggleIsOpenModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
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
      {isOpenModal && (
        <ErrorUserModal
          isOpenModal={toggleIsOpenModal}
        >
          {errorsMessage.message}
        </ErrorUserModal>
      )}
    </>
  );
};

export default SignUpForm;
