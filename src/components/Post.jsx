import { FavoriteBorder, Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";

const Post = ({ title, subheader, image, description, avatar }) => {
    return (
        <Card
            sx={{
                m: 5
            }}
        >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia
                component="img"
                height="20%"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post;