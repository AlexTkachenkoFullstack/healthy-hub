import { useState } from 'react';
import SignUpFirst from './SignUpFirst';
import YourGoal from './YourGoal';
import AgeAndGender from './AgeAndGender';
import BodyParameters from './BodyParameters';
import YourActivity from './YourActivity';
import { ErrorUserModal } from './ErrorUserModal/ErrorUserModal';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/operations';

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
  const [activity, setActivity] = useState('1.2');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
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
    try {
      dispatch(registrationThunk(userData));
      setStep(1);
      setName('');
      setEmail('');
      setPassword('');
      setGoal('lose fat');
      setGender('male');
      setHeight('');
      setWeight('');
      setAge('');
      setActivity(1.2);
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
        <ErrorUserModal isOpenModal={toggleIsOpenModal}>
          {errorsMessage.message}
        </ErrorUserModal>
      )}
    </>
  );
};

export default SignUpForm;
