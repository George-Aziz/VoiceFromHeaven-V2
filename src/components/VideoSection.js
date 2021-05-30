import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import VideoEmbed from "./VideoEmbed";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function VideoSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container maxWidth="md" disableGutters={true}>
          <VideoEmbed url={props.embedUrl} />
          <Typography>
            An animation project created by George Aziz reflecting the Holy
            Bible in the Holy Liturgy and received the first place winning award
            in the Mahragan-El-Keraza-2018 under the Diocese of Melbourne &
            Affiliated Regions
          </Typography>
        </Container>
      </Container>
    </Section>
  );
}

export default VideoSection;
