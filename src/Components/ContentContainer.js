import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import data from '../Data/TodoData.json';
import TakeANoteContainer from './TakeANoteComponent';

export default function ContentContainer() {
	console.log(data);
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<TakeANoteContainer />
			</Container>
		</React.Fragment>
	);
}
