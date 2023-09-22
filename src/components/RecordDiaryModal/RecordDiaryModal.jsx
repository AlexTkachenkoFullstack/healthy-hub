import React, { useState } from 'react';
import axios from "axios";
import breakfastImg from "../../assets/images/meal-periods/breakfast.png";
import {
  ModalOverlay,
  ModalDiv,
  Field,
  TitleText,
  FormDiv,
  Span,
  ButtonSubmit,
} from "./RecordDiaryModal.styled";

import {ButtonStyle} from "../DiaryPages/DiaryPage.styled"


// const handleAddMore = () => {
//   console.log("Add more button");
// }
// const handleCancel = () => {
//   console.log("Cancel button");
// }
// const handleConfirm = () => {
//   console.log("Confirm button");
// }

// // const onSubmit={async (values) => {
// //   await new Promise((r) => setTimeout(r, 500));
// //   alert(JSON.stringify(values, null, 2));
// // }}
      


const RecordDiaryModal = ({ isOpen, onClose }) => {
  const [fields, setFields] = useState(
    [{
      id: "1",
      name: "",
      carb: null,
      protein: null,
      fat: null,
      calories: null
    }]
  );

  const handleAddMore = (e) => {
    e.preventDefault(); // Прибирає подію відправки форми
    
    if (fields[fields.length - 1].name === "") return;
    setFields([
      ...fields,
      {
        id: Date.now(),
        name: "",
        carb: null,
        protein: null,
        fat: null,
        calories: null
      }
    ]);
  };

  const handleChange = (id, newValue) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: newValue } : field
    );
    setFields(updatedFields);
  };

  const handleSubmit = async (e) => {    
    // Відправка даних на сервер (backend) за допомогою fetch або axios
    console.log('Відправка на сервер:', fields);
    
    e.preventDefault();  // ? можливо потрібен рендер для перерахунку сум
    try {
      // Відправка запросу POST
      
      // const response = await axios.post('/api/user/food-intake', foodIntake);
      // const response = await axios.post('/api/user/food-intake', fields);
      // console.log('Успішно відправлено:', response.data);

//   dispatch(postFoodIntake({type:'lunch', products:[{name:'english breakfast', carbonohidrates:22, protein:22, fat:22, calories:59},
// {name:'tea', carbonohidrates:22, protein:22, fat:22, calories:59}]}      
      
      //За потреби очищення форми або інші дії після успішної відправки

      console.log('Успішно відправлено:', fields);
    } catch (error) {
      console.error('Помилкака при відправці:', error);
      // Обробка помилки
    }

  // Закрити модальне вікно
    onClose();
  };

  return isOpen ? (
    <ModalOverlay>
      <ModalDiv>

      <TitleText>Record your meal</TitleText>
      <div style={{display: "flex", gap: "12px"}}>
        <img src={breakfastImg} alt="Breakfast" />
        <Span>Breakfast</Span> 
      </div>
      <form >
        {fields.map((field) => (
          <FormDiv key={field.id}>
            <Field
              id='name'
              type="text"
              value={field.name}
              onChange={(e) => handleChange(field.id, e.target.name)}
              placeholder="The name of the product or dish"
              style={{ width: "255px" }}
            />
            <Field
              id='carb'
              type="number"
              value={field.carb}
              onChange={(e) => handleChange(field.id, e.target.carb)}
              placeholder="Carbonoh."
              style={{ width: "100px" }}
            />
            <Field
              id='protein'
              type="number"
              value={field.protein}
              onChange={(e) => handleChange(field.id, e.target.protein)}
              placeholder="Protein"
              style={{ width: "86px" }}
            />
            <Field
              id='fat'
              type="number"
              value={field.fat}
              onChange={(e) => handleChange(field.id, e.target.fat)}
              placeholder="Fat"
              style={{ width: "61px" }}
            />
            <Field
              id='calories'
              type="number"
              value={field.calories}
              onChange={(e) => handleChange(field.id, e.target.calories)}
              placeholder="Calories"
              style={{ width: "78px" }}
            />
          </FormDiv>
          ))}
        
        <ButtonStyle onClick={handleAddMore} style={{ color: "var(--text-color-active-page-green)" }}>+ Add more</ButtonStyle>
        <div style={{position:'absolute', bottom: "24px", right: "24px"}}>
          <ButtonStyle onClick={onClose} style={{ color: "var(--text-color-secondary-grey)", width:"192px"}}>Cancel</ButtonStyle>
          <ButtonSubmit type="submit" onClick={handleSubmit} >Confirm</ButtonSubmit>
        </div>
      </form>
      
      </ModalDiv>
    </ModalOverlay>
  ) : null;
}

export default RecordDiaryModal;
