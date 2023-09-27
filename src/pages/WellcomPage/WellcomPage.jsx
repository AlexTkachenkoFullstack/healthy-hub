import {
  ImageContainerLog,
  TextTitle,
  Text,
  ButtonSignIn,
  ButtonSignUp,
  CustomList,
  Item,
  MarkerIcon,
  ContainerText,
  NavItem,
  WellcomeContainer,
} from './WellcomPage.styled';

import WelcomeImageDesctop from '../../assets/images/sport-and-fitness-tracker.png';
import WelcomeImageDesctop2k from '../../assets/images/sport-and-fitness-tracker-2x.png';

const WellcomPage = () => {
  return (
    <>
      <WellcomeContainer>
        <ImageContainerLog
          srcSet={`${WelcomeImageDesctop} 1x, ${WelcomeImageDesctop2k} 2x`}
          src={WelcomeImageDesctop}
          alt="Welcome page photo Photo"
        />
        <ContainerText>
          <TextTitle>Set goals and achieve them</TextTitle>
          <Text>
            The service will help you set goals <br /> and follow them.
          </Text>
          <NavItem>
            <ButtonSignIn to="/signin">Sign in</ButtonSignIn>
            <ButtonSignUp to="/signup">Sign up</ButtonSignUp>
          </NavItem>
          <CustomList>
            <Item>
              <MarkerIcon />
              Set goals
            </Item>
            <Item>
              <MarkerIcon />
              Watch your calories
            </Item>
            <Item>
              <MarkerIcon />
              Keep track of your water intake
            </Item>
            <Item>
              <MarkerIcon />
              Control your weight
            </Item>
          </CustomList>
        </ContainerText>
      </WellcomeContainer>
    </>
  );
};

export default WellcomPage;
