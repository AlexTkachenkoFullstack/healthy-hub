import { Formik, Form, Field } from 'formik';

const YourActivity = ({ goNext, goBack }) => {
  return (
    <Formik>
      {() => (
        <Form>
          <div id="your-activity-group">Your Activity</div>
          <div role="group" aria-labelledby="your-activity-group">
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="12" />
                1.2 - if you do not have physical activity and sedentary work
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="1375" />
                1,375 - if you do short runs or light gymnastics 1-3 times a
                week
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="155" />
                1.55 - if you play sports with average loads 3-5 times a week
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="1725" />
                1,725 ​​- if you train fully 6-7 times a week
              </p>
            </label>
            <label>
              <p>
                <Field type="radio" name="Your Activity" value="19" />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </p>
            </label>
          </div>
          <p>
            <button type="submit" onClick={goNext}>
              Next
            </button>
          </p>
          <p>
            <button type="button" onClick={goBack}>
              Back
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default YourActivity;
