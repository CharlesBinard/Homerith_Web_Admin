import React, { FC } from 'react';
import * as S from './style';

const InfoBanner: FC = () => {
  return (
    <S.BannerBlock>
      <S.ContentBlock>
        <S.ImgLogo src="/static/images/logo/logo.png" />
        <S.RightBanner>
          <S.TitleBanner>Homerith</S.TitleBanner>
          <S.DescribBanner> Le debut d une aventure Gaming et Esport</S.DescribBanner>
        </S.RightBanner>
      </S.ContentBlock>
    </S.BannerBlock>
  );
};

export default InfoBanner;
