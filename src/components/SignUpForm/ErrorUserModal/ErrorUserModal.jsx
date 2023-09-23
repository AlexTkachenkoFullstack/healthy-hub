import { useEffect } from 'react';
import { Backdrop, Modal } from './ErrorUserModal.styled';
import CloseModalButton from '../CloseModalButton/CloseModalButton';

export const ErrorUserModal = ({ isOpenModal, errorMessage, children }) => {
  const handleCloseModal = e => {
    (e.code === 'Escape' || e.currentTarget === e.target) && isOpenModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.documentElement.style.overflow = 'auto';
    };
  });
  return (
    <Backdrop onClick={handleCloseModal}>
      <Modal>
        <CloseModalButton onClose={isOpenModal} />
        {children}
      </Modal>
    </Backdrop>
  );
};
