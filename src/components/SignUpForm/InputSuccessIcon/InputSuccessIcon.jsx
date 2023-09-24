import icon from '../../../assets/images/icons/correct.svg';
import { IconContainer } from './InputSuccessIcon.styled';

export default function InputSuccessIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Success" width="16" height="16" />
    </IconContainer>
  );
}
