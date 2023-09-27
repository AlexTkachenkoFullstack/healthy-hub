import { IconContainer } from './EyeHideIcon.styled';
import icon from '../../../assets/images/icons/eyeClose.svg';

export default function PasswordHideButtonIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Hide password" width="16" height="16" />
    </IconContainer>
  );
}
