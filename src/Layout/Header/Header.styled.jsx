import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);
  padding: 11px 0;

  @media (min-width: 834px) {
    padding: 26px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled(NavLink)`
  padding: 8px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.45;
  color: var(--text-color-secondary-grey);

  @media (min-width: 834px) {
    font-size: 22px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 12px;
  line-height: 1.43;
  color: var(--text-color-primary-white);

  &.active {
    color: var(--text-color-active-page-green);
  }

  @media (min-width: 834px) {
    font-size: 14px;
  }
`;

export const ProfileSvg = styled.svg`
  width: 26px;
  height: 26px;
  stroke: var(--icon-color-white);

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 834px) {
    gap: 72px;
  }

  @media (min-width: 1440px) {
    gap: 124px;
  }
`;

export const MenuButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  background: transparent;
`;

export const MenuSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--icon-color-green);

  @media (min-width: 834px) {
    display: none;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 80px;
  }
`;

export const UserInfoButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  background: transparent;
`;

export const UserName = styled.p`
  font-size: 12px;
  line-height: 1.43;
  color: var(--text-color-primary-white);
  margin-right: 6px;

  @media (min-width: 834px) {
    font-size: 14px;
  }
`;

export const UserSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--icon-color-white);
  margin-right: 4px;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const UserAvatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;
