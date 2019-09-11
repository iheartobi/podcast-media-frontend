import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ls from "local-storage";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import MuiLink from "@material-ui/core/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

const styles = {
  paper: {
    padding: 20,
    maxWidth: 300
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "#00bcd4"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  }
};

class UserCard extends React.Component {
  state = {
    img_url: ""
  };

  handleImageChange = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    const values = {
      img_url: this.state.img_url
    };

    // fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}` + formData,{
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    //   },
    //   body: JSON.stringify(values)
    // })
    //   .then(res => res.json())
    //     .then(data => {
    //       if (data.jwt) {
    //         window.history.href=("/profile")
    //         // console.log(data);
    //       } else {
    //           alert("Could Not Update Please Try Again")
    //           window.history.href=("/editUser")
    //           this.setState({loading: false})
    //       }
    //     }).catch(err => {
    //       this.setState({
    //         loading: false
    //       })
    //   })
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  render() {
    dayjs.extend(relativeTime);
    // console.log("UserCard", this.props)
    console.log("More", this.props);

    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <center>
              {" "}
              <img
                src={this.props.user.img_url}
                alt="profile"
                className="profile-image"
              />{" "}
            </center>
            <input
              className="image-files"
              type="file"
              id="imageInput"
              hidden="hidden"
              onChange={this.handleImageChange}
            />
            <Tooltip title="Edit Profile Image" placement="top">
              <IconButton onClick={this.handleEditPicture} className="button">
                <EditIcon color="primary" />
              </IconButton>
            </Tooltip>
          </div>
          <hr />
          <div className="profile-details">
            <center>
              <MuiLink
                component={Link}
                to={`/users/${this.props.user.username}`}
                color="yellow"
                variant="h5"
              >
                @{this.props.user.username}
              </MuiLink>
              <hr />
              {this.props.user.bio && (
                <Typography variant="body2">{this.props.user.bio}</Typography>
              )}
              <hr />
              <MuiLink
                component={Link}
                to={`/users/friends/${this.props.user.username}`}
                color="yellow"
                variant="h5"
              >
                Follows: {this.props.user.follows}
              </MuiLink>
              <hr />
              <MuiLink
                component={Link}
                to={`/users/friends/${this.props.user.username}`}
                color="yellow"
                variant="h5"
              >
                Following: {this.props.user.followers}
              </MuiLink>
              <hr />
              <MuiLink
                component={Link}
                to={`/podcasts/${this.props.user.username}`}
                color="yellow"
                variant="h5"
              >
                My Podcasts: {this.props.user.podcast_number}
              </MuiLink>
              <hr />
              <CalendarToday color="primary" />
              {""}
              <span>
                Joined {dayjs(this.props.user.created_at).format("MMM DD YYYY")}
              </span>
            </center>
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(UserCard);
