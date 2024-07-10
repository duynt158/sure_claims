"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";
import { Container, Grid, Stack } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { SectionTitle } from "@/components/Typography";

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

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

/**
 * Component for "Service" Slices.
 */
const Service = ({ slice }: ServiceProps): JSX.Element => {
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
              padding: "120px 0",
            }
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
                field={item.banner}
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
                    display: "none"
                  }
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
                }
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
                      field={item.banner}
                      sx={{
                        [theme.breakpoints.up("md")]: {
                          padding: index % 2 ? "0 0 0 20px" : "0 20px 0 0",
                          display: "none"
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
                  <UlGrid
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
                    <Stack maxWidth="460px" sx={{ [theme.breakpoints.down("md")]: { maxWidth: "100%" }}}>
                      <SectionTitle
                        variant="h2"
                        marginBottom="16px"
                        sx={{ marginBottom: "26px", textAlign: "left!important" }}
                      >
                        {item.title}
                      </SectionTitle>
                      <PrismicRichText field={item.content} />
                    </Stack>
                  </UlGrid>
                </Grid>
              </Container>
            </Stack>
          </Grid>
        </Stack>
      ))}
    </section>
  );
};

export default Service;
