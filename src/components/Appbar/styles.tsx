import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { FormatListBulleted } from '@material-ui/icons';
import styled from 'styled-components';

export const NavRight = styled.div`
  margin-left: auto;
`;

export const NavLeft = styled.div`
  margin-left: 100px;
`;

interface NavLinkProps {
  active?: boolean;
}

export const NavLink = styled<NavLinkProps>(Button)`
  margin-right: 20px;
  color: ${({ active }) => (active ? 'red' : 'white')};
  font-weight: 700;
  font-size: 1rem;
`;

export const NavLinkMobile = styled<NavLinkProps>(Button)`
  color: ${({ active }) => (active ? 'red' : 'black')};
  font-weight: 700;
  font-size: 1rem;
  display: block;
  margin-top: 10px;
  padding: 20px;
`;

export const AppBarContent = styled(AppBar)`
  background-color: rgba(45, 45, 45, 0.6);
  height: 80px;
`;

export const ImgLogo = styled.img`
  width: 90px;
`;

export const ImgTitleHomerith = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    display: none;
  }
  width: 350px;
`;

export const NavImgBlock = styled.div`
  display: contents;
  &:hover {
    cursor: pointer;
  }
`;

export const SvgCirclePlus = styled(FormatListBulleted)`
  fill: #fff;

  &:hover {
    fill: #ffc3bf;
  }
`;
