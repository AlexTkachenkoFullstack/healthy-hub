import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Overlay,
  UserLayout,
  UserContainer,
  UserButton,
  Svg,
  CancelButton,
} from './UserInfoModal.styled';
import sprite from '../../../assets/images/icons/icons.svg';

export default function UserInfoModal({ onClose }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleSettings = () => {
    navigate('/settings');
    onClose();
  };

  const onShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const onLogout = () => {
    console.log('Log out');
    onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <UserLayout>
        <UserContainer>
          {showConfirmation ? (
            <>
              <UserButton type="button" onClick={onLogout}>
                <Svg>
                  <use href={sprite + '#icon-logout'} />
                </Svg>
                Log out
              </UserButton>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
            </>
          ) : (
            <>
              <UserButton type="button" onClick={handleSettings}>
                <Svg>
                  <use href={sprite + '#icon-setting-2'} />
                </Svg>
                Setting
              </UserButton>
              <UserButton type="button" onClick={onShowConfirmation}>
                <Svg>
                  <use href={sprite + '#icon-logout'} />
                </Svg>
                Log out
              </UserButton>
            </>
          )}
        </UserContainer>
      </UserLayout>
    </Overlay>
  );
}
