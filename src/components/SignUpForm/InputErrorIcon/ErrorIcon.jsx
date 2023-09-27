import { IconContainer } from './ErrorIcon.styled';
import icon from '../../../assets/images/icons/error.svg';

export default function InputErrorIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Error" width="16" height="16" />
    </IconContainer>
  );
}
