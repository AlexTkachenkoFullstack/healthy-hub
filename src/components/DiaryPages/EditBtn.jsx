import React from 'react';
import { ButtonStyle, SvgEdit } from './DiaryPage.styled';
import sprite from '../../assets/images/icons/icons.svg';

const EditBtn = ({ onClick }) => {
  return (
    <ButtonStyle
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        color: 'var(--text-color-secondary-grey)',
        fontSize: 14,
      }}
    >
      <SvgEdit style={{ transform: 'rotate(0deg)' }}>
        <use href={sprite + '#icon-edit-2'}></use>
      </SvgEdit>
      Edit
    </ButtonStyle>
  );
};

export default EditBtn;
