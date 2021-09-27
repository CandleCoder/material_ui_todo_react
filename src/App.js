import './App.css';
import ContentContainer from './Components/ContentContainer';
import HeaderBar from './Components/HeaderBar';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	shape: {
		borderRadius: 10
	}
});
function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<header>
					<HeaderBar />
				</header>
				<ContentContainer />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
