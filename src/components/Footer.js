import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useDarkMode } from "./../util/theme.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  github: {
    height: 26,
  },
  linkedin: {
    height: 26,
  },
  facebook: {
    height: 26,
  },
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    height: 32,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8,
    },
    "&:not(:first-of-type)": {
      marginLeft: 20,
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted social images if specified
  // and we are in dark mode
  const github =
    props.githubInverted && darkMode.value
      ? props.githubInverted
      : props.github;

  const linkedin =
    props.linkedinInverted && darkMode.value
      ? props.linkedinInverted
      : props.linkedin;

  const facebook =
    props.facebookInverted && darkMode.value
      ? props.facebookInverted
      : props.facebook;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          {props.copyright && (
            <div className={`${classes.item} ${classes.left}`}>
              <Typography component="p">{props.copyright}</Typography>
            </div>
          )}

          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
            <a
              href="https://github.com/George-Aziz"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <img alt="GitHub" src={github} className={classes.github} />
            </a>
            <a
              href="https://www.linkedin.com/in/george-aziz-94b793183"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <img alt="LinkedIn" src={linkedin} className={classes.linkedin} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=1436005728"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <img alt="Facebook" src={facebook} className={classes.facebook} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
