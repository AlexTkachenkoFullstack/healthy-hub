import { Formik, Field, Form } from 'formik';
const fn = (values, actions) => {
  console.log(values);
  console.log(actions);
}

const UserInformation = () => (
  <div>
    <Formik
      initialValues={{
        userName: '',
        photo: '',
        age: '',
        gender:'',
        height: '',
        weight: '',
        activity: '',
      }}
      onSubmit={fn}
    >
      <Form>
        <p><label htmlFor="userName">Your name</label></p>
        <p><Field id="userName" name="userName" placeholder="Jane" /></p>

        <p><label htmlFor="photo">Your photo</label></p>
        <p><Field id="photo" name="photo" placeholder="Doe" /></p>

        <p><label htmlFor="age">Your age</label></p>
        <p><Field id="age" name="age" placeholder="Doe" /></p>
        
        <div id="userGender">Gender</div>
          <p><div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
          </div></p>

        <p><label htmlFor="height">Height</label></p>
        <p><Field id="height" name="height" placeholder="height" /></p>

        <p><label htmlFor="weight">Weight</label></p>
        <p><Field id="weight" name="weight" placeholder="weight" /></p>

        <div id="activity">Your activity</div>
          <p><div role="group" aria-labelledby="my-radio-group">
            <p><label>
              <Field type="radio" name="activity" value="1.2" />
              1.2 - if you do not have physical activity and sedentary work
            </label></p>
            <p><label>
              <Field type="radio" name="activity" value="1.375" />
              1,375 - if you do short runs or light gymnastics 1-3 times a week
            </label></p>
            <p><label>
              <Field type="radio" name="activity" value="1.55" />
              1.55 - if you play sports with average loads 3-5 times a week
            </label></p>
            <p><label>
              <Field type="radio" name="activity" value="1.725" />
              1,725 ​​- if you train fully 6-7 times a week
            </label></p>
            <p><label>
              <Field type="radio" name="activity" value="1.9" />
              1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program
            </label></p>
          </div></p>

        <p><button type="submit">Save</button></p>
        <button type="button">Cancel</button>
      </Form>
    </Formik>
  </div>
);

export default UserInformation;