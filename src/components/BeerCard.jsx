import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

function BeerCard(props) {
  const entry = props.entry;
  const onLike = props.onLike;
  const likeDisabled = props.likeDisabled;

  return (
    <Card sx={{ margin: "1rem 0 1rem 0" }}>
      <CardHeader
        avatar={
          <Avatar
            src={entry.userPhotoURL}
            imgProps={{ referrerPolicy: "no-referrer" }}
          />
        }
        title={entry.beer}
        subheader={entry.type}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {entry.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          disabled={likeDisabled}
          onClick={() => onLike(entry.id)}
          aria-label="like"
        >
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {entry.likes}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default BeerCard;
