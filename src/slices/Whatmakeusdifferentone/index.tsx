"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";

const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#3F5A36",
  textAlign: "start",
  fontFamily: "russoone",
  background: "#252525",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    lineHeight: "55px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "40px",
    lineHeight: "50px",
    textAlign: "left",
  },
}));



const Subtitle = styled('div')(({ theme }) => ({
  "& p":{
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "25px",
    color: "white",
    textAlign: "start",
    fontFamily: "Poppins",
    background: "#252525", 
    marginTop:"9px",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
      lineHeight: "25px",
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
      lineHeight: "31px",
      textAlign: "left",
      marginTop:"18px"
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

const RightRectBack = styled(RectBack)(({ theme }) => ({
  right: "0",
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
  fontSize: "20px",
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
 * Props for `Differentcontant`.
 */
export type DifferentcontantProps =
  SliceComponentProps<Content.DifferentcontantSlice>;

/**
 * Component for "Differentcontant" Slices.
 */
const Differentcontant = ({ slice }: DifferentcontantProps): JSX.Element => {
  const theme = useTheme();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Stack
          sx={{
            padding: "50px 0 0 0 ",
            background:  "#252525",
            [theme.breakpoints.up("md")]: {
              padding: "90px 0 0 0",
            }
          }}
      >
        <Container fixed maxWidth="xl">
          <PageTitle variant="h2">{slice.primary.title}</PageTitle>
          <Subtitle ><PrismicRichText field={slice.primary.sub_title} /></Subtitle>
        </Container>
      </Stack>

      <Stack
         sx={{
          padding: "50px 0",
          background:  "#252525",
          [theme.breakpoints.up("md")]: {
            padding: "100px 0",
          }
        }}
      >
        <Grid container position="relative">
          <RightRectBack src="/images/right-rect.svg" alt="right rect" />
          <Grid item xs={12} sm={12} md={6}>
            <Image
              field={slice.primary.img}
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
              <Grid container rowSpacing="23px">
                <Grid item xs={12} sm={12} md={6}>
                  <Image
                    field={slice.primary.img}
                    sx={{
                      [theme.breakpoints.up("md")]: {
                        padding: "0 20px 0 0",
                        display: "none",
                      },
                      [theme.breakpoints.up("lg")]: {
                        padding: "0 40px 0 0",
                      },
                      [theme.breakpoints.up("xl")]: {
                        padding: "0 80px 0 0",
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
                      padding: "0 0 0 20px",
                    },
                    [theme.breakpoints.up("lg")]: {
                      padding: "0 0 0 40px",
                    },
                    [theme.breakpoints.up("xl")]: {
                      padding: "0 0 0 80px",
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
                      marginBottom="16px"
                      sx={{ marginBottom: "26px", textAlign: "left!important" }}
                    >
                      {slice.primary.ultitle}
                    </SectionTitle>
                    <PrismicRichText field={slice.primary.points} />
                  </Stack>
                </UlGrid>
              </Grid>
            </Container>
          </Stack>
        </Grid>
      </Stack>
    </section>
  );
};

export default Differentcontant;
