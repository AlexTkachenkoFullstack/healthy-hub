import { Formik, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

import {
  Backdrop,
  CancelButton,
  ConfirmButton,
  ErrorText,
  InputField,
  Title,
  WaterIntakeForm,
  WaterIntakeModal,
  WaterLable,
} from './ErrorUserModal.styled';

const validationSchema = Yup.object({
  waterIntake: Yup.number().required('Required'),
});

export const ErrorUserModal = ({ handleModal, errorMessage }) => {
  const handleCloseModal = e => {
    (e.code === 'Escape' || e.currentTarget === e.target) && handleModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    console.log('values :>>', values);
  };
  return (
    <Backdrop onClick={handleCloseModal}>
      <WaterIntakeModal>
        <Title>Sorry.</Title>
        <p>{errorMessage.response.data.message}</p>
      </WaterIntakeModal>
    </Backdrop>
  );
};
