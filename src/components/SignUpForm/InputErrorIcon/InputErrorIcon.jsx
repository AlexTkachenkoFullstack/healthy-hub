import icon from '../../../assets/images/icons/error.svg';
import { IconContainer } from './InputErrorIcon.styled';

export default function InputErrorIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Close button" width="16" height="16" />
    </IconContainer>
  );
}
