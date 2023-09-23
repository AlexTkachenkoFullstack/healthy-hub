import closeIcon from '../../../assets/images/icons/correct.svg';
import { InputSuccessIconStyle } from './InputSuccessIcon.styled';

export default function InputSuccessIcon() {
  return (
    <InputSuccessIconStyle>
      <img src={closeIcon} alt="Close button" width="16" height="16" />
    </InputSuccessIconStyle>
  );
}
