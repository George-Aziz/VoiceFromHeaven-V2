import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SectionHeader from "./SectionHeader";
import Typography from "@material-ui/core/Typography";

function Landing(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
          />
          <Typography variant="h3">Then a voice came from heaven:</Typography>
          <br />
          <Typography variant="h4">
            I have glorified it and I will glorify it again
          </Typography>
          <br />
          <br />
          <Typography variant="h6">[John 12:28]</Typography>
        </Box>
      </Container>
    </Section>
  );
}

export default Landing;
