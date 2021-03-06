import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import DisplayImage from 'Components/Molecules/DisplayImage';
import SelectImage from 'Components/Molecules/SelectImage';

type UploadImageProps = {
  image: string | null | ArrayBuffer | undefined;
  fileName: string;
  getImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImage: () => void;
  pending: boolean;
};
// ブレークポイントとGrid item/containerの解説
// https://blog.katsubemakito.net/react/react1st-28-materialui
// 12を超えると次の行に送られる
const UploadImage: React.FC<UploadImageProps> = (props: UploadImageProps) => {
  const { image, fileName, getImage, uploadImage, pending } = props;

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h5">Select Image file</Typography>
      </Grid>

      <Grid item sm={12}>
        <Grid container spacing={2} alignItems="flex-end">
          <SelectImage fileName={fileName} getImage={getImage} />
        </Grid>
      </Grid>

      <Grid item sm={12}>
        <Grid container spacing={2} alignItems="flex-end">
          <DisplayImage
            image={image}
            pending={pending}
            uploadImage={uploadImage}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UploadImage;
