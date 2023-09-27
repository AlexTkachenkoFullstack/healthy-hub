import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { postFoodIntake } from 'redux/diary/operations';

import {
  ModalOverlay,
  ModalDiv,
  NameField,
  Field,
  TitleText,
  FormDiv,
  Subtitle,
  SubtitleContainer,
  ButtonSubmit,
  ButtonStyle,
  ButtonContainer,
} from './RecordDiaryModal.styled';

import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
import breakfastImg2x from '../../assets/images/meal-periods/breakfast-2x.png';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
import lunchImg2x from '../../assets/images/meal-periods/lunch-2x.png';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
import dinnerImg2x from '../../assets/images/meal-periods/dinner-2x.png';
import snackImg from '../../assets/images/meal-periods/snack.png';
import snackImg2x from '../../assets/images/meal-periods/snack-2x.png';

const RecordDiaryModal = ({ onClose, type }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fields: [
      {
        ident: '1',
        name: '',
        carbonohidrates: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ],
  });

  const handleAddMore = e => {
    e.preventDefault();

    if (formData.fields[formData.fields.length - 1].name === '') {
      return;
    }

    setFormData({
      fields: [
        ...formData.fields,
        {
          ident: Date.now(),
          name: '',
          carbonohidrates: null,
          protein: null,
          fat: null,
          calories: null,
        },
      ],
    });
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleChange = (ident, fieldId, newValue) => {
    const updatedFields = formData.fields.map(field =>
      field.ident === ident ? { ...field, [fieldId]: newValue } : field
    );
    setFormData({ fields: updatedFields });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postFoodIntake({ type, products: formData.fields }));
    onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalDiv>
        <TitleText>Record your meal</TitleText>
        {type === 'breakfast' && (
          <SubtitleContainer>
            <img
              srcSet={`${breakfastImg} 1x, ${breakfastImg2x} 2x`}
              src={breakfastImg}
              alt="breakfast"
              width="32"
              height="32"
            />
            <Subtitle>Breakfast</Subtitle>
          </SubtitleContainer>
        )}
        {type === 'lunch' && (
          <SubtitleContainer>
            <img
              srcSet={`${lunchImg} 1x, ${lunchImg2x} 2x`}
              src={lunchImg}
              alt="lunch"
              width="32"
              height="32"
            />
            <Subtitle>Lunch</Subtitle>
          </SubtitleContainer>
        )}
        {type === 'dinner' && (
          <SubtitleContainer>
            <img
              srcSet={`${dinnerImg} 1x, ${dinnerImg2x} 2x`}
              src={dinnerImg}
              alt="dinner"
              width="32"
              height="32"
            />
            <Subtitle>Dinner</Subtitle>
          </SubtitleContainer>
        )}
        {type === 'snack' && (
          <SubtitleContainer>
            <img
              srcSet={`${snackImg} 1x, ${snackImg2x} 2x`}
              src={snackImg}
              alt="snack"
              width="32"
              height="32"
            />
            <Subtitle>Snack</Subtitle>
          </SubtitleContainer>
        )}
        <form onSubmit={handleSubmit}>
          {formData.fields.map(field => (
            <FormDiv key={field.ident}>
              <NameField
                id="name"
                type="string"
                required={true}
                value={field.name}
                onChange={e =>
                  handleChange(field.ident, 'name', e.target.value)
                }
                placeholder="The name of the product or dish"
              />
              <Field
                id="carbonohidrates"
                type="number"
                min={0}
                required={true}
                value={field.carbonohidrates}
                onChange={e =>
                  handleChange(field.ident, 'carbonohidrates', e.target.value)
                }
                placeholder="Carbonoh."
              />
              <Field
                id="protein"
                type="number"
                min={0}
                required={true}
                value={field.protein}
                onChange={e =>
                  handleChange(field.ident, 'protein', e.target.value)
                }
                placeholder="Protein"
              />
              <Field
                id="fat"
                type="number"
                min={0}
                required={true}
                value={field.fat}
                onChange={e => handleChange(field.ident, 'fat', e.target.value)}
                placeholder="Fat"
              />
              <Field
                id="calories"
                type="number"
                min={0}
                required={true}
                value={field.calories}
                onChange={e =>
                  handleChange(field.ident, 'calories', e.target.value)
                }
                placeholder="Calories"
              />
            </FormDiv>
          ))}

          <ButtonStyle onClick={handleAddMore}>+ Add more</ButtonStyle>
          <ButtonContainer>
            <ButtonSubmit
              onClick={onClose}
              style={{
                color: 'var(--text-color-secondary-grey)',
                background: 'transparent',
              }}
            >
              Cancel
            </ButtonSubmit>
            <ButtonSubmit type="submit">Confirm</ButtonSubmit>
          </ButtonContainer>
        </form>
      </ModalDiv>
    </ModalOverlay>
  );
};

export default RecordDiaryModal;
