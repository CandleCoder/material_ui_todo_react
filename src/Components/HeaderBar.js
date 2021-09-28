import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchComponent from './SearchComponent';
import ActionComponent from './ActionComponent';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				color="transparent"
				elevation={0}
				sx={{ borderBottom: '1px solid rgb(212, 212, 212)' }}
			>
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					Notes
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					/>
					<SearchComponent />
					<ActionComponent />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
