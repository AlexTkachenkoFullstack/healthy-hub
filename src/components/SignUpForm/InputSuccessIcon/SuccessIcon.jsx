import { IconContainer } from './SuccessIcon.styled';
import icon from '../../../assets/images/icons/correct.svg';

export default function InputSuccessIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Success" width="16" height="16" />
    </IconContainer>
  );
}
