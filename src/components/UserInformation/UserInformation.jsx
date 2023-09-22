import { Formik, ErrorMessage, Field } from 'formik';
import {
  StyledForm,
  Label,
  Input,
  RadioContainer,
  RadioLabel,
  ActivityContainer,
  SaveButton,
  CancelButton,
  ButtonContainer,
  ErrorText,
  CustomRadioInput,
  AvatarImg,
  AvatarField,
  AvatarContainer,
  AvatarText,
} from './UserInformation.styled';
import * as yup from 'yup';
import sprite from '../../assets/images/icons/icons.svg';
import { useState } from 'react';

export const schema = yup.object({
  userName: yup.string().required('Please Enter your name'),
  age: yup
    .number()
    .min(1, 'you can not enter less 1 year')
    .max(150, 'age can not be more 150 years')
    .required('please enter your age'),
  height: yup
    .number()
    .min(50, 'you can not enter less 50 cm')
    .max(250, 'height can not be more 250 cm')
    .required('please enter your height'),
  weight: yup
    .number()
    .min(1, 'weight can not be less 1 kg')
    .max(300, 'weight can not be more 300 kg')
    .required('please enter your weight'),
});

const UserInformation = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = ({
    userName,
    age,
    gender,
    height,
    weight,
    activity,
  }) => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);

      console.log(
        selectedFile,
        userName,
        age,
        gender,
        height,
        weight,
        activity
      );
    } else {
      console.log(
        userName,
        user.avatarURL,
        age,
        gender,
        height,
        weight,
        activity
      );
    }
  };

  return (
    <>
      {user.name && (
        <Formik
          initialValues={{
            userName: user.name,
            photo: '',
            age: user.age,
            gender: user.gender,
            height: user.height,
            weight: user.weight,
            activity: String(user.activity),
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <Label>
                Your name
                <div>
                  <Input
                    type="text"
                    name="userName"
                    borderstyle={
                      errors.userName && touched.userName
                        ? '1px solid var(--input-border-color-error)'
                        : ''
                    }
                  />
                  <ErrorMessage name="userName">
                    {msg => <ErrorText>{msg}</ErrorText>}
                  </ErrorMessage>
                </div>
              </Label>

              <Label>
                Your photo
                <AvatarContainer>
                  {selectedFile ? (
                    <AvatarImg
                      src={URL.createObjectURL(selectedFile)}
                      alt="Avatar"
                    />
                  ) : (
                    <AvatarImg src={user.avatarURL} alt="Avatar" />
                  )}
                  <svg width={16} height={16} stroke="var(--icon-color-green)">
                    <use href={sprite + '#icon-direct-inbox'} />
                  </svg>
                  <AvatarText>Download new photo</AvatarText>
                  <AvatarField
                    type="file"
                    name="photo"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                  />
                </AvatarContainer>
              </Label>
              <Label>
                Your age
                <div>
                  <Input
                    type="text"
                    name="age"
                    borderstyle={
                      errors.age && touched.age
                        ? '1px solid var(--input-border-color-error)'
                        : ''
                    }
                  />
                  <ErrorMessage name="age">
                    {msg => <ErrorText>{msg}</ErrorText>}
                  </ErrorMessage>
                </div>
              </Label>
              <Label>
                Gender
                <RadioContainer role="group">
                  <RadioLabel>
                    <Field
                      value="male"
                      type="radio"
                      name="gender"
                      as={CustomRadioInput}
                    />
                    Male
                  </RadioLabel>
                  <RadioLabel>
                    <Field
                      value="female"
                      type="radio"
                      name="gender"
                      as={CustomRadioInput}
                    />
                    Female
                  </RadioLabel>
                </RadioContainer>
              </Label>
              <Label>
                Height
                <div>
                  <Input
                    type="text"
                    name="height"
                    borderstyle={
                      errors.height && touched.height
                        ? '1px solid var(--input-border-color-error)'
                        : ''
                    }
                  />
                  <ErrorMessage name="height">
                    {msg => <ErrorText>{msg}</ErrorText>}
                  </ErrorMessage>
                </div>
              </Label>
              <Label>
                Weight
                <div>
                  <Input
                    type="text"
                    name="weight"
                    borderstyle={
                      errors.weight && touched.weight
                        ? '1px solid var(--input-border-color-error)'
                        : ''
                    }
                  />
                  <ErrorMessage name="weight">
                    {msg => <ErrorText>{msg}</ErrorText>}
                  </ErrorMessage>
                </div>
              </Label>
              <label style={{ lineHeight: 1.43, fontWeight: 500 }}>
                Your activity
                <ActivityContainer role="group">
                  <RadioLabel>
                    <Field
                      value="1.2"
                      type="radio"
                      name="activity"
                      as={CustomRadioInput}
                    />
                    1.2 - if you do not have physical activity and sedentary
                    work
                  </RadioLabel>
                  <RadioLabel>
                    <Field
                      value="1.375"
                      type="radio"
                      name="activity"
                      as={CustomRadioInput}
                    />
                    1.375 - if you do short runs or light gymnastics 1-3 times a
                    week
                  </RadioLabel>
                  <RadioLabel>
                    <Field
                      value="1.55"
                      type="radio"
                      name="activity"
                      as={CustomRadioInput}
                    />
                    1.55 - if you play sports with average loads 3-5 times a
                    week
                  </RadioLabel>
                  <RadioLabel>
                    <Field
                      value="1.725"
                      type="radio"
                      name="activity"
                      as={CustomRadioInput}
                    />
                    1.725 ​​- if you train fully 6-7 times a week
                  </RadioLabel>
                  <RadioLabel>
                    <Field type="radio" name="activity" as={CustomRadioInput} />
                    1.9 - if your work is related to physical labor, you train 2
                    times a day and include strength exercises in your training
                    program
                  </RadioLabel>
                </ActivityContainer>
              </label>
              <ButtonContainer>
                <SaveButton type="submit">Save</SaveButton>
                <CancelButton
                  type="reset"
                  onClick={() => setSelectedFile(null)}
                >
                  Cancel
                </CancelButton>
              </ButtonContainer>
            </StyledForm>
          )}
        </Formik>
      )}
    </>
  );
};

export default UserInformation;
