import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Grid } from '@mui/material';

export default function ActionComponent() {
	return (
		<Grid direction="row" justifyContent="flex-end" alignItems="center" container spacing={2}>
			<Grid item xs={1}>
				<RefreshIcon />
			</Grid>
			<Grid item xs={1}>
				<ViewStreamIcon />
			</Grid>
			<Grid item xs={1}>
				<SettingsIcon />
			</Grid>
			<Grid item xs={1}>
				<AppsIcon />
			</Grid>
		</Grid>
	);
}
