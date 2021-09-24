import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import data from '../Data/TodoData.json'

export default function ContentContainer() {

 console.log(data);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      </Container>
    </React.Fragment>
  );
}
