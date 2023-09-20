import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Если используете Axios
import { Link } from 'react-router-dom';
import sprite from '../../assets/images/icons/icons.svg';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
// import breakfastImg2 from '../../assets/images/meal-periods/breakfast-2x.png';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
// import dinnerImg2 from '../../assets/images/meal-periods/dinner-2x.png';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
// import lunchImg2 from '../../assets/images/meal-periods/lunch-2x.png';
import snackImg from '../../assets/images/meal-periods/snack.png';
// import snackImg2 from '../../assets/images/meal-periods/snack-2x.png';

// import { ModalContainer, ModalContent, ButtonGroup as CustomButtonGroup } from './DiaryPage.styled';

import {
  ButtonStyle,
  SvgArrowRight,
  SvgEdit,
  SectionDiary,
  TitlePage,
  NamePeriod,
  IngredientSpan,
  ListMeatContainer,
  Li,
  ItemFoodName,
  ItemFoodCarbon,
  ItemFoodProt,
  ItemFoodFat,
  TitleDiv,
  TextSpan,
  TextIndexSpan,
  ItemFoodIndex,
} from '../../components/DiaryPages/DiaryPage.styled';

import { createGlobalStyle } from "styled-components";

// import dataBreakfast from "../../components/DiaryPages/json/breakfast.json";
// import dataLunch from "../../components/DiaryPages/json/lunch.json";
// import dataDinner from "../../components/DiaryPages/json/dinner.json";
// import dataSnack from "../../components/DiaryPages/json/snack.json";
// import ProductColumn from '../../components/DiaryPages/mys/ProductColumn';

// import GoBackPage from "../../components/DiaryPages/GoBackPage";
// import EditBtn from "../../components/DiaryPages/EditBtn";
// import TitlePeriod from "../../components/DiaryPages/TitlePeriod";
// import ModalDiaryBtn from "../../components/DiaryPages/ModalDiaryBtn";

// // Создание json-файла
// const downloadObjectAsJson = () => {
//     const data  = user;
//     const dataStr = JSON.stringify(data);
//     const blob = new Blob([dataStr], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.style.display = 'none';
//     a.href = url;
//     a.download = 'userFoot1.json';
//     document.body.appendChild(a);
//     a.click();
//     URL.revokeObjectURL(url);
//     document.body.removeChild(a);
//   };


// console.log(dataF);
// console.log('user=', user);

// const [dataPer, setDataPer] = useState('');

import userF from "./userFoot1.json";


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

const { breakfast, lunch, dinner, snack } = userF;
const dataImg = [breakfastImg,lunchImg,dinnerImg,snackImg];


const GoBackPage = () => {
  return (
    <ButtonStyle>
      <SvgArrowRight>
        <use href={sprite + '#icon-arrow-right'}></use>
      </SvgArrowRight>
    </ButtonStyle>
  );
};

const EditBtn = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [colorEdit, setColorEdit] = useState('white');

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setColorEdit(isEditing ? "red" : "white");
    console.log("toggleEditing");
    // setIdBtn(e.id);
    // console.log("e=",e);
  };

  return (
    <ButtonStyle onClick={toggleEditing} >
      <SvgEdit style={{ stroke: colorEdit }}>
        <use href={sprite + '#icon-edit-2'}></use>
      </SvgEdit>
      <TextSpan style={{ color: colorEdit }}> Edit</TextSpan>
    </ButtonStyle>
  );
};

const ModalDiaryBtn = () => {
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
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    setIsFocused(false);

  };

  return (
    <ButtonStyle
      onClick={handleClick}
      // className={`your-div ${isHovered || isFocused ? 'scroll-active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex="0"
    >
      {/* <TextIndexSpan style={ssds()}>+ Record your meal</TextIndexSpan> */}
      <TextIndexSpan style={(isHovered || isFocused) ? {fontSize: "18px"}  : {fontSize: "14px"}}>+ Record your meal</TextIndexSpan>
    </ButtonStyle>
  );
};

// const handleEdit = () => {
//   <Link to="/">
//     <GoBackPage/>
//   </Link>
// }

