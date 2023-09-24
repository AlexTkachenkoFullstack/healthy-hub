import icon from '../../../assets/images/icons/eyeClose.svg';
import { IconContainer } from './PasswordClosedButtonIcon.styled';

export default function PasswordClosedButtonIcon() {
  return (
    <IconContainer>
      <img src={icon} alt="Close button" width="16" height="16" />
    </IconContainer>
  );
}
