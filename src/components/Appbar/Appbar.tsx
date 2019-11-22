import { IconButton, Toolbar, Typography } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBack';
import { get } from 'lodash/fp';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';
import { appbarQuery } from '../../containers/Appbar/types/appbarQuery';
import * as S from './styles';
interface Props {
  data?: appbarQuery;
}

const Appbar: FC<Props> = ({ data }): ReactElement => {
  const router = useRouter();

  const parentHref = get('activeRoute.parentHref', data) || null;
  const parentAs = get('activeRoute.parentAs', data) || null;

  return (
    <S.AppBarContent position="fixed">
      <Toolbar>
        <S.NavImgBlock onClick={() => router.push('/')}>
          <S.ImgLogo src="/static/images/logo/logo@192.png" />
          <S.ImgTitleHomerith src="/static/images/homerith-esport_white.png" />
        </S.NavImgBlock>

        {parentHref && (
          <Link href={parentHref} as={parentAs} passHref>
            <IconButton>
              <BackIcon />
            </IconButton>
          </Link>
        )}
        <Typography variant="h6" component="h2">
          {data && data.activeRoute && data.activeRoute.name}
        </Typography>
      </Toolbar>
    </S.AppBarContent>
  );
};

export default Appbar;
