"use client";
import { Content } from "@prismicio/client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";

const Subtitle = styled("div")(({ theme }) => ({
  "& p": {
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "25px",
    color: "#fff",
    textAlign: "start",
    fontFamily: "Poppins",
    margin:"0px",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
      lineHeight: "25px",
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
      lineHeight: "28px",
      textAlign: "left",
    },
  },
}));
const RectBack = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    height: "300px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "auto",
  },
}));

const LeftRectBack = styled(RectBack)(({ theme }) => ({
  left: "0",
}));
const UlGrid = styled(Grid)(({ theme }) => ({
  color: "white",
  fontFamily: "poppins",
  "& ul": {
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  "& li": {
    paddingLeft: "16px",
    backgroundImage: `url('/images/tick.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 3px",
    fontSize: "15px",
    lineHeight: "1.5",
    marginBottom: "15px",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
    },
  },
}));
const Image = styled(PrismicNextImage)(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "30px",
  color: "#fff",
  textAlign: "center",
  fontFamily: "russoone",
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    lineHeight: "30px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
    lineHeight: "30px",
    textAlign: "left",
  },
}));
/**
 * Props for `Differentcontant2`.
 */
export type Differentcontant2Props =
  SliceComponentProps<Content.Differentcontant2Slice>;

/**
 * Component for "Differentcontant2" Slices.
 */
const Differentcontant2 = ({ slice }: Differentcontant2Props): JSX.Element => {
  const theme = useTheme();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Stack
        sx={{
          padding: "20px 0",
          background: "#1B1B1B;",
          [theme.breakpoints.up("md")]: {
            padding: "90px 0",
          },
        }}
      >
        <Grid container position="relative" flexDirection={"row-reverse"}>
          <LeftRectBack
            src="/images/left-rect.svg"
            alt="left rect"
            sx={{ display: "block" }}
          />

          <Grid item xs={12} sm={12} md={6}>
            <Image
              field={slice.primary.img}
              sx={{
                [theme.breakpoints.up("md")]: {
                  padding: "0 0 0 20px",
                },
                [theme.breakpoints.up("lg")]: {
                  padding: "0 0 0 40px",
                },
                [theme.breakpoints.up("xl")]: {
                  padding: "0 0 0 80px",
                },
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}></Grid>

          <Stack
            justifyContent="center"
            sx={{
              position: "relative",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              [theme.breakpoints.up("md")]: {
                position: "absolute",
              },
            }}
          >
            <Container fixed maxWidth="xl">
              <Grid container flexDirection={"row-reverse"} rowSpacing="18px">
                <Grid item xs={12} sm={12} md={6}>
                  <Image
                    field={slice.primary.img}
                    sx={{
                      padding: "36px 0 0 0px",
                      [theme.breakpoints.up("md")]: {
                        padding: "0 0 0 20px",
                        display: "none",
                      },
                      [theme.breakpoints.up("lg")]: {
                        padding: "0 0 0 40px",
                      },
                      [theme.breakpoints.up("xl")]: {
                        padding: "0 0 0 80px",
                      },
                    }}
                  />
                </Grid>
                <UlGrid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  sx={{
                    [theme.breakpoints.up("md")]: {
                      padding: "0 20px 0 0",
                    },
                    [theme.breakpoints.up("lg")]: {
                      padding: "0 40px 0 0",
                    },
                    [theme.breakpoints.up("xl")]: {
                      padding: "0 80px 0 0",
                    },
                  }}
                >
                  <Stack
                    maxWidth="460px"
                    sx={{
                      [theme.breakpoints.down("md")]: { maxWidth: "100%" },
                    }}
                  >
                    <SectionTitle
                      variant="h2"
                     // marginBottom="16px"
                      sx={{ marginBottom: {md:"26px",sm:"15px",xs:"15px"}, textAlign: "left!important" }}
                    >
                      {slice.primary.ultitle}
                    </SectionTitle>
                    <PrismicRichText field={slice.primary.ulitem} />
                  </Stack>
                </UlGrid>
              </Grid>
            </Container>
          </Stack>
        </Grid>
      </Stack>

      <Stack
         sx={{
          padding: "0 0 50px 0 ",
          background:  "#1B1B1B",
          [theme.breakpoints.up("md")]: {
            padding: "0 0 90px 0",
          }
        }}
      >
        <Container fixed maxWidth="xl">
          <SectionTitle
            variant="h2"
          
            sx={{ marginBottom:{md:"30px",sm:"20px",xs:"20px"}, textAlign: "left!important" }}
          >
            {slice.primary.subtitle}
          </SectionTitle>
          <Subtitle>
            <PrismicRichText field={slice.primary.description} />
          </Subtitle>
        </Container>
      </Stack>
    </section>
  );
};

export default Differentcontant2;
