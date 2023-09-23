import closeIcon from '../../../assets/images/icons/eyeClose.svg';
import { IconContainer } from './PasswordClosedButtonIcon.styled';

export default function InputSuccessIcon() {
  return (
    <IconContainer>
      <img src={closeIcon} alt="Close button" width="16" height="16" />
    </IconContainer>
  );
}
