import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionVideoEmbed from "./AccordionVideoEmbed";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none"
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  },
  expanded: {
    margin: `0 !important`
  },
  summary: {
    minHeight: 78
  },
  summaryContent: {
    margin: "0 !important"
  }
}));

function ChoirSection(props) {
  const classes = useStyles();

  const items = [
    {
      videoTitle: "The Saturday Psali - Afti Emepounof",
      videoDesc:
        "SAINT KYREL CHOIR - The Saturday Psali: Afti Emepounof January 2021",
      videoLink: "https://www.youtube.com/embed/7-ZqCPXU8xg"
    },
    {
      videoTitle:
        "We follow you our Lord: The Coptic Liturgical Celebration Melodies",
      videoDesc:
        "SAINT KYREL CHOIR - We follow you our Lord: The Coptic Liturgical Celebration Melodies May 2021",
      videoLink: "https://www.youtube.com/embed/sMLtHlqYOTk"
    },
    {
      videoTitle: "The Parakletos",
      videoDesc: "SAINT KYREL CHOIR - The Parakletos June 2021",
      videoLink: "https://www.youtube.com/embed/ZIRydoQ_pB4"
    }
  ];
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography>{item.videoTitle}</Typography>
            </AccordionSummary>
            <br />
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography variant="h7">{item.videoDesc}</Typography>
            </AccordionDetails>
            <AccordionVideoEmbed url={item.videoLink} />
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default ChoirSection;
