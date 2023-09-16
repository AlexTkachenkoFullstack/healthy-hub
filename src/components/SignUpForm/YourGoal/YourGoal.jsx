import { Formik, Form, Field } from 'formik';
const YourGoal = ({ goNext, goBack }) => {
  return (
    <Formik>
      {() => (
        <Form>
          <div id="your-goal-group">Your Goal</div>
          <div role="group" aria-label="your-goal-group">
            <label>
              <Field type="radio" name="Your Goal" value="Lose fat" />
              Lose fat
            </label>
            <label>
              <Field type="radio" name="Your Goal" value="Maintain" />
              Maintain
            </label>
            <label>
              <Field
                type="radio"
                name="Your Goal"
                value="MaintainGain Muscle"
              />
              MaintainGain Muscle
            </label>
          </div>
          <button type="submit" onClick={goNext}>
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default YourGoal;
