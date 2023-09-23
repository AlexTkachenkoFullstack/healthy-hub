import closeIcon from '../../../assets/images/icons/correct.svg';
import { ButtonStyle } from './SuccessButton.styled';

export default function SuccessButton() {
  return (
    <ButtonStyle>
      <img
        src={closeIcon}
        alt="Close button"
        width="16"
        height="16"
        stroke="red"
      />
    </ButtonStyle>
  );
}
