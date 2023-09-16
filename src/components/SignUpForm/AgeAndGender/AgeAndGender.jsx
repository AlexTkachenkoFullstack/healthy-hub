import { Formik, Form, Field } from 'formik';

const AgeAndGender = ({ goNext, goBack }) => {
  return (
    <Formik>
      {() => (
        <Form>
          <div id="gender-group">Select your gender</div>
          <div role="group" aria-label="gender-group">
            <label>
              <Field type="radio" name="Select your gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="Select your gender" value="female" />
              Female
            </label>
          </div>
          <p>Your age</p>
          <Field name="age" />
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
    // <>
    //   <h1>AgeAndGender</h1>
    //   <button onClick={goNext}>Next</button>
    //   <button onClick={goBack}>Back</button>
    // </>
  );
};

export default AgeAndGender;
