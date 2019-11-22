import styled from 'styled-components';

export const BannerBlock = styled.div`
  background-image: url('/static/images/bandeau-bas.png');
  min-height: 500px;
  max-height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentBlock = styled.div`
  padding: 0 0 0 5%;
  display: flex;
  padding-top: 100px;
`;

export const ImgLogo = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
  opacity: 0.9;
  filter: alpha(opacity=90);
  max-width: 30%;
  height: auto;
`;

export const RightBanner = styled.div`
  font-size: 2rem;
  background-color: rgba(45, 45, 45, 0.7);
  border-radius: 50px 0px 0px;
  padding: 30px;
  height: fit-content;
  align-self: center;
  width: 100%;
  margin-left: 10%;
`;

export const TitleBanner = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const DescribBanner = styled.h2`
  color: white;
  font-size: 2rem;
  max-width: 800px;
`;
