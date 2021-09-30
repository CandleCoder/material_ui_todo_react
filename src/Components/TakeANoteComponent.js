import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import InputBase from '@mui/material/InputBase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'lightslategray',
	fontWeight: 'bold',
	'& .MuiInputBase-input': {
		// vertical padding + font size from searchIcon
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '45ch',
			'&:focus': {
				width: '45ch'
			}
		}
	}
}));

export default function TakeANoteContainer() {
	const changeLayout = () => {
		console.log('changed the Layout');
	};

	return (
		<Box mt={3} sx={{ boxShadow: 4 }} borderRadius={2}>
			<Grid item xs={12} direction="row" justifyContent="flex-end" alignItems="center" container spacing={1}>
				<StyledInputBase
					placeholder="Take a Note..."
					inputProps={{ 'aria-label': 'Take a Note...' }}
					onClick={changeLayout}
				/>
				<Grid item xs={1}>
					<CheckBoxOutlinedIcon />
				</Grid>
				<Grid item xs={1}>
					<BrushOutlinedIcon />
				</Grid>
				<Grid item xs={1}>
					<CropOriginalOutlinedIcon />
				</Grid>
			</Grid>
		</Box>
	);
}
