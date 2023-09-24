import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { foodIntakeSlice} from '../../redux/diary/slice';

import {
  GlobalStyles,
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


// const FootListPeriod = (indexList, type) => {
const FootListPeriod = (props) => {
  const [isFullData, setIsFullData] = useState(false); 

  // const dispatch = useDispatch();
  // const globalData = useSelector((state) => {
  //   // console.log(state);
  //   return state.foodIntake

  //   // return state.slice.name
  // });
  // console.log(globalData);
  // try {
    // console.log(globalData);
    
  // } catch {
  //   console.log("Ошибка");
  // }

  const handleGlobalData = async () => {
    try {
      const response = await fetch('URL', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(formData.fields),
        body: JSON.stringify(foodData.fields),
      });

      if (response.ok) {
        console.log('Дані успішно отримані з серверу.');
        setIsFullData(true);
      } else {
        console.error('Помилка при отриманні даних з серверу.');
      }
    } catch (error) {
      console.error('Помилка під час отримання даних:', error);
    }
  };

  if (!isFullData) {
    const { breakfast, lunch, dinner, snack } = ((e) => handleGlobalData())
  } else {
    const { breakfast, lunch, dinner, snack } = userF;
  }
  
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

    // const titleObject = JSON.parse(localStorage.getItem('titleObject'));
    // titleObject.isEdit = true;
    // localStorage.setItem('titleObject', JSON.stringify(titleObject));
  // };


  const [editableIndexes, setEditableIndexes] = useState([]);
  
  const toggleEdit = (index) => {
    if (editableIndexes.includes(index)) {
      setEditableIndexes(editableIndexes.filter(i => i !== index));
    } else {
      setEditableIndexes([...editableIndexes, index]);
    }

    const titleObject = JSON.parse(localStorage.getItem('titleObject'));
    titleObject.isEdit = true;
    localStorage.setItem('titleObject', JSON.stringify(titleObject));
  };

  let data = {};

  if (indexList.data === 'b') {
    // data = dispatch(globalData.food.breakfast);
    data = breakfast.slice(0, breakfast.length - 1);
  } else if (indexList.data === 'l') {
    // data = dispatch(globalData.food.lunch);
    data = lunch.slice(0, lunch.length - 1);
  } else if (indexList.data === 'd') {
    // data = dispatch(globalData.food.dinner);
    data = dinner.slice(0, dinner.length - 1);
  } else if (indexList.data === 's') {
    // data = dispatch(globalData.snack);
    data = snack.slice(0, snack.length - 1);
  }

  const windowInnerWidth = document.documentElement.clientWidth;



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
                    {/* {editableIndexes.includes(index) ? 'Save' : 'Edit'} */}
                    Edit
                  </EditBtn>
                </ButtonStyle>
              </div>
            </Li>
          ))}
          <Li>
            {data.length + 1} <ModalDiaryBtn index={indexList} />
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

