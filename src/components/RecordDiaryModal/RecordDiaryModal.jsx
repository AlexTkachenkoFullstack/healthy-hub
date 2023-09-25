import React, { useState } from 'react';

// import axios from "axios";
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

import breakfastImg from "../../assets/images/meal-periods/breakfast.png";
import breakfastImg2 from "../../assets/images/meal-periods/breakfast-2x.png";

import { useDispatch } from 'react-redux';
import { postFoodIntake } from 'redux/diary/operations';

const isRetina = window.devicePixelRatio > 1;
const imgPeriod = isRetina ? breakfastImg2 : breakfastImg;
// const typeName = "Breakfast";
  
const RecordDiaryModal = ({ isOpen, onClose, typeName }) => {
  const dispatch = useDispatch();
  // проміжковий масив для збереження даних в модалці
  const [foodData, setFoodData] = useState({
    fields: [
      {
        id: '1',
        name: '',
        carb: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ],
  });
  // кнопка + Add more
  const handleAddMore = (e) => {
    e.preventDefault(); // Прибирає подію відправки форми
    
    if (foodData[foodData.length - 1].name === "") return;  // не дозволя додавати, якщо не введено дані

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
  const handleChange = (id, fieldId, newValue) => {
    const updatedFields = foodData.fields.map(field =>
      field.id === id ? { ...field, [fieldId]: newValue } : field
    );
    setFoodData({ fields: updatedFields });
  };


  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch('URL', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // body: JSON.stringify(formData.fields),
  //       body: JSON.stringify(foodData.fields),
  //     });

  //     if (response.ok) {
  //       console.log('Дані успішно відправлено на бекенд.');
  //       onClose();
  //     } else {
  //       console.error('Помилка відправки даних на бекенд.');
  //     }
  //   } catch (error) {
  //     console.error('Помилка під час відправки даних:', error);
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(type, formData.fields);
    dispatch(postFoodIntake({ typeName, products: foodData.fields }));
    onClose();
  };

  const pageWidth = document.documentElement.clientWidth;  

  return isOpen ? (
    <ModalOverlay>
      <ModalDiv> 
        {<TitleText>Record your meal</TitleText>}
        {/* {isEdit ? <TitleText>Edit your meal</TitleText> :  <TitleText>Record your meal</TitleText>} */}
        <TitleBlok >
          <Img src={imgPeriod} alt={typeName} style={{width: "32px", height: "32px"}}/>
          <Span>{typeName}</Span> 
        </TitleBlok>
        <Form onSubmit={handleSubmit}>
          {/* <div style={{display: "flex", flexWrap: "wrap", gap: "16px"}}> */}
          {foodData.map((field) => (
            <FormDiv key={field.id}>
              <Input
                id='name'
                type="text"
                // value={field.name}
                defaultValue={field.name}
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
                onChange={(e) => handleChange(field.id, e.target, "carb")}
                placeholder="Carbonoh."
                // style={{ width: "100px" }}
                style={pageWidth< 834 ? { width: "100%" } : { width: "100px" }}
                required
              />
              <Input
                id='protein'
                // type="text"
                type="number"
                // value={field.protein}
                defaultValue={field.protein}
                onChange={(e) => handleChange(field.id, e.target,"protein")}
                placeholder="Protein"
                style={pageWidth < 834 ? { width: "100%" } : { width: "86px" }} 
                required
              />
              <Input
                id='fat'
                // type="text"
                type="number"
                // value={field.fat}
                defaultValue={field.fat}
                onChange={(e) => handleChange(field.id, e.target, "fat")}
                placeholder="Fat"
                style={pageWidth < 834 ? { width: "100%" } : { width: "61px" }}
                required
              />
              <Input
                id='calories'
                // type="text"
                type="number"
                // value={field.calories}
                defaultValue={field.calories}
                onChange={(e) => handleChange(field.id, e.target, "calories")}
                placeholder="Calories"
                style={pageWidth < 834 ? { width: "100%" } : { width: "78px" }}
                required
              />
            </FormDiv>
            ))}          
          <ButtonStyleAdd onClick={handleAddMore} >+ Add more</ButtonStyleAdd>
            
          <BlockButtonStyle>
            <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
            <ButtonSubmit type="submit" onClick={handleSubmit} >Confirm</ButtonSubmit>
          </BlockButtonStyle>
        </Form>      
      </ModalDiv>
    </ModalOverlay>
  ) : null;
}

export default RecordDiaryModal;
