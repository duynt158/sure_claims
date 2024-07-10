"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";
import { Stack, Container, Grid, Box, Typography } from "@mui/material";
import {
  SectionDescriptionContainer,
  SectionTitle,
} from "@/components/Typography";

const SectionContainer = styled(Stack)(({ theme }) => ({
  paddingTop: "50px",
  paddingBottom: "42px",
  backgroundColor: "#1B1B1B",
  [theme.breakpoints.up("md")]: {
    paddingTop: "90px",
    paddingBottom: "100px",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: "15px 30px",
  color: "white",
  height: "100%",
  [theme.breakpoints.up('md')]: {
    padding: "20px 50px",
  },
  '& p': {
    margin: '0',
  }
}));

const HeaderContainer = styled(ContentContainer)(({ theme }) => ({
  "& h3": {
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "30px",
    fontFamily: "russoone",
    textTransform: "uppercase",
  }
}));

const TopicContainer = styled(ContentContainer)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "25px",
  fontFamily: "russoone",
  background: "#252525",
  borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
  [theme.breakpoints.down('md')]: {
    padding: "36px 16px",
  }
}));

const ExplanationContainer = styled(ContentContainer)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  fontFamily: "poppins",
  background: "#3F5A36",
  borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
  boxShadow: "-10px 4px 34px 0px #00000059",
  [theme.breakpoints.down('md')]: {
    padding: "24px 16px",
  }
}));

/**
 * Props for `MakeUsDifferent`.
 */
export type MakeUsDifferentProps =
  SliceComponentProps<Content.MakeUsDifferentSlice>;

/**
 * Component for "MakeUsDifferent" Slices.
 */
const MakeUsDifferent = ({ slice }: MakeUsDifferentProps): JSX.Element => {
  const theme = useTheme();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionContainer>
        <Container fixed maxWidth="xl">
          <SectionTitle
            variant="h2"
            sx={{
              marginBottom: "10px",
              position: "relative",
              textAlign: "center!important",
            }}
          >
            {slice.primary.title}
          </SectionTitle>
          <SectionDescriptionContainer
            sx={{
              marginBottom: "20px",
              [theme.breakpoints.up("md")]: {
                textAlign: "center",
                marginBottom: "60px",
              },
            }}
          >
            <PrismicRichText field={slice.primary.description} />
          </SectionDescriptionContainer>
          <Stack alignItems="center" sx={{ [theme.breakpoints.down('sm')]: { margin: "0 -16px" }}}>
            <Grid container maxWidth="960px">
              <Grid item xs={12} sm={12} md={6} sx={{ [theme.breakpoints.down('sm')]: { margin: "0 16px 16px" }}}>
                <HeaderContainer sx={{ background: "#0D0D0D" }}>
                  <Typography variant="h3">
                    What we do
                  </Typography>
                </HeaderContainer>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ [theme.breakpoints.down('sm')]: { margin: "0 16px 40px" }}}>
                <HeaderContainer sx={{ background: "#3F5A36" }}>
                  <Typography variant="h3">
                    What it means for you
                  </Typography>
                </HeaderContainer>
              </Grid>
              {
                slice.items.map((item, index) => (
                  <>
                    <Grid item xs={12} sm={12} md={6}>
                      <TopicContainer>
                        <PrismicRichText field={item.topic} />
                      </TopicContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ [theme.breakpoints.down('sm')]: { marginBottom: "16px" }}}>
                      <ExplanationContainer>
                        <PrismicRichText field={item.explanation} />
                      </ExplanationContainer>
                    </Grid>
                  </>
                ))
              }
            </Grid>
          </Stack>
        </Container>
      </SectionContainer>
    </section>
  );
};

export default MakeUsDifferent;
