import React from 'react';
import { createStyles, makeStyles, Grid } from '@material-ui/core';
import { Cloud } from '@material-ui/icons';
import LoadingButton from '@material-ui/lab/LoadingButton';

const useStyles = makeStyles(() =>
  createStyles({
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  }),
);

type DisplayImageProps = {
  image: string | null | ArrayBuffer | undefined;
  uploadImage: () => void;
  pending: boolean;
};

const DisplayImage: React.FC<DisplayImageProps> = (
  props: DisplayImageProps,
) => {
  const classes = useStyles();
  const { image, uploadImage, pending } = props;

  return (
    <>
      {typeof image === 'string' ? (
        <>
          <Grid item sm={12}>
            <img alt="detectimage" src={image} className={classes.img} />
          </Grid>
          <Grid item sm={12}>
            <LoadingButton
              pending={pending}
              variant="contained"
              startIcon={<Cloud />}
              onClick={uploadImage}
            >
              Upload
            </LoadingButton>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default DisplayImage;
