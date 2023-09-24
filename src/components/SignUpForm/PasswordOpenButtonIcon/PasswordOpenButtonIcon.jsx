import icon from '../../../assets/images/icons/eyeOpen.svg';
import { IconContainer } from './PasswordOpenButtonIcon.styled';

export default function PasswordOpenButtonIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Open password" width="16" height="16" />
    </IconContainer>
  );
}
