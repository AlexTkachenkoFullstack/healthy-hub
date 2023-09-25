import React, { useState } from 'react';
import {
  // ButtonStyle,
  SvgEdit,
  TextSpan
} from './DiaryPage.styled';
import sprite from '../../assets/images/icons/icons.svg';

const EditBtn = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [colorEdit, setColorEdit] = useState('white');

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setColorEdit(isEditing ? 'red' : 'white');

    console.log('toggleEditing', colorEdit);
    // setIdBtn(e.id);
    // console.log("e=",e);
  };

  return (
    // <ButtonStyle onClick={toggleEditing}>
    <div onClick={toggleEditing} style={{ display: "flex", alignItems: "center" }}>
      <SvgEdit style={{ stroke: colorEdit }}>
        <use href={sprite + '#icon-edit-2'}></use>
      </SvgEdit>
      <TextSpan style={{ color: colorEdit }}> Edit</TextSpan>
      {/* </ButtonStyle> */}
    </div>
  );
};


export default EditBtn;