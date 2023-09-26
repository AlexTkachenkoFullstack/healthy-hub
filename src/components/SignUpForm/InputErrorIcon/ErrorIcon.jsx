import icon from '../../../assets/images/icons/error.svg';
import { IconContainer } from './ErrorIcon.styled';

export default function InputErrorIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Error" width="16" height="16" />
    </IconContainer>
  );
}
