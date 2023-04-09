import React from "react";
import { locations } from "../data/mock-data";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { rem } from "@mantine/core";
import { createStyles, getStylesRef } from "@mantine/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { AiFillStar } from "react-icons/ai";

import { flexBetween, dFlex } from "../themes/commonStyles";

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

const CardLocations = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box sx={{ mx: 5 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {locations.map((item) => (
            <Box sx={{ ml: 4 }}>
              <Carousel
                className={classes}
                key={item.id}
                sx={{ maxWidth: 320, marginTop: "3rem", borderRadius: "2" }}
                mx="auto"
                maw={320}
                radius="md"
                loop
                withIndicators
                styles={{
                  indicator: {
                    width: rem(4),
                    height: rem(4),
                    transition: "width 250ms ease",

                    "&[data-active]": {
                      width: rem(10),
                    },
                  },
                  control: {
                    opacity: 0,
                    cursor: "default",
                    transition: "opacity 150ms ease",
                  },
                  root: {
                    "&:hover": {
                      [`& .${getStylesRef("controls")}`]: {
                        opacity: 1,
                      },
                    },
                  },
                }}
              >
                {item.locationImages.map((image) => (
                  <>
                    <Carousel.Slide key={image.id}>
                      <Image
                        sx={{ position: "relative" }}
                        src={image.url}
                        radius="md"
                        maw={340}
                        height={250}
                      // fit="cover"

                      />
                      <i
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 5,
                          color: "rgba(8, 8, 8, 0.486)",
                          fontSize: "20px",
                        }}
                        className="fa-solid fa-heart"
                      ></i>
                    </Carousel.Slide>
                  </>
                ))}
              </Carousel>
              <Box sx={flexBetween}>
                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ fontWeight: "bold" }} component="h3">
                    {" "}
                    {item.location}
                  </Typography>
                  <Typography sx={{ fontWeight: "400" }} component="h4">
                    {" "}
                    {item.days}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }} component="h5">
                    {" "}
                    {item.price}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Box sx={dFlex}>
                    {item.isNew ? (
                      <React.Fragment>
                        <Typography component="h5">New</Typography>
                        <AiFillStar size={18} />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Typography component="h5"> {item.rating}</Typography>
                        <AiFillStar size={18} />
                      </React.Fragment>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CardLocations;
