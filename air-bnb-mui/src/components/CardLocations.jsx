import { locations } from "../data/mock-data";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { rem } from "@mantine/core";
import { createStyles, getStylesRef } from "@mantine/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
      <Box sx={{ mx: 2 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {locations.map((item) => (
            <Carousel
              className={classes}
              key={item.id}
              sx={{ maxWidth: 320, marginTop: "3rem" }}
              mx="auto"
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
                    />
                    <i
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 5,
                        color: "rgba(8, 8, 8, 0.486)",
                        fontSize: "20px",
                      }}
                      class="fa-solid fa-heart"
                    ></i>
                  </Carousel.Slide>
                </>
              ))}
            </Carousel>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CardLocations;
