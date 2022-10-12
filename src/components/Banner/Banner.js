import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner.png)",
  },
  bannerContext: {
    height: 400,
    display: "flex",
    flexDirection: "Column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagLine: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContext}>
        <div className={classes.tagLine}>
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: 15, color: "white" }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              textTransform: "capitalize",
              color: "white",
            }}
          >
            Get all the information regarding your favorite Crypto currency
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
