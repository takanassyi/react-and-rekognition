import React, { useState } from 'react';
import { Grid, Theme, createStyles, makeStyles } from '@material-ui/core';

import DisplayResult from 'Components/Organisms/DisplayResult';
import UploadImage from 'Components/Organisms/UploadImage';
import GenericTemplate from 'Components/Templates/GenericTemplate';

import axios from 'axios';
import { Result } from 'utils/utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: theme.spacing(2),
    },
  }),
);

const Page: React.FC = () => {
  const classes = useStyles();

  const [image, setImage] = useState<string | null | ArrayBuffer | undefined>(
    null,
  );
  const [fileName, setFileName] = useState<string>('');
  const [pending, setPending] = useState<boolean>(false);
  const [items, setItems] = useState<Result[]>([]);

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    try {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImage(reader.result);
        if (e.target.files === null) return;
        setFileName(e.target.files[0].name);
      };
    } catch {
      console.error('Error');
    }
  };

  // TODO:型を明確にしながら axios を使う
  // https://qiita.com/keyakko/items/ec536545d2faa9cabc84

  const fetchData = async () => {
    const config = {
      headers: {
        'content-type': 'application/octet-stream',
      },
    };
    const resultAxios = await axios.post<string>(
      'https://<<YOUR ENDPOINT URL>>/api/rekognition',
      image,
      config,
    );

    const results: Result[] = [];
    resultAxios.data.split(',').map((text, id) => results.push({ id, text }));

    setItems(results);
    setPending(false);
  };

  const uploadImage = () => {
    if (typeof image !== 'string') {
      return;
    }
    setPending(true);
    void fetchData();
  };

  return (
    <GenericTemplate>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item sm={6}>
          <UploadImage
            image={image}
            getImage={getImage}
            fileName={fileName}
            uploadImage={uploadImage}
            pending={pending}
          />
        </Grid>

        <Grid item sm={6}>
          <DisplayResult items={items} />
        </Grid>
      </Grid>
    </GenericTemplate>
  );
};
export default Page;
