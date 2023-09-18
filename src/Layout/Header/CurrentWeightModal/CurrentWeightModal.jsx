import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import {
  Overlay,
  WeightContainer,
  WeightLayout,
  MobileWeightContainer,
  DateContainer,
  Subtitle,
  Title,
  Text,
  Date,
  WeightForm,
  SubmitButton,
  WeightInput,
  ErrorMessage,
  CancelButton,
} from './CurrentWeightModal.styled';
import CloseModalButton from '../CloseModalButton/CloseModalButton';

const schema = yup.object({
  weight: yup
    .number()
    .min(1, 'weight can not be less 1 kg')
    .max(300, 'weight can not be more 300 kg')
    .required('please enter your weight'),
});

export default function CurrentWeightModal({ onClose, date }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  const onSubmit = ({ weight }, actions) => {
    console.log(weight);
    actions.resetForm();
    onClose();
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      weight: '',
    },
    validationSchema: schema,
    onSubmit,
  });
  return (
    <Overlay onClick={handleOverlayClick}>
      <WeightLayout>
        <WeightContainer>
          <MobileWeightContainer>
            <CloseModalButton onClose={onClose} />
            <Title>Enter your current weight</Title>
            <Subtitle>You can record your weight once a day</Subtitle>
            <DateContainer>
              <Text>Today</Text>
              <Date>{date}</Date>
            </DateContainer>
            <WeightForm onSubmit={handleSubmit}>
              <div>
                {errors.weight && touched.weight ? (
                  <>
                    <WeightInput
                      placeholder="Enter your weight"
                      id="weight"
                      name="weight"
                      type="text"
                      onChange={handleChange}
                      value={values.weight}
                      style={{
                        border: '1px solid var(--input-border-color-error)',
                      }}
                    />
                    <ErrorMessage> {errors.weight.slice(0, 30)}</ErrorMessage>
                  </>
                ) : (
                  <WeightInput
                    placeholder="Enter your weight"
                    id="weight"
                    name="weight"
                    type="text"
                    onChange={handleChange}
                    value={values.weight}
                  />
                )}
              </div>
              <SubmitButton type="submit">Confirm</SubmitButton>
            </WeightForm>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </MobileWeightContainer>
        </WeightContainer>
      </WeightLayout>
    </Overlay>
  );
}
