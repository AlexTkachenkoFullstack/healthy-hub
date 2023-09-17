import sprite from '../../../assets/images/icons/icons.svg';
import { CloseButton } from './CloseModalButton.styled';

export default function CloseModalButton({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <svg width="16" height="16" stroke="var(--text-color-button-grey)">
        <use href={sprite + '#icon-close-circle'} />
      </svg>
    </CloseButton>
  );
}
