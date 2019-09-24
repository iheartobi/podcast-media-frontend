import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MyButton from "./MyButton";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
    marginRight: 20,
    maxWidth: 550,
    minHeight: 250
  },
  image: {
    minWidth: 250
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

export class PodcastCard extends Component {
  render() {
    const {
      classes,
      podcast: { title, publisher, image, thumbnail, listennotes_url }
    } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            image={image}
            title="Podcast Image"
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <Typography variant="h6">{title}</Typography>
            {/* <Typography variant="h5">Likes: {thumbnail}</Typography> */}
            <Typography variant="h6">Publisher: {publisher}</Typography>
            <hr />
            <MyButton tip="Add Podcast" btnClassName="button">
              <AddIcon
                onClick={e => this.props.onClick(e, this.props.podcast)}
                color="primary"
              />
            </MyButton>
            <Typography hidden="hidden" variant="p">
              Website: {listennotes_url}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PodcastCard);
