import icon from '../../../assets/images/icons/eyeClose.svg';
import { IconContainer } from './EyeHideIcon.styled';

export default function PasswordHideButtonIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Hide password" width="16" height="16" />
    </IconContainer>
  );
}
