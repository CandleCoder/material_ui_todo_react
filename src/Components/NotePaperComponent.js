import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import data from '../Data/TodoData.json';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function NotePaperComponent() {
	return data.map((v) => {
		return (
			<span>
				{
					<Card
						key={v.id}
						variant="outlined"
						sx={{
							maxWidth: 200,
							display: 'inline-block',
							margin: '12px'
						}}
					>
						<IconButton variant="outlined" aria-label="Select" component="span">
							<CheckCircleRoundedIcon />
						</IconButton>
						<CardContent>
							<Typography variant="h6" component="div" key={v.id + 'Typography1'}>
								{v.title}
							</Typography>
							<Typography variant="body2" key={v.id + 'Typography2'}>
								{v.Content}
								<br />
							</Typography>
						</CardContent>
					</Card>
				}
			</span>
		);
	});
}
