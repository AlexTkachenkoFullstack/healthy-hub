import { useEffect } from 'react';
import { Backdrop, Title, Modal } from './ErrorUserModal.styled';

export const ErrorUserModal = ({ isOpenModal, errorMessage }) => {
  const handleCloseModal = e => {
    (e.code === 'Escape' || e.currentTarget === e.target) && isOpenModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.documentElement.style.overflow = 'hidden';
    // document.body.scroll = 'no';
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.documentElement.style.overflow = 'auto';
      // document.body.scroll = 'yes';
    };
  });
  return (
    <Backdrop onClick={handleCloseModal}>
      <Modal>
        <Title>Sorry.</Title>
        <p>{errorMessage.response.data.message}</p>
      </Modal>
    </Backdrop>
  );
};