// const TitlePeriod = (indexList) => {
// function TitlePeriod(indexList) {
const TitlePeriod = (indexList) => {
  // downloadObjectAsJson(); 
  
  let data = {};
  let imgPeriod;
  let namePeriod;

  if (indexList.data === "b") {
    data = breakfast.slice(0,breakfast.length-1);
    imgPeriod = breakfastImg;
    namePeriod = "Breakfast";
  } else if (indexList.data === "l") {
    data = lunch.slice(0,lunch.length-1);
    imgPeriod = lunchImg;
    namePeriod = "Lunch";
  } else if (indexList.data === "d") {
    data = dinner.slice(0,dinner.length-1);
    imgPeriod = dinnerImg;
    namePeriod = "Dinner";
  } else if (indexList.data === "c") {
    data = snack.slice(0,snack.length-1);
    imgPeriod = snackImg;
    namePeriod = "Snack";
  }

  const sumCarb = Math.round(data.reduce((acc, val) => acc + val.carbohydrates, 0) * 100) / 100;
  const sumProt = Math.round(data.reduce((acc, val) => acc + val.protein, 0)*100)/100;
  const sumFat = Math.round(data.reduce((acc, val) => acc + val.fat, 0)*100)/100;
  
  return (    
    <>
      {/* <img src={breakfastImg} alt="Breakfast" />
      <NamePeriod>Breakfast</NamePeriod> */}
      <img src={imgPeriod} alt={namePeriod} />
      <NamePeriod>{namePeriod}</NamePeriod>
      
      <div style={{display: 'inline'}}>
        <IngredientSpan> Carbonohidrates: </IngredientSpan>
        <IngredientSpan>{sumCarb}</IngredientSpan>
      </div>
      <div style={{display: 'inline'}}>
        <IngredientSpan> Protein: </IngredientSpan>
        <IngredientSpan>{sumProt}</IngredientSpan>
      </div>
      <div style={{display: 'inline'}}>
        <IngredientSpan>Fat: </IngredientSpan>
        <IngredientSpan>{sumFat}</IngredientSpan>
      </div>
    </>
  );
}

// {windowInnerWidth < 863 ? "Carb.:" : "Carbonohidrates:"}
// const dayListFoot = [breakfastList,dinnertList,lunchList,snackList];
// const dayListFoot = ["breakfastList","dinnertList","lunchList","snackList"];





const FootListPeriod = (indexList) => {
  const [isEditing, setIsEditing] = useState(false);
  const [colorEdit, setColorEdit] = useState('white');
  
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
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // const [idBtn, setIdBtn] = useState('');


  
  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setColorEdit(isEditing ? "red" : "white");
    // console.log("toggleEditing");
  };
  
  
  let data = {};

  if (indexList.data === "b") {
    data = breakfast.slice(0,breakfast.length-1);
  } else if (indexList.data === "l") {
    data = lunch.slice(0,lunch.length-1);
  } else if (indexList.data === "d") {
    data = dinner.slice(0,dinner.length-1);
  } else if (indexList.data === "c") {
    data = snack.slice(0,snack.length-1);
  }

  const windowInnerWidth = document.documentElement.clientWidth
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
            <div style={{ display: "flex" }}>
              <ItemFoodIndex>{index + 1}</ItemFoodIndex>
              <label>
                <ItemFoodName type="text" defaultValue={item.name} readOnly={!isEditing}/>
              </label>
              {windowInnerWidth < 834 && "Carb. "}
              <label>
                <ItemFoodCarbon type="text" defaultValue={item.carbohydrates} readOnly={!isEditing}/>
              </label>
              {windowInnerWidth < 834 && "Prot. "}
              <label>                
                <ItemFoodProt type="text" defaultValue={item.protein} readOnly={!isEditing}/>
              </label>
              {windowInnerWidth < 834 && "Fat "}
              <label>                
                <ItemFoodFat type="text" defaultValue={item.fat} readOnly={!isEditing}/>
              </label>
              
              {/* <EditBtn className="2" onClick={toggleEditing} /> */}
              {/* <EditBtn id="2" onClick={toggleEditing} /> */}
              {/* <EditBtn id={indexList + index + "-" + item.id} onClick={toggleEditing} /> */}
              {/* <EditBtn onClick={toggleEditing} style={{stroke: colorEdit}} /> */}
              {/* <EditBtn /> */}
              <ButtonStyle onClick={toggleEditing}>
                <EditBtn />
              </ButtonStyle>
              {/* ButtonStyle */}
            </div>
          </Li>
        ))}
        <Li>{data.length + 1} <ModalDiaryBtn /> </Li> 
        {data.length < 3 && <Li>{"4"}</Li>}
        {data.length < 2 && <Li>{"3" }</Li>}
        {data.length < 1 && <Li>{"2" }</Li>}      
      </ul>
      </ListMeatContainer>
    </>
  );
}

// const FootToDo = () => {
const footToDo = (index) => {
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={index}/>
      </TitleDiv>
      <FootListPeriod data={index} />
    </div>
  )
}

const DiaryPage = () => {  
//   useEffect(() => {
// // // //     // Загружаем данные из JSON-файла при монтировании компонента
// // // //     // Замените путь на путь к вашему JSON-файлу
// // // //     // axios.get('./breakfast.json')
// // //   await axios.get(filePath)
// // //     .then((response) => {
// // // //         setData(response.data); // Устанавливаем данные в состояние
// // //       this.data = response;
// // //     })
// // //     .catch((error) => {
// // //       console.error('Ошибка при загрузке данных из JSON:', error);
// // //     });
//   }, []);  
  
  return (
    <>
      {/* <Link to="/signin"> */}
      <Link to="/">
        <GoBackPage/>
      </Link>
      <TitlePage>Diary</TitlePage>
      <SectionDiary>        
        {footToDo("b")}
        {footToDo("l")}
        {footToDo("d")}
        {footToDo("c")}
      </SectionDiary>
    </>
  );
};

export default DiaryPage;
