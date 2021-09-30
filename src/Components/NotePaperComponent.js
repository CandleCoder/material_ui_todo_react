import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../Data/TodoData.json';

export default function NotePaperComponent() {
	return data.map((v) => {
		return (
			<span>
				{
					<Card
						variant="outlined"
						sx={{
							maxWidth: 200,
							display: 'inline-block',
							margin: '12px'
						}}
					>
						<CardContent>
							<Typography variant="h5" component="div">
								benevolent
							</Typography>
							<Typography variant="body2">
								well meaning and kindly.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				}
			</span>
		);
	});
}
