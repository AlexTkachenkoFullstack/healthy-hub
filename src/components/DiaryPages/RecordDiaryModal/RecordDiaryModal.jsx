import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';
import breakfastImg from "../../../assets/images/meal-periods/breakfast.png";
import {
  ModalDiv,
  Field,
  TitleText,
  FormDiv,
  Span,
  ButtonSubmit
} from "./RecordDiaryModal.styled";

import {ButtonStyle} from "../DiaryPage.styled"


const handleAddMore = () => {
  console.log("Add more button");
}
const handleCancel = () => {
  console.log("Cancel button");
}
const handleConfirm = () => {
  console.log("Confirm button");
}

// const onSubmit={async (values) => {
//   await new Promise((r) => setTimeout(r, 500));
//   alert(JSON.stringify(values, null, 2));
// }}
      
const RecordDiaryModal = () => {
  return (
    <ModalDiv>
      <TitleText>Record your meal</TitleText>
      <div style={{display: "flex", gap: "12px"}}>
        <img src={breakfastImg} alt="Breakfast" />
        <Span>Breakfast</Span> 
      </div>
      <form >
        <FormDiv>
          <label>
            <Field id="name" name="name" placeholder="The name of the product or dish" style={{width:"255px"}}/>
          </label>

          <label>
            <Field id="carb" name="carb" placeholder="Carbonoh." style={{width:"100px"}}/>
          </label>
          
          <label>
            <Field id="protein" name="protein" placeholder="Protein" style={{width:"86px"}}/>
          </label>

          <label>
            <Field id="fat" name="protein" placeholder="Fat" style={{width:"61px"}}/>
          </label>

          <label>
            <Field id="calories" name="calories" placeholder="Calories"style={{width:"78px"}}/>
          </label>
        </FormDiv>
        <ButtonStyle type="button" onClick={handleAddMore} style={{color: "var(--text-color-active-page-green)"}}>+ Add more</ButtonStyle>
        <div style={{position:'absolute', bottom: "24px", right: "24px"}}>
          <ButtonStyle type="button" onClick={handleCancel} style={{ color: "var(--text-color-secondary-grey)", width:"192px"}}>Cancel</ButtonStyle>
          <ButtonSubmit type="submit" onClick={handleConfirm} >Confirm</ButtonSubmit>
        </div>
      </form>
    </ModalDiv>
  );
}

export default RecordDiaryModal;

// const Basic = () => (
//   <div>
//     <h1>Record your meal</h1>
//     <p> <img src={breakfastImg} alt="Breakfast"/> Breakfast</p>
//     <Formik
//       initialValues={{
//         name: '',
//         carb: '',
//         protein: '',
//         fat: '',
//         calories: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="name"></label>
//         <Field id="name" name="name" placeholder="The name of the product or dish" />

//         <label htmlFor="carb"></label>
//         <Field id="carb" name="carb" placeholder="Carbonoh." />

//         <label htmlFor="protein"></label>
//         <Field id="protein" name="protein" placeholder="Protein"/>
        
//         <label htmlFor="fat"></label>
//         <Field id="fat" name="protein" placeholder="fat" />
        
//         <label htmlFor="calories"></label>
//         <Field id="calories" name="calories" placeholder="Calories"/>
        
//         <button type="button" onClick={handleAddMore}>+ Add more</button>
//         <button type="button" onClick={handleCancel}>Cancel</button>        
//         <button type="submit" onClick={handleConfirm} >Confirm</button>
//       </Form>
//     </Formik>
//   </div>
// );

// // ReactDOM.render(<Basic />, document.getElementById('root'));

// export default Basic;