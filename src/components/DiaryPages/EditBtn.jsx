import React from 'react';
import {
  ButtonStyle,
  SvgEdit,
  TextSpan
} from './DiaryPage.styled';
import sprite from '../../assets/images/icons/icons.svg';

const EditBtn = () => {
  return (
    <ButtonStyle >
      <SvgEdit style={{transform: "rotate(0deg)"}}>
        <use href={sprite + '#icon-edit-2'}></use>
      </SvgEdit>
      <TextSpan> Edit</TextSpan>
    </ButtonStyle>
  );
};

export default EditBtn;