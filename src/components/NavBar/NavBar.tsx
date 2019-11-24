import { useApolloClient } from '@apollo/react-hooks';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/ArrowBack';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { get } from 'lodash/fp';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import { compose } from 'recompose';
import { GetActiveRouteQuery, User } from '../../global.types';
import { withAuth } from '../../lib/auth';
import { logout } from '../../lib/auth/auth-helpers';
import CachePersistorContext from '../CachePersistorContext';
import useStyles from './useStyles';

interface Props {
  data?: GetActiveRouteQuery;
  loggedInUser: User;
}

const NavBar: FC<Props> = ({ data, loggedInUser }) => {
  const classes = useStyles({});
  const theme = useTheme();
  const router = useRouter();

  const client = useApolloClient();
  const persistor = useContext(CachePersistorContext);

  const parentHref = get('activeRoute.parentHref', data) || null;
  const parentAs = get('activeRoute.parentAs', data) || null;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
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
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => router.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => router.push('/teams')}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Teams" />
          </ListItem>
        </List>

        {loggedInUser && (
          <>
            <Divider />
            <List>
              <ListItem button onClick={() => logout(client, persistor)}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default compose(withAuth)(NavBar);
