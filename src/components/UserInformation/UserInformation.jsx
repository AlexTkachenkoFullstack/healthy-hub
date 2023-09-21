// import { Formik, Field, Form } from 'formik';
// const fn = (values, actions) => {
//   console.log(values);
//   console.log(actions);
// }
import { useFormik } from 'formik';
import {
  Form,
  Label,
  Input,
  RadioContainer,
  RadioLabel,
  ActivityContainer,
  SaveButton,
  CancelButton,
  ButtonContainer,
  ErrorMessage,
} from './UserInformation.styled';
import * as yup from 'yup';

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
  const onSubmit = (
    { userName, photo, age, gender, height, weight, activity },
    actions
  ) => {
    console.log(userName, photo, age, gender, height, weight, activity);
    console.log(actions);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        userName: user.name,
        photo: user.avatar,
        age: user.age,
        gender: user.gender,
        height: user.height,
        weight: user.weight,
        activity: String(user.activity),
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <>
      {user.name && (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="userName">
            Your name
            {errors.userName && touched.userName ? (
              <>
                <Input
                  id="userName"
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="userName"
                  style={{
                    border: '1px solid var(--input-border-color-error)',
                  }}
                />
                <ErrorMessage>{errors.userName}</ErrorMessage>
              </>
            ) : (
              <Input
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="userName"
              />
            )}
          </Label>

          <Label>
            Your photo
            <Input
              value={values.photo}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="photo"
            />
          </Label>
          <Label>
            Your age
            {errors.age && touched.age ? (
              <>
                <Input
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="age"
                  style={{
                    border: '1px solid var(--input-border-color-error)',
                  }}
                />
                <ErrorMessage>{errors.age}</ErrorMessage>
              </>
            ) : (
              <Input
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="age"
              />
            )}
          </Label>
          <Label>
            Gender
            <RadioContainer>
              <RadioLabel>
                <input
                  value="male"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="gender"
                  checked={values.gender === 'male'}
                />
                Male
              </RadioLabel>
              <RadioLabel>
                <input
                  value="female"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="gender"
                  checked={values.gender === 'female'}
                />
                Female
              </RadioLabel>
            </RadioContainer>
          </Label>
          <Label>
            Height
            {errors.height && touched.height ? (
              <>
                <Input
                  value={values.height}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="height"
                  style={{
                    border: '1px solid var(--input-border-color-error)',
                  }}
                />
                <ErrorMessage>{errors.height}</ErrorMessage>
              </>
            ) : (
              <Input
                value={values.height}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="height"
              />
            )}
          </Label>
          <Label>
            Weight
            {errors.weight && touched.weight ? (
              <>
                <Input
                  value={values.weight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="weight"
                  style={{
                    border: '1px solid var(--input-border-color-error)',
                  }}
                />
                <ErrorMessage>{errors.weight}</ErrorMessage>
              </>
            ) : (
              <Input
                value={values.weight}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="weight"
              />
            )}
          </Label>
          <RadioLabel>
            Your activity
            <ActivityContainer>
              <RadioLabel>
                <input
                  value="1.2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="activity"
                  checked={values.activity === '1.2'}
                />
                1.2 - if you do not have physical activity and sedentary work
              </RadioLabel>
              <RadioLabel>
                <input
                  value="1.375"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="activity"
                  checked={values.activity === '1.375'}
                />
                1.375 - if you do short runs or light gymnastics 1-3 times a
                week
              </RadioLabel>
              <RadioLabel>
                <input
                  value="1.55"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="activity"
                  checked={values.activity === '1.55'}
                />
                1.55 - if you play sports with average loads 3-5 times a week
              </RadioLabel>
              <RadioLabel>
                <input
                  value="1.725"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="activity"
                  checked={values.activity === '1.725'}
                />
                1.725 ​​- if you train fully 6-7 times a week
              </RadioLabel>
              <RadioLabel>
                <input
                  value="1.9"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  name="activity"
                  checked={values.activity === '1.9'}
                />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </RadioLabel>
            </ActivityContainer>
          </RadioLabel>
          <ButtonContainer>
            <SaveButton type="submit">Save</SaveButton>
            <CancelButton type="button">Cancel</CancelButton>
          </ButtonContainer>
        </Form>
      )}
    </>
  );
};

// <div>
//   <Formik
//     initialValues={{
//       userName: '',
//       photo: '',
//       age: '',
//       gender:'',
//       height: '',
//       weight: '',
//       activity: '',
//     }}
//     onSubmit={fn}
//   >
//     <Form>
//       <p><label htmlFor="userName">Your name</label></p>
//       <p><Field id="userName" name="userName" placeholder="Jane" /></p>

//       <p><label htmlFor="photo">Your photo</label></p>
//       <p><Field id="photo" name="photo" placeholder="Doe" /></p>

//       <p><label htmlFor="age">Your age</label></p>
//       <p><Field id="age" name="age" placeholder="Doe" /></p>

//       <div id="userGender">Gender</div>
//         <p><div role="group" aria-labelledby="my-radio-group">
//           <label>
//             <Field type="radio" name="gender" value="male" />
//             Male
//           </label>
//           <label>
//             <Field type="radio" name="gender" value="female" />
//             Female
//           </label>
//         </div></p>

//       <p><label htmlFor="height">Height</label></p>
//       <p><Field id="height" name="height" placeholder="height" /></p>

//       <p><label htmlFor="weight">Weight</label></p>
//       <p><Field id="weight" name="weight" placeholder="weight" /></p>

//       <div id="activity">Your activity</div>
//         <p><div role="group" aria-labelledby="my-radio-group">
//           <p><label>
//             <Field type="radio" name="activity" value="1.2" />
//             1.2 - if you do not have physical activity and sedentary work
//           </label></p>
//           <p><label>
//             <Field type="radio" name="activity" value="1.375" />
//             1,375 - if you do short runs or light gymnastics 1-3 times a week
//           </label></p>
//           <p><label>
//             <Field type="radio" name="activity" value="1.55" />
//             1.55 - if you play sports with average loads 3-5 times a week
//           </label></p>
//           <p><label>
//             <Field type="radio" name="activity" value="1.725" />
//             1,725 ​​- if you train fully 6-7 times a week
//           </label></p>
//           <p><label>
//             <Field type="radio" name="activity" value="1.9" />
//             1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program
//           </label></p>
//         </div></p>

//       <p><button type="submit">Save</button></p>
//       <button type="button">Cancel</button>
//     </Form>
//   </Formik>
// </div>

export default UserInformation;
