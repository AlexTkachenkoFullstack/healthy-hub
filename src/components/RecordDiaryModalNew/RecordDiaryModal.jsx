import { useState } from 'react';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
import breakfastImg2x from '../../assets/images/meal-periods/breakfast-2x.png';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
import lunchImg2x from '../../assets/images/meal-periods/lunch-2x.png';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
import dinnerImg2x from '../../assets/images/meal-periods/dinner-2x.png';
import snackImg from '../../assets/images/meal-periods/snack.png';
import snackImg2x from '../../assets/images/meal-periods/snack-2x.png';
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
import { useDispatch } from 'react-redux';
import { postFoodIntake } from 'redux/diary/operations';

const RecordDiaryModal = ({ onClose, type }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fields: [
      {
        id: '1',
        name: '',
        carb: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ],
  });

  const handleAddMore = e => {
    e.preventDefault();

    if (formData.fields[formData.fields.length - 1].name === '') {
      console.log('enter all fields');
      return;
    }

    setFormData({
      fields: [
        ...formData.fields,
        {
          id: Date.now(),
          name: '',
          carb: null,
          protein: null,
          fat: null,
          calories: null,
        },
      ],
    });
  };

  const handleChange = (id, fieldId, newValue) => {
    const updatedFields = formData.fields.map(field =>
      field.id === id ? { ...field, [fieldId]: newValue } : field
    );
    setFormData({ fields: updatedFields });
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await dispatch(postFoodIntake(formData.fields));
  //     if (postFoodIntake.fulfilled.match(response)) {
  //       console.log('Дані успішно відправлено на бекенд.');
  //       onClose();
  //     } else if (postFoodIntake.rejected.match(response)) {
  //       console.error(
  //         'Помилка відправки даних на бекенд:',
  //         response.error.message
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Помилка під час відправки даних:', error);
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(type, formData.fields);
    dispatch(postFoodIntake({ type, products: formData.fields }));
    onClose();
  };

  return (
    <ModalOverlay>
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
            <FormDiv key={field.id}>
              <NameField
                id="name"
                type="string"
                required={true}
                value={field.name}
                onChange={e => handleChange(field.id, 'name', e.target.value)}
                placeholder="The name of the product or dish"
              />
              <Field
                id="carb"
                type="number"
                min={0}
                required={true}
                value={field.carb}
                onChange={e => handleChange(field.id, 'carb', e.target.value)}
                placeholder="Carbonoh."
              />
              <Field
                id="protein"
                type="number"
                min={0}
                required={true}
                value={field.protein}
                onChange={e =>
                  handleChange(field.id, 'protein', e.target.value)
                }
                placeholder="Protein"
              />
              <Field
                id="fat"
                type="number"
                min={0}
                required={true}
                value={field.fat}
                onChange={e => handleChange(field.id, 'fat', e.target.value)}
                placeholder="Fat"
              />
              <Field
                id="calories"
                type="number"
                min={0}
                required={true}
                value={field.calories}
                onChange={e =>
                  handleChange(field.id, 'calories', e.target.value)
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
