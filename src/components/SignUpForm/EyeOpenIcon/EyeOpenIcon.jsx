import { IconContainer } from './EyeOpenIcon.styled';
import icon from '../../../assets/images/icons/eyeOpen.svg';

export default function PasswordOpenButtonIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Open password" width="16" height="16" />
    </IconContainer>
  );
}
