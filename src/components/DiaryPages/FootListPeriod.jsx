import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  ButtonStyle,
  ListMeatContainer,
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

const GlobalStyles = createGlobalStyle`
  /* Приховуємо полосу прокрутки в WebKit (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Приховуємо полосу прокрутки в Firefox */
  * {
    scrollbar-width: none;
  }
`;

// const FootListPeriod = indexList => {
//   const { breakfast, lunch, dinner, snack } = userF;

//   const [isEditing, setIsEditing] = useState(false);
//   const [colorEdit, setColorEdit] = useState('white');

//   const [isHovered, setIsHovered] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//     console.log(isFocused);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//     console.log(isHovered);
//   };

//   // const [idBtn, setIdBtn] = useState('');

//   const toggleEditing = () => {
//     setIsEditing(!isEditing);
//     setColorEdit(isEditing ? 'red' : 'white');
//     console.log('toggleEditing', colorEdit);
//   };

//   let data = {};

//   if (indexList.data === 'b') {
//     data = breakfast.slice(0, breakfast.length - 1);
//   } else if (indexList.data === 'l') {
//     data = lunch.slice(0, lunch.length - 1);
//   } else if (indexList.data === 'd') {
//     data = dinner.slice(0, dinner.length - 1);
//   } else if (indexList.data === 'c') {
//     data = snack.slice(0, snack.length - 1);
//   }

//   const windowInnerWidth = document.documentElement.clientWidth;
//   //   console.log();

//   return (
//     <>
//       <GlobalStyles />
//       <ListMeatContainer
//         style={{ height: '240px' }}
//         // className={`your-div ${isHovered || isFocused ? 'scroll-active' : ''}`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         tabIndex="0"
//       >
//         <ul>
//           {data.flatMap((item, index) => (
//             <Li key={index}>
//               <div style={{ display: 'flex' }}>
//                 <ItemFoodIndex>{index + 1}</ItemFoodIndex>
//                 <label>
//                   <ItemFoodName
//                     type="text"
//                     defaultValue={item.name}
//                     readOnly={!isEditing}
//                   />
//                 </label>
//                 {windowInnerWidth < 834 && 'Carb. '}
//                 <label>
//                   <ItemFoodCarbon
//                     type="number"
//                     defaultValue={item.carbohydrates}
//                     readOnly={!isEditing}
//                   />
//                 </label>
//                 {windowInnerWidth < 834 && 'Prot. '}
//                 <label>
//                   <ItemFoodProt
//                     type="number"
//                     defaultValue={item.protein}
//                     readOnly={!isEditing}
//                   />
//                 </label>
//                 {windowInnerWidth < 834 && 'Fat '}
//                 <label>
//                   <ItemFoodFat
//                     type="number"
//                     defaultValue={item.fat}
//                     readOnly={!isEditing}
//                   />
//                 </label>

//                 {/* <EditBtn id="2" onClick={toggleEditing} /> */}
//                 {/* <EditBtn id={indexList + index + "-" + item.id} onClick={toggleEditing} /> */}
//                 {/* <EditBtn onClick={toggleEditing} style={{stroke: colorEdit}} /> */}
//                 {/* <EditBtn /> */}
//                 <ButtonStyle onClick={toggleEditing}>
//                   <EditBtn />
//                 </ButtonStyle>
//                 {/* ButtonStyle */}
//               </div>
//             </Li>
//           ))}
//           <Li>
//             {data.length + 1} <ModalDiaryBtn />{' '}
//           </Li>
//           {data.length < 3 && <Li>{'4'}</Li>}
//           {data.length < 2 && <Li>{'3'}</Li>}
//           {data.length < 1 && <Li>{'2'}</Li>}
//         </ul>
//       </ListMeatContainer>
//     </>
//   );
// };
const FootListPeriod = indexList => {
  const { breakfast, lunch, dinner, snack } = userF;

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


  const [editableIndexes, setEditableIndexes] = useState([]);
  
  const toggleEdit = (index) => {
    if (editableIndexes.includes(index)) {
      setEditableIndexes(editableIndexes.filter(i => i !== index));
    } else {
      setEditableIndexes([...editableIndexes, index]);
    }
  };



  let data = {};

  if (indexList.data === 'b') {
    data = breakfast.slice(0, breakfast.length - 1);
  } else if (indexList.data === 'l') {
    data = lunch.slice(0, lunch.length - 1);
  } else if (indexList.data === 'd') {
    data = dinner.slice(0, dinner.length - 1);
  } else if (indexList.data === 'c') {
    data = snack.slice(0, snack.length - 1);
  }

  const windowInnerWidth = document.documentElement.clientWidth;
  //   console.log();

  return (
    <>
      <GlobalStyles />
      <ListMeatContainer
        style={{ height: '240px' }}
        // className={`your-div ${isHovered || isFocused ? 'scroll-active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <ul>
          {data.flatMap((item, index) => (
            <Li key={index}>
              <div style={{ display: 'flex' }}>
                <ItemFoodIndex>{index + 1}</ItemFoodIndex>
                <label>
                  <ItemFoodName
                    type="text"
                    defaultValue={item.name}
                    disabled={!editableIndexes.includes(index)}
                    // onChange={(e) => handleInputChange(index, e)}
                  />
                </label>
                {windowInnerWidth < 834 && 'Carb. '}
                <label>
                  <ItemFoodCarbon
                    type="number"
                    defaultValue={item.carbohydrates}
                    disabled={!editableIndexes.includes(index)}
                    // onChange={(e) => handleInputChange(index, e)}
                  />
                </label>
                {windowInnerWidth < 834 && 'Prot. '}
                <label>
                  <ItemFoodProt
                    type="number"
                    defaultValue={item.protein}
                    disabled={!editableIndexes.includes(index)}
                    // onChange={(e) => handleInputChange(index, e)}
                  />
                </label>
                {windowInnerWidth < 834 && 'Fat '}
                <label>
                  <ItemFoodFat
                    type="number"
                    defaultValue={item.fat}
                    disabled={!editableIndexes.includes(index)}
                    // onChange={(e) => handleInputChange(index, e)}
                  />
                </label>

                {/* <EditBtn id="2" onClick={toggleEditing} /> */}
                {/* <EditBtn id={indexList + index + "-" + item.id} onClick={toggleEditing} /> */}
                {/* <EditBtn onClick={toggleEditing} style={{stroke: colorEdit}} /> */}
                {/* <EditBtn /> */}
                {/* <ButtonStyle onClick={toggleEditing}>
                  <EditBtn />
                </ButtonStyle> */}
                {/* <button onClick={() => toggleEdit(index)}>
                  {editableIndexes.includes(index) ? 'Сохранить' : 'Редактировать'}
                </button> */}

                {/* <button onClick={() => toggleEdit(index)}>
                <EditBtn>
                  {editableIndexes.includes(index) ? 'Save' : 'Edit'}
                </EditBtn>
                </button> */}
                
                <ButtonStyle onClick={() => toggleEdit(index)}>
                  
                  
                  <EditBtn>
                    {editableIndexes.includes(index) ? 'Save' : 'Edit'}
                  </EditBtn>
                </ButtonStyle>



              </div>
            </Li>
          ))}
          <Li>
            {data.length + 1} <ModalDiaryBtn />{' '}
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