"use client";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";
import { YellowArrowButton } from "@/components/Buttons";
import { Grid } from "@mui/material";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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

const RightRectBack = styled(RectBack)(({ theme }) => ({
  right: "0",
}));

const Image = styled(PrismicNextImage)(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "30px",
  lineHeight: "55px",
  color: "#3F5A36",
  textAlign: "start",
  fontFamily: "russoone",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    lineHeight: "55px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "40px",
    lineHeight: "55px",
    textAlign: "left",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "19px",
  lineHeight: "25px",
  color: "white",
  textAlign: "start",
  fontFamily: "russoone",
  [theme.breakpoints.up("md")]: {
    fontSize: "19px",
    lineHeight: "40px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
    lineHeight: "50px",
    textAlign: "left",
  },
}));
const Description = styled("div")(({ theme }) => ({
  "& p": {
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "31px",
    color: "#fff",
    textAlign: "start",
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
      lineHeight: "25px",
      textAlign: "start",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
      lineHeight: "31px",
      textAlign: "start",
      margin: "0 0 30px 0",
    },
  },
}));
const ImageGrid = styled(Grid)(({ theme }) => ({
  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));
const Contant = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "5px",
  [theme.breakpoints.up("md")]: {
    padding: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 117px",
  },
}));
const Headcontant = styled(Grid)(({ theme }) => ({}));

/**
 * Props for `OurServices`.
 */
export type OurServicesProps = SliceComponentProps<Content.OurServicesSlice>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices = ({ slice }: OurServicesProps): JSX.Element => {
  const theme = useTheme();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <Stack
          key={index}
          sx={{
            padding: "50px 0",
            background: index % 2 ? "#1B1B1B" : "#252525",
            [theme.breakpoints.up("md")]: {
              padding: "110px 0",
            },
          }}
        >
          <Grid
            container
            position="relative"
            flexDirection={index % 2 ? "row-reverse" : "row"}
          >
            <LeftRectBack
              src="/images/left-rect.svg"
              alt="left rect"
              sx={{ display: index % 2 ? "block" : "none" }}
            />
            <RightRectBack
              src="/images/right-rect.svg"
              alt="right rect"
              sx={{ display: index % 2 ? "none" : "block" }}
            />

            <Grid item xs={12} sm={12} md={6}>
              <Image
                field={item.imgs}
                sx={{
                  [theme.breakpoints.up("md")]: {
                    padding: index % 2 ? "0 0 0 20px" : "0 20px 0 0",
                  },
                  [theme.breakpoints.up("lg")]: {
                    padding: index % 2 ? "0 0 0 40px" : "0 40px 0 0",
                  },
                  [theme.breakpoints.up("xl")]: {
                    padding: index % 2 ? "0 0 0 80px" : "0 80px 0 0",
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
                <Grid
                  container
                  flexDirection={index % 2 ? "row-reverse" : "row"}
                  rowSpacing="35px"
                >
                  <Grid item xs={12} sm={12} md={6}>
                    <Image
                      field={item.imgs}
                      sx={{
                        [theme.breakpoints.up("md")]: {
                          padding: index % 2 ? "0 0 0 20px" : "0 20px 0 0",
                          display: "none",
                        },
                        [theme.breakpoints.up("lg")]: {
                          padding: index % 2 ? "0 0 0 40px" : "0 40px 0 0",
                        },
                        [theme.breakpoints.up("xl")]: {
                          padding: index % 2 ? "0 0 0 80px" : "0 80px 0 0",
                        },
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                      [theme.breakpoints.up("md")]: {
                        padding: index % 2 ? "0 20px 0 0" : "0 0 0 20px",
                      },
                      [theme.breakpoints.up("lg")]: {
                        padding: index % 2 ? "0 40px 0 0" : "0 0 0 40px",
                      },
                      [theme.breakpoints.up("xl")]: {
                        padding: index % 2 ? "0 80px 0 0" : "0 0 0 80px",
                      },
                    }}
                  >
                    <Stack
                      maxWidth="460px"
                      sx={{
                        [theme.breakpoints.down("md")]: { maxWidth: "100%" },
                      }}
                    >
                      <PageTitle variant="h3">{item.title}</PageTitle>
                      <Subtitle variant="h4">{item.sub_title}</Subtitle>
                      <Description>
                        <PrismicRichText field={item.description} />{" "}
                      </Description>
                      <PrismicNextLink field={item.btn}>
                        <YellowArrowButton>{item.buttonname}</YellowArrowButton>
                      </PrismicNextLink>
                    </Stack>
                  </Grid>
                </Grid>
              </Container>
            </Stack>
          </Grid>
        </Stack>
      ))}
    </section>
  );
};

export default OurServices;
