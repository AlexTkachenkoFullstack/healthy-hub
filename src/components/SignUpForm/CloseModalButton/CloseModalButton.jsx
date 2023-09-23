import closeIcon from '../../../assets/images/icons/error.svg';
import { CloseButton } from './CloseModalButton.styled';

export default function CloseModalButton({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <svg width="16" height="16" stroke="red">
        <use href={closeIcon} />
      </svg>
    </CloseButton>
  );
}
