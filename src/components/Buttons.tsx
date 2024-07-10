import { styled } from "@mui/material/styles";
import { Button, Box, Stack } from "@mui/material";
import { RightCurveArrow } from "./Icons";

const ButtonContainer = styled(Button)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  textTransform: "uppercase",
  fontFamily: 'russoone',
  display: "flex",
  borderRadius: "0",
  padding: "0",
  height: "48px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    fontSize: "13px",
    lineHeight: "15px",
    width: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
    lineHeight: "16px",
  },
}));

const ArrorPart = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  height: "100%",
  width: "68px",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%",
    borderRight: "12px solid transparent",
  },
}));

export const YellowArrowButton = (props: any) => (
  <ButtonContainer {...props} sx={{ color: '#131313', background: '#DFBB75', '&:hover': { background: '#DFBB75' } }}>
    <Stack justifyContent="center" alignItems="start" paddingX="12px" flexGrow='1'>{props.children}</Stack>
    <ArrorPart sx={{ background: '#BCA15F', '&::after': { borderBottom: "48px solid #DFBB75" }}}>
      <RightCurveArrow sx={{ color: "#000100", margin: "auto" }} />
    </ArrorPart>
  </ButtonContainer>
);

export const GreenArrowButton = (props: any) => (
  <ButtonContainer {...props} sx={ {...{ color: 'white', background: '#4A6741', '&:hover': { background: '#4A6741' } }, ...props.sx }}>
    <Stack justifyContent="center" alignItems="start" paddingX="24px" flexGrow='1'>{props.children}</Stack>
    <ArrorPart sx={{ background: '#3F5A36', '&::after': { borderBottom: "48px solid #4A6741" }}}>
      <RightCurveArrow sx={{ color: "white", margin: "auto" }} />
    </ArrorPart>
  </ButtonContainer>
);