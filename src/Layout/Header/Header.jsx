import HeaderModalButton from './HeaderModalButton/HeaderModalButton';
import {
  HeaderContainer,
  LogoNavContainer,
  Logo,
  Container,
  Navigation,
  StyledLink,
  ProfileSvg,
  AuthContainer,
  MenuButton,
  MenuSvg,
  HeaderButtonContainer,
  UserName,
  UserInfoButton,
  UserSvg,
} from './Header.styled';
import sprite from '../../assets/images/icons/icons.svg';

const Header = () => {
  let isAuth = false; // замінити на значення зі стейту
  let gender = 'Female'; //Female, Male
  let goal = 'Lose Fat'; //Lose Fat, Maintain, Gain Muscle
  let weight = 55;
  let name = 'Nadiia';

  return (
    <HeaderContainer>
      <Container className="container">
        {isAuth ? (
          <LogoNavContainer>
            <Logo to="/">HealthyHub</Logo>
            <MenuButton
              type="button"
              onClick={() => console.log('open mobile menu')}
            >
              <MenuSvg>
                <use href={sprite + '#icon-menu'} />
              </MenuSvg>
            </MenuButton>
          </LogoNavContainer>
        ) : (
          <Logo to="/">HealthyHub</Logo>
        )}

        {isAuth ? (
          <AuthContainer>
            <HeaderButtonContainer>
              <HeaderModalButton
                gender={gender}
                goal={goal}
                buttonType="goal"
                onClick={() => console.log('open goal pop-up')}
              />
              <HeaderModalButton
                buttonType="weight"
                weight={weight}
                onClick={() => console.log('open weight pop-up')}
              />
            </HeaderButtonContainer>

            <UserInfoButton
              type="button"
              onClick={() => console.log('open user pop-up')}
            >
              <UserName>{name}</UserName>
              <UserSvg>
                <use href={sprite + '#icon-profile-circle'} />
              </UserSvg>
              <svg width="14" height="14" stroke="var(--icon-color-green)">
                <use href={sprite + '#icon-add'} />
              </svg>
            </UserInfoButton>
          </AuthContainer>
        ) : (
          <Navigation>
            <StyledLink to="/signin">Sign in</StyledLink>
            <span>/</span>
            <StyledLink to="/signup">Sign up</StyledLink>
            <ProfileSvg>
              <use href={sprite + '#icon-profile-circle'} />
            </ProfileSvg>
          </Navigation>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
