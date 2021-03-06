import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import { Image } from '@material-ui/icons';

type SelectImageProps = {
  fileName: string;
  getImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectImage: React.FC<SelectImageProps> = (props: SelectImageProps) => {
  const { fileName, getImage } = props;

  return (
    <>
      <Grid item>
        <Button
          startIcon={<Image />}
          color="primary"
          variant="contained"
          component="label"
        >
          Select
          <input
            id="img"
            type="file"
            accept="image/*,.png,.jpg,.jpeg,.gif"
            hidden
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => getImage(e)}
          />
        </Button>
      </Grid>
      <Grid item>
        <Typography>{fileName}</Typography>
      </Grid>
    </>
  );
};
export default SelectImage;
