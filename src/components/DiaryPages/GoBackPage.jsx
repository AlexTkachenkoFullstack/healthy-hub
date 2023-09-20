import React from 'react';
import {
  ButtonStyle,
  SvgArrowRight
} from './DiaryPage.styled';
import sprite from '../../assets/images/icons/icons.svg';

const GoBackPage = () => {
  return (
    <ButtonStyle>
      <SvgArrowRight>
        <use href={sprite + '#icon-arrow-right'}></use>
      </SvgArrowRight>
    </ButtonStyle>
  );
};

export default GoBackPage;