import { CloseButton } from './CloseModalButton.styled';
import closeIcon from '../../../assets/images/icons/error.svg';

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
