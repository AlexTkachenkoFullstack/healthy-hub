import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useState } from 'react';
import { getMonthOrYear } from 'utils/DashBoard/getMonthOrYear';
import {
  SelectFrame,
  SelectAndBackWrapper,
  DateTitle,
  ArrowWrap,
} from './SelectPeriod.styled';

export const SelectPeriod = ({ onChange, data }) => {
  const [toggleSelect, setToggleSelect] = useState({
    value: 'lastYear',
    label: 'Last Year',
  });

  const changeOption = () => {
    if (toggleSelect.value === 'lastMonth') {
      setToggleSelect({
        value: 'lastYear',
        label: 'Last Year',
      });
    }
    if (toggleSelect.value === 'lastYear') {
      setToggleSelect({
        value: 'lastMonth',
        label: 'Last Month',
      });
    }
    onChange(toggleSelect);

    return;
  };

  const options = [toggleSelect];

  return (
    <SelectFrame>
      <SelectAndBackWrapper>
        <Link to={'/'}>
          <ArrowWrap
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </Link>
        <Select
          defaultValue={{ value: 'lastMonth', label: 'Last Month' }}
          onChange={() => changeOption()}
          menuPosition="fixed"
          options={options}
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              backgroundColor: 'rgba(5, 5, 5, 1)',
              border: 'none',
              placeHolder: 'none',
            }),
            indicatorSeparator: () => ({
              display: 'none',
            }),

            option: () => ({
              width: '212px',
              height: '64px',
              margin: '0',
              paddingLeft: '12px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              borderRadius: '12px',
              backgroundColor: 'rgba(5, 5, 5, 1)',
            }),
            menu: () => ({
              width: '212px',
              height: '64px',
              borderRadius: '12px',
              boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
              cursor: 'pointer',
              position: 'absolute',
            }),
            singleValue: () => ({
              margin: '0',
            }),
            valueContainer: () => ({
              padding: '0px',
            }),

            dropdownIndicator: baseStyles => ({
              color: 'rgba(227, 255, 168, 1)',
              marginLeft: '12px',
            }),
            placeholder: () => ({
              display: 'none',
            }),
            input: () => ({
              display: 'none',
              padding: '0px',
            }),
          }}
        />
      </SelectAndBackWrapper>
      <DateTitle>{data && getMonthOrYear(data, toggleSelect.value)}</DateTitle>
    </SelectFrame>
  );
};

// getMonthOrYear(data, toggleSelect.value);
