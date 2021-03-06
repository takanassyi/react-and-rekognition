import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  // colors,
} from '@material-ui/core';
import { Result, ResultProps } from 'utils/utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      padding: theme.spacing(1),
    },
  }),
);

const DisplayResult: React.FC<ResultProps> = (props: ResultProps) => {
  const classes = useStyles();

  const { items } = props;

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h5">Result - Rekognition</Typography>
      </Grid>
      <Grid item sm={12}>
        <Grid container>
          {items.map((result: Result) => (
            <Paper
              className={classes.paper}
              key={result.id}
              square
              variant="outlined"
            >
              <Typography>{result.text}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DisplayResult;
