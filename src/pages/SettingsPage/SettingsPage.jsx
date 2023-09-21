import { useSelector } from 'react-redux';
import { getUserInfo } from 'redux/auth/selectors';
import {
  SettingContainer,
  Container,
  Title,
  StyledImg,
} from './SettingsPage.styled';
import ProfileSettingPhoto from '../../assets/images/interactive-learning-experience.png';
import ProfileSettingPhoto2x from '../../assets/images/interactive-learning-experience-2x.png';

import UserInformation from 'components/UserInformation';

const SettingsPage = () => {
  const user = useSelector(getUserInfo);

  return (
    <SettingContainer>
      <Title>Profile setting</Title>
      <Container>
        <StyledImg
          srcSet={`${ProfileSettingPhoto} 1x, ${ProfileSettingPhoto2x} 2x`}
          src={ProfileSettingPhoto}
          alt="Profile Setting Photo"
        />
        <UserInformation user={user} />
      </Container>
    </SettingContainer>
  );
};

export default SettingsPage;
