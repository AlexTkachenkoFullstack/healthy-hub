import { useState, useEffect } from 'react';
import CloseModalButton from '../CloseModalButton/CloseModalButton';
import {
  Overlay,
  TargetLayout,
  TargetContainer,
  MobileTargetContainer,
  Title,
  Subtitle,
  RadioForm,
  SubmitButton,
  RadioInput,
  RadioLabel,
  CheckedRadioLabel,
  ImageContainer,
  CheckedImageContainer,
  RadioContainer,
  CancelButton,
} from './TargetSelectionModal.styled';

import LoseFatGirl from '../../../assets/images/emoji/lose-fat-girl.png';
import LoseFatGirl2x from '../../../assets/images/emoji/lose-fat-girl-2x.png';
import LoseFatMan from '../../../assets/images/emoji/lose-fat-men.png';
import LoseFatMan2x from '../../../assets/images/emoji/lose-fat-men-2x.png';
import GainMuscule from '../../../assets/images/emoji/gain-muscle.png';
import GainMuscule2x from '../../../assets/images/emoji/gain-muscle-2x.png';
import MaintainGirl from '../../../assets/images/emoji/maintake-girl.png';
import MaintainGirl2x from '../../../assets/images/emoji/maintake-girl-2x.png';
import MaintainMan from '../../../assets/images/emoji/maintake-men.png';
import MaintainMan2x from '../../../assets/images/emoji/maintake-men-2x.png';

export default function TargetSelectionModal({ gender, onClose }) {
  const [goal, setGoal] = useState('Lose Fat');

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

  const onSubmit = event => {
    event.preventDefault();
    console.log(goal);
    onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <TargetLayout>
        <TargetContainer>
          <MobileTargetContainer>
            <CloseModalButton onClose={onClose} />
            <Title>Target selection</Title>
            <Subtitle>
              The service will adjust your calorie <br /> intake to your goal
            </Subtitle>
            <RadioForm onSubmit={onSubmit}>
              {goal === 'Lose Fat' ? (
                <RadioContainer>
                  <CheckedImageContainer>
                    {gender === 'Female' ? (
                      <img
                        srcSet={`${LoseFatGirl} 1x, ${LoseFatGirl2x} 2x`}
                        src={LoseFatGirl}
                        alt="Lose Fat Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${LoseFatMan} 1x, ${LoseFatMan2x} 2x`}
                        src={LoseFatMan}
                        alt="Lose Fat Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </CheckedImageContainer>
                  <CheckedRadioLabel htmlFor="lose">Lose fat</CheckedRadioLabel>
                </RadioContainer>
              ) : (
                <RadioContainer>
                  <ImageContainer>
                    {gender === 'Female' ? (
                      <img
                        srcSet={`${LoseFatGirl} 1x, ${LoseFatGirl2x} 2x`}
                        src={LoseFatGirl}
                        alt="Lose Fat Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${LoseFatMan} 1x, ${LoseFatMan2x} 2x`}
                        src={LoseFatMan}
                        alt="Lose Fat Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </ImageContainer>
                  <RadioLabel htmlFor="lose">Lose fat</RadioLabel>
                </RadioContainer>
              )}

              <RadioInput
                id="lose"
                type="radio"
                name="goal"
                value="Lose Fat"
                checked={goal === 'Lose Fat'}
                onChange={() => setGoal('Lose Fat')}
              />
              {goal === 'Maintain' ? (
                <RadioContainer>
                  <CheckedImageContainer>
                    {gender === 'Female' ? (
                      <img
                        srcSet={`${MaintainGirl} 1x, ${MaintainGirl2x} 2x`}
                        src={MaintainGirl}
                        alt="Lose Fat Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${MaintainMan} 1x, ${MaintainMan2x} 2x`}
                        src={MaintainMan}
                        alt="Lose Fat Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </CheckedImageContainer>
                  <CheckedRadioLabel htmlFor="maintain">
                    Maintain
                  </CheckedRadioLabel>
                </RadioContainer>
              ) : (
                <RadioContainer>
                  <ImageContainer>
                    {gender === 'Female' ? (
                      <img
                        srcSet={`${MaintainGirl} 1x, ${MaintainGirl2x} 2x`}
                        src={MaintainGirl}
                        alt="Lose Fat Girl"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        srcSet={`${MaintainMan} 1x, ${MaintainMan2x} 2x`}
                        src={MaintainMan}
                        alt="Lose Fat Man"
                        width="20"
                        height="20"
                      />
                    )}
                  </ImageContainer>
                  <RadioLabel htmlFor="maintain">Maintain</RadioLabel>
                </RadioContainer>
              )}
              <RadioInput
                id="maintain"
                type="radio"
                name="goal"
                value="Maintain"
                checked={goal === 'Maintain'}
                onChange={() => setGoal('Maintain')}
              />
              {goal === 'Gain Muscle' ? (
                <RadioContainer>
                  <CheckedImageContainer>
                    <img
                      srcSet={`${GainMuscule} 1x, ${GainMuscule2x} 2x`}
                      src={GainMuscule}
                      alt="Lose Fat Girl"
                      width="20"
                      height="20"
                    />
                  </CheckedImageContainer>
                  <CheckedRadioLabel htmlFor="gain">
                    Gain Muscle
                  </CheckedRadioLabel>
                </RadioContainer>
              ) : (
                <RadioContainer>
                  <ImageContainer>
                    <img
                      srcSet={`${GainMuscule} 1x, ${GainMuscule2x} 2x`}
                      src={GainMuscule}
                      alt="Lose Fat Girl"
                      width="20"
                      height="20"
                    />
                  </ImageContainer>
                  <RadioLabel htmlFor="gain">Gain Muscle</RadioLabel>
                </RadioContainer>
              )}
              <RadioInput
                id="gain"
                type="radio"
                name="goal"
                value="Gain Muscle"
                checked={goal === 'Gain Muscle'}
                onChange={() => setGoal('Gain Muscle')}
              />
              <SubmitButton type="submit">Confirm</SubmitButton>
            </RadioForm>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </MobileTargetContainer>
        </TargetContainer>
      </TargetLayout>
    </Overlay>
  );
}
