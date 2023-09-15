import {
  Button,
  ImageContainer,
  ButtonTextContainer,
  ButtonName,
  ButtonDescription,
  EditWeightContainer,
  Kg,
  Svg,
  SvgGoal,
} from './HeaderModalButton.styled';
import sprite from '../../../assets/images/icons/icons.svg';
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
import Weight from '../../../assets/images/emoji/waight.png';
import Weight2x from '../../../assets/images/emoji/waight-2x.png';

export default function HeaderModalButton({
  gender,
  goal,
  buttonType,
  weight,
  onClick,
}) {
  return (
    <>
      {buttonType === 'goal' && (
        <Button type="button" onClick={onClick}>
          {goal === 'Lose Fat' && (
            <ImageContainer>
              {gender === 'Female' ? (
                <img
                  srcset={`${LoseFatGirl} 1x, ${LoseFatGirl2x} 2x`}
                  src={LoseFatGirl}
                  alt="Lose Fat Girl"
                  width="28"
                  height="28"
                />
              ) : (
                <img
                  srcset={`${LoseFatMan} 1x, ${LoseFatMan2x} 2x`}
                  src={LoseFatMan}
                  alt="Lose Fat Man"
                  width="28"
                  height="28"
                />
              )}
            </ImageContainer>
          )}
          {goal === 'Maintain' && (
            <ImageContainer>
              {gender === 'Female' ? (
                <img
                  srcset={`${MaintainGirl} 1x, ${MaintainGirl2x} 2x`}
                  src={MaintainGirl}
                  alt="Maintain Girl"
                  width="28"
                  height="28"
                />
              ) : (
                <img
                  srcset={`${MaintainMan} 1x, ${MaintainMan2x} 2x`}
                  src={MaintainMan}
                  alt="Maintain Man"
                  width="28"
                  height="28"
                />
              )}
            </ImageContainer>
          )}
          {goal === 'Gain Muscle' && (
            <ImageContainer>
              <img
                srcset={`${GainMuscule} 1x, ${GainMuscule2x} 2x`}
                src={GainMuscule}
                alt="Gain Muscle"
                width="28"
                height="28"
              />
            </ImageContainer>
          )}
          <ButtonTextContainer>
            <ButtonName>Goal</ButtonName>
            <ButtonDescription>
              {goal}
              <SvgGoal>
                <use href={sprite + '#icon-arrow-down'} />
              </SvgGoal>
            </ButtonDescription>
          </ButtonTextContainer>
        </Button>
      )}
      {buttonType === 'weight' && (
        <Button type="button" onClick={onClick}>
          <ImageContainer>
            <img
              srcset={`${Weight} 1x, ${Weight2x} 2x`}
              src={Weight}
              alt="Weight"
              width="28"
              height="28"
            />
          </ImageContainer>
          <ButtonTextContainer>
            <ButtonName>Weight</ButtonName>
            <EditWeightContainer>
              <ButtonDescription>
                {weight}
                <Kg>kg</Kg>
              </ButtonDescription>
              <Svg>
                <use href={sprite + '#icon-edit-2'} />
              </Svg>
            </EditWeightContainer>
          </ButtonTextContainer>
        </Button>
      )}
    </>
  );
}
