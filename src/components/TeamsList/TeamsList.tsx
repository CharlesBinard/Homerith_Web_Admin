import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { FC } from 'react';
import { Team } from '../../global.types';
import * as S from './styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

type Props = {
  teams: Array<Team> | null;
  isLoading: boolean;
};

const TeamsList: FC<Props> = ({ teams, isLoading }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <h1>Teams List</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Logo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <p> Loading</p>}
          {teams &&
            teams.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.logo ? <S.ImgLogoTeam src={row.logo} /> : <p>No logo</p>}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TeamsList;
