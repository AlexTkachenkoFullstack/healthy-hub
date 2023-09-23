import closeIcon from '../../../assets/images/icons/eyeOpen.svg';
import { IconContainer } from './PasswordOpenButtonIcon.styled';

export default function InputSuccessIcon() {
  return (
    <IconContainer>
      <img src={closeIcon} alt="Close button" width="16" height="16" />
    </IconContainer>
  );
}
