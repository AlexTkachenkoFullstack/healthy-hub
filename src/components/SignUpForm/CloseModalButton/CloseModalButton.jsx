import closeIcon from '../../../assets/images/icons/error.svg';
import { CloseButton } from './CloseModalButton.styled';

export default function CloseModalButton({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <img
        src={closeIcon}
        alt="Close button"
        width="16"
        height="16"
        stroke="red"
      />
    </CloseButton>
  );
}
