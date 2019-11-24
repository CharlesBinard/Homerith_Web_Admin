import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, ReactElement } from 'react';
import Div100vh from 'react-div-100vh';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import NavBar from '../../containers/Navbar';
import { useAuth } from '../../lib/auth';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto auto',
    },
    content: {
      '-webkit-overflow-scrolling': 'touch',
      position: 'relative',
      marginTop: 64,
      marginLeft: 72,
      padding: 15,
    },
  }),
);

interface Props {
  children: ReactElement;
}

const Wrapper: FC<Props> = ({ children }: Props) => {
  const [{ data }] = useAuth();
  const classes = useStyles();

  return (
    <Div100vh as="main" className={classes.box}>
      {data.me && <NavBar />}
      <ScrollLock />
      <TouchScrollable>
        <div id="primaryContent" className={classes.content}>
          {children}
        </div>
      </TouchScrollable>
    </Div100vh>
  );
};

export default Wrapper;
