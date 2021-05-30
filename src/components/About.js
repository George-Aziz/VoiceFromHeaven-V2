import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionHeader from "./SectionHeader";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%",
  },
}));

function About(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid item={true} xs={12} md={true}>
            <figure>
              <img
                src={props.image}
                alt="illustration"
                className={classes.image}
              />
            </figure>
          </Grid>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={4}
              />
              <br />
              <Typography
                variant="h6"
                gutterBottom={props.subtitle ? true : false}
              >
                This website is a collection of personal inspirations and tokens
                of blessings from the Coptic Orthodox Sunday Schools across the
                world
                <br />
                <br />
                The Magazines have been published under the guidance of our dear
                Abouna Esozorous Anba Bishoy and had the privelege and blessing
                of being gifted to our beloved Pope Shenouda III
                <br />
                <br />
                This website has been created by George Aziz
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
