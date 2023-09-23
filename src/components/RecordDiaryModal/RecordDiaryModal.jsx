import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';

import axios from "axios";
import breakfastImg from "../../assets/images/meal-periods/breakfast.png";
import {
  ModalOverlay,
  ModalDiv,
  Input,
  TitleText,
  FormDiv,
  Span,
  ButtonSubmit,
  BlockButtonStyle,
  ButtonStyleAdd,
  Form,
  TitleBlok,
  Img,
  ButtonCancel,
} from "./RecordDiaryModal.styled";


// import {ButtonStyle} from "../DiaryPages/DiaryPage.styled"
// import { type } from '@testing-library/user-event/dist/type';

// // const onSubmit={async (values) => {
// //   await new Promise((r) => setTimeout(r, 500));
// //   alert(JSON.stringify(values, null, 2));
// // }}
      

const RecordDiaryModal = ({ isOpen, initialValues, onClose }) => {
  // const { isOpen, initialValues, onClose } = props;
  const [formData, setFormData] = useState(initialValues);
  
  const [foodData, setFoodData] = useState(
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
    
    if (foodData[foodData.length - 1].name === "") return;
    setFoodData([
      ...foodData,
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
  
  // const handleChange = (e) => {
    // const { name, value } = e.target;
  const handleChange = (id, targ, fieldName) => {
    // console.log();
    if (fieldName === "") return
    
    // if (fieldName !== "name" && fieldName !== "") {
    //   try {
    //     /^\d+$/.test(targ.value)
    //     targ.value = Math.abs(Number(targ.value))
    //     // targ.value = Math.abs(/^\d+$/.test(value))
    //     // typeof targ.value
    //   } catch (error) {
    //     console.log("Value must be a number");
    //     return
    //   }
    // }

    const updatedFields = foodData.flatMap((field) => {
      console.log(field);
      const sd = field.id === id ? { ...field, [fieldName]: targ.value } : field
      return field.id === id ? { ...field, [fieldName]: targ.value } : field
    
      // field.id === id ? { ...field, value: newValue } : field
    });
    //  setfoodData({...foodData, [name]: value,});
    setFoodData(updatedFields);
  };

  const handleSubmit = async (e) => {    
    // Відправка даних на сервер (backend) за допомогою fetch або axios
    console.log('Відправка на сервер:', foodData);
    
    e.preventDefault();  // ? можливо потрібен рендер для перерахунку сум
    try {
      // Відправка запросу POST
      
      // const response = await axios.post('/api/user/food-intake', foodIntake);
      // const response = await axios.post('/api/user/food-intake', foodData);
      // console.log('Успішно відправлено:', response.data);

//   dispatch(postFoodIntake({type:'lunch', products:[{name:'english breakfast', carbonohidrates:22, protein:22, fat:22, calories:59},
// {name:'tea', carbonohidrates:22, protein:22, fat:22, calories:59}]}      
      
      //За потреби очищення форми або інші дії після успішної відправки

      console.log('Успішно відправлено:', foodData);
    } catch (error) {
      console.error('Помилкака при відправці:', error);
      // Обробка помилки
    }
    
  // Закрити модальне вікно
    onClose();
  };

  const pageWidth = document.documentElement.clientWidth
  return isOpen ? (
    <ModalOverlay>
      <ModalDiv>      
        <TitleText>Record your meal</TitleText>
        <TitleBlok >
          <Img src={breakfastImg} alt="Breakfast" />
          <Span>Breakfast</Span> 
        </TitleBlok>
        <Form >
          {/* <div style={{display: "flex", flexWrap: "wrap", gap: "16px"}}> */}

          {foodData.map((field) => (
            <FormDiv key={field.id}>
              <Input
                id='name'
                type="text"
                // value={field.name}
                defaultValue={field.name}
                // onChange={handleInputChange}
                // onChange={handleChange}
                // onChange={(e) => handleChange(field.id, e.target.carb)}
                onChange={(e) => handleChange(field.id, e.target, "name")}
                placeholder="The name of the product or dish"  
                style={pageWidth< 834 ? { width: "100%" } : { width: "255px" }}
                required
              />
              <Input
                id='carb'
                // type="text"
                type="number"
                // value={field.carb}
                defaultValue={field.carb}
                // onChange={(e) => handleChange(field.id, e.target.carb)}
                onChange={(e) => handleChange(field.id, e.target, "carb")}
                placeholder="Carbonoh."
                // style={{ width: "100px" }}
                style={pageWidth< 834 ? { width: "100%" } : { width: "100px" }}
                
              />
              <Input
                id='protein'
                // type="text"
                type="number"
                // value={field.protein}
                defaultValue={field.protein}
                // onChange={(e) => handleChange(field.id, e.target.protein)}
                onChange={(e) => handleChange(field.id, e.target,"protein")}
                placeholder="Protein"
                // style={{ width: "86px" }}
                style={pageWidth< 834 ? { width: "100%" } : { width: "86px" }}
                
              />
              <Input
                id='fat'
                // type="text"
                type="number"
                // value={field.fat}
                defaultValue={field.fat}
                // onChange={(e) => handleChange(field.id, e.target.fat)}
                onChange={(e) => handleChange(field.id, e.target, "fat")}
                placeholder="Fat"
                // style={{ width: "61px" }}
                style={pageWidth< 834 ? { width: "100%" } : { width: "61px" }}
              />
              <Input
                id='calories'
                // type="text"
                type="number"
                // value={field.calories}
                defaultValue={field.calories}
                // onChange={(e) => handleChange(field.id, e.target.calories)}
                onChange={(e) => handleChange(field.id, e.target, "calories")}
                placeholder="Calories"
                // style={{ width: "78px" }}
                style={pageWidth< 834 ? { width: "100%" } : { width: "78px" }}
              />
            </FormDiv>
            ))}          
          {/* <ButtonStyleAdd type="submit" onClick={handleAddMore} >+ Add more</ButtonStyleAdd> */}
          <ButtonStyleAdd onClick={handleAddMore} >+ Add more</ButtonStyleAdd>
          {/* </div> */}
            <BlockButtonStyle>
            {/* <ButtonStyle type="submit" onClick={onClose} style={{ color: "var(--text-color-secondary-grey)", width:"192px", position: "absolute", top:"45px", left: "25px", }}>Cancel</ButtonStyle> */}
            <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
            {/* <ButtonStyle onClick={onClose} style={{ color: "var(--text-color-secondary-grey)", width:"192px", position: "absolute", top:"45px", left: "25px", }}>Cancel</ButtonStyle> */}
            <ButtonSubmit type="submit" onClick={handleSubmit} >Confirm</ButtonSubmit>
          </BlockButtonStyle>
        </Form>
      
      </ModalDiv>
    </ModalOverlay>
  ) : null;
}

export default RecordDiaryModal;
