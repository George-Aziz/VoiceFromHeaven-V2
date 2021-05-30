import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "./../util/router.js";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: "2.5vw"
  },
  media: {
    height: 400
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: -(theme.spacing(15) / 2)
  },
  imageBorder: {
    borderRadius: "50%",
    padding: "7px",
    backgroundColor: "white"
  },
  image: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

function MagazinesSection(props) {
  const classes = useStyles();

  const items = [
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Issue1.jpg",
      name: "Voice From Heaven #1",
      desc: "Freedom",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/PDFs/Voice_From_Heaven_1.pdf",
      page: 1
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Audio1.png",
      name: "Voice From Heaven #1",
      desc: "Bonus: Interview Audio",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Audio/Interview1.mp3",
      page: 1
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Issue2.png",
      name: "Voice From Heaven #2",
      desc: "Nayrouz Edition",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/PDFs/Voice_From_Heaven_2.pdf",
      page: 2
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Comm-2.png",
      name: "Voice From Heaven #2",
      desc: "Bonus: Interview with a martyr",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/PDFs/Voice_From_Heaven_2_Bonus.pdf",
      page: 2
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Audio2.png",
      name: "Voice From Heaven #2",
      desc: "Bonus: Interview Audio",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Audio/Interview2.mp3",
      page: 2
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Issue3.jpg",
      name: "Voice From Heaven #3",
      desc: "New Sharjah Church Celebration",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/PDFs/Voice_From_Heaven_3.pdf",
      page: 3
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Comm-3.jpg",
      name: "Voice From Heaven #3",
      desc: "Bonus: Why Church?",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/PDFs/Voice_From_Heaven_3_Bonus.pdf",
      page: 3
    },
    {
      image:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Audio3.png",
      name: "Voice From Heaven #3",
      desc: "Bonus: Interview Audio",
      href:
        "https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Audio/Interview3.mp3",
      page: 3
    }
  ];

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const showItems = items.filter((item) => item.page === page);

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
        <Grid container={true} justify="center" spacing={4}>
          {showItems.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <Card className={classes.card}>
                <CardActionArea component={Link} to={item.href}>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.name}
                  />
                  <Box p={3}>
                    <Box textAlign="center">
                      <Typography variant="body2" component="p">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </a>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "3vw" }}
      >
        <Pagination
          count={3}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </div>
    </Section>
  );
}

export default MagazinesSection;
