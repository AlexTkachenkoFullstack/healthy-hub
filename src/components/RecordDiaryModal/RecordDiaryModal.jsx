import React, { useState } from 'react';

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
  
 const handleChange = (id, fieldId, newValue) => {
    const updatedFields = foodData.fields.map(field =>
      field.id === id ? { ...field, [fieldId]: newValue } : field
    );
    setFoodData({ fields: updatedFields });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postFoodIntake({ typeName, products: foodData.fields }));
    onClose();
  };

  const pageWidth = document.documentElement.clientWidth;  

  return isOpen ? (
    <ModalOverlay>
      <ModalDiv> 
        {<TitleText>Record your meal</TitleText>}
        <TitleBlok >
          <Img src={imgPeriod} alt={typeName} style={{width: "32px", height: "32px"}}/>
          <Span>{typeName}</Span> 
        </TitleBlok>
        <Form onSubmit={handleSubmit}>
          {foodData.map((field) => (
            <FormDiv key={field.id}>
              <Input
                id='name'
                type="text"
                defaultValue={field.name}
                onChange={(e) => handleChange(field.id, e.target, "name")}
                placeholder="The name of the product or dish"  
                style={pageWidth< 834 ? { width: "100%" } : { width: "255px" }}
                required
              />
              <Input
                id='carb'
                type="number"
                defaultValue={field.carb}
                onChange={(e) => handleChange(field.id, e.target, "carb")}
                placeholder="Carbonoh."
                style={pageWidth< 834 ? { width: "100%" } : { width: "100px" }}
                required
              />
              <Input
                id='protein'
                type="number"
                defaultValue={field.protein}
                onChange={(e) => handleChange(field.id, e.target,"protein")}
                placeholder="Protein"
                style={pageWidth < 834 ? { width: "100%" } : { width: "86px" }} 
                required
              />
              <Input
                id='fat'
                type="number"
                defaultValue={field.fat}
                onChange={(e) => handleChange(field.id, e.target, "fat")}
                placeholder="Fat"
                style={pageWidth < 834 ? { width: "100%" } : { width: "61px" }}
                required
              />
              <Input
                id='calories'
                type="number"
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
