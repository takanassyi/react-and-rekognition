import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { AppBar, Link, Typography } from '@material-ui/core';

const muiTheme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 800,
      fontFamily: ['sans-serif'].join(','),
    },
    fontFamily: [
      'Noto Sans JP',
      'Lato',
      '游ゴシック Medium',
      '游ゴシック体',
      'Yu Gothic Medium',
      'YuGothic',
      'ヒラギノ角ゴ ProN',
      'Hiragino Kaku Gothic ProN',
      'メイリオ',
      'Meiryo',
      'ＭＳ Ｐゴシック',
      'MS PGothic',
      'sans-serif',
    ].join(','),
  },
  palette: {
    mode: 'light', // dark is "dark mode"
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      padding: theme.spacing(2),
      Height: '200px',
    },
  }),
);

// Link => eslint を disable にする必要がある？
// 参考：https://next.material-ui.com/components/links/#main-content
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Copyright = () => (
  <Typography variant="body2" align="center">
    {'Copyright © '}
    {new Date().getFullYear()}
    <Link href="https://github.com/takanassyi/react-and-rekognition">
      {' '}
      takanassyi{' '}
    </Link>
    All rights reserved.
  </Typography>
);

export interface GenericTemplateProps {
  children: React.ReactNode;
}

const GenericTemplate: React.FC<GenericTemplateProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div>
        <header>
          <AppBar position="static" className={classes.appbar}>
            <Typography variant="h6">
              Image Classification Example (React Frontend App Ver.)
            </Typography>
          </AppBar>
        </header>
      </div>
      <div>
        <main>{children}</main>
      </div>
      <div>
        <footer>
          <Copyright />
        </footer>
      </div>
    </ThemeProvider>
  );
};
export default GenericTemplate;
