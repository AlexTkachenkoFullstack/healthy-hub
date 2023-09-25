import React, { useState } from 'react';
import {
  GlobalStyles,
  ButtonStyle,
  ListMeatContainer,
  ItemBox,
  Li,
  ItemFoodIndex,
  ItemFoodName,
  ItemFoodCarbon,
  ItemFoodProt,
  ItemFoodFat,  
} from './DiaryPage.styled';

import ModalDiaryBtn from "./ModalDiaryBtn";
import EditBtn from "./EditBtn";
import userF from './json/userFoot1.json';


const FootListPeriod = indexList => {
  const { breakfast, lunch, dinner, snack } = userF;
  const propsModal = indexList.data;

  // const [isEditing, setIsEditing] = useState(false);
  // const [colorEdit, setColorEdit] = useState('white');

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    console.log(isFocused);
  };

  const handleBlur = () => {
    setIsFocused(false);
    console.log(isHovered);
  };

  // const [idBtn, setIdBtn] = useState('');

  // const toggleEditing = () => {
  //   setIsEditing(!isEditing);
  //   setColorEdit(isEditing ? 'red' : 'white');
  //   console.log('toggleEditing', colorEdit);
  // };
  
  const toggleEdit = (index) => {
    console.log();
  };



  let data = {};

  if (indexList.data === 'Breakfast') {
    data = breakfast;
  } else if (indexList.data === 'Lunch') {
    data = lunch;
  } else if (indexList.data === 'Dinner') {
    data = dinner;
  } else if (indexList.data === 'Snack') {
    data = snack;
  }

  const windowInnerWidth = document.documentElement.clientWidth;
  //   console.log();

  return (
    <>
      <GlobalStyles />
      <ListMeatContainer
        style={{ height: '240px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <ul>
          {data.flatMap((item, index) => (
            <Li key={index}>
              <ItemBox >
                <ItemFoodIndex>{index + 1}</ItemFoodIndex>
                <label>
                  <ItemFoodName
                    type="text"
                    defaultValue={item.name}
                    disabled={true}
                  />
                </label>
                {windowInnerWidth < 834 && (<ButtonStyle onClick={() => toggleEdit(index)}>
                  <EditBtn>Edit</EditBtn>
                  {/* <ModalDiaryEditBtn nameType={propsModal}/> */}
                </ButtonStyle>)}
                {windowInnerWidth < 834 && (<span style={{marginLeft: "34px"}}>Carb.  </span>)}
                <label>
                  <ItemFoodCarbon
                    type="number"
                    defaultValue={item.carbohydrates}
                    disabled={true}
                  />
                </label>
                {windowInnerWidth < 834 && 'Prot. '}
                <label>
                  <ItemFoodProt
                    type="number"
                    defaultValue={item.protein}
                    disabled={true}
                  />
                </label>
                {windowInnerWidth < 834 && 'Fat '}
                <label>
                  <ItemFoodFat
                    type="number"
                    defaultValue={item.fat}
                    disabled={true}
                  />
                </label>

                {windowInnerWidth > 833 && (<ButtonStyle onClick={() => toggleEdit(index)}>
                  <EditBtn>Edit</EditBtn>
                  {/* <ModalDiaryEditBtn nameType={propsModal}/> */}
                </ButtonStyle>)}
              </ItemBox>
            </Li>
          ))}
          <Li>
            {/* {data.length + 1} <ModalDiaryBtn nameType={indexList.data} /> */}
            {data.length + 1} <ModalDiaryBtn nameType={propsModal}/>
          </Li>
          {data.length < 3 && <Li>{'4'}</Li>}
          {data.length < 2 && <Li>{'3'}</Li>}
          {data.length < 1 && <Li>{'2'}</Li>}
        </ul>
      </ListMeatContainer>
    </>
  );
};

export default FootListPeriod;