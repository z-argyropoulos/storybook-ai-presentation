import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface MediaCardProps {
  title?: string;
  description?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  actionsDisabled?: boolean;
}

export default function MediaCard({
  title,
  description,
  actionsDisabled,
  primaryActionLabel,
  secondaryActionLabel,
}: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={actionsDisabled}>
          {primaryActionLabel}
        </Button>
        <Button size="small" disabled={actionsDisabled}>
          {secondaryActionLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
