"use client";
import { Content } from "@prismicio/client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";



const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "15px",
  lineHeight: "25px",
  color: "white",
  textAlign: "start",
  fontFamily: "Poppins",
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
  fontSize: "30px",
  lineHeight: "35px",
  color: "#3F5A36",
  textAlign: "center",
  fontFamily: "russoone",
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
    lineHeight: "35px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "40px",
    lineHeight: "50px",
    textAlign: "left",
  },
}));
/**
 * Props for `Differentcontant3`.
 */
export type Differentcontant3Props =
  SliceComponentProps<Content.Differentcontant3Slice>;

/**
 * Component for "Differentcontant3" Slices.
 */
const Differentcontant3 = ({ slice }: Differentcontant3Props): JSX.Element => {
  const theme = useTheme();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <Stack
        sx={{
          padding: "57px 0px 57px 0px",
          background: "#252525",
          [theme.breakpoints.up("md")]: {
            padding: "80px 0",
          },
          
         
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
              <Grid container rowSpacing="19px">
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
                      
                      sx={{ marginBottom:{md:"18px",sm:"18px",xs:"22px" }, textAlign: "left!important" }}
                    >
                     {slice.primary.title}
                    </SectionTitle>
                    <Subtitle>{slice.primary.sub_title}</Subtitle>                  
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

export default Differentcontant3;
