"use client";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#252525",
  paddingTop:"50px",
  [theme.breakpoints.up("md")]: {
    paddingTop:"60px",
 
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop:"60px",
 
  },
  "& img": {
    width: "120px",
    height: "auto",
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      width: "150px",
   
    },
    [theme.breakpoints.up("lg")]: {
      width: "170px",
   
    },

  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "35px",
  lineHeight: "55px",
  color: "#fff",
  textAlign: "center",
  fontFamily: "russoone",
  background: "#252525",
  paddingTop:"5px",
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    lineHeight: "55px",
    textAlign: "center",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "50px",
    lineHeight: "55px",
    textAlign: "center",
  },
}));


/**
 * Props for `Ourhead`.
 */
export type OurheadProps = SliceComponentProps<Content.OurheadSlice>;

/**
 * Component for "Ourhead" Slices.
 */
const Ourhead = ({ slice }: OurheadProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Logo>
        <img alt="Newland Websites logo" src="/images/large-logo.svg" />
      </Logo>
      <Title variant="h2">Our Services</Title>
    </section>
  );
};

export default Ourhead;
