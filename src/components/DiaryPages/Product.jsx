import React from "react";
import sprite from '../../assets/images/icons/icons.svg';
import { ButtonStyle, SvgEdit, TextSpan } from "./DiaryPage.styled";

const Product = () => {
  return (
    <>
    <div styl>

      <h2>Тут буде страва</h2>
      <ButtonStyle>
      <SvgEdit>
        <use href={sprite + '#icon-edit-2'}></use>
      </SvgEdit>
      <TextSpan> Edit</TextSpan>
    </ButtonStyle>
    </div>
    </>
  );
};

export default Product;