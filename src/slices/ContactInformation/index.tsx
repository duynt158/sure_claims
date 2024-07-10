"use client";
import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/Icons";
import { useTheme } from "@mui/material";
import { createClient } from "@/prismicio";

const client = createClient();

const SectionContainer = styled(Stack)(({ theme }) => ({
  paddingTop: "40px",
  paddingBottom: "20px",
  backgroundColor: "#252525",
  [theme.breakpoints.up("md")]: {
    paddingTop: "80px",
    paddingBottom: "50px",
  },
}));

const ItemContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  marginRight: "40px",
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
  [theme.breakpoints.up("xl")]: {
    marginRight: "80px",
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "19px",
  fontFamily: "russoone",
  color: "white",
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

const ItemBody = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "15px",
  fontFamily: "russoone",
  color: "rgba(255, 255, 255, 0.7)",
}));

/**
 * Props for `ContactInformation`.
 */
export type ContactInformationProps =
  SliceComponentProps<Content.ContactInformationSlice>;

/**
 * Component for "ContactInformation" Slices.
 */
const ContactInformation = ({
  slice,
}: ContactInformationProps): JSX.Element => {
  const theme = useTheme();
  const [settings, setSettings] = React.useState<any>(null);

  React.useEffect(() => {
    const getSettings = async () => {
      const settings = await client.getSingle("settings");
      setSettings(settings);
    };

    getSettings();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionContainer>
        <Container fixed maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="left"
            flexWrap="wrap"
            rowGap="20px"
            sx={{ [theme.breakpoints.up("lg")]: { justifyContent: "center" } }}
          >
            <ItemContainer>
              <LocationIcon
                sx={{
                  color: "#BCA15F",
                  fontSize: "26px",
                  marginRight: "10px",
                  marginTop: "4px",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "40px",
                    marginTop: "0",
                  },
                }}
              />
              <Stack sx={{ cursor: "pointer", '&:hover': { '& p': { color: "#BCA15F" } }}}>
                <a href={`https://www.google.com/maps?q=${settings?.data.address.replaceAll(' ', '+')}`} target='_blank'>
                  <ItemTitle variant="h2">Address</ItemTitle>
                  <address>
                    <ItemBody>{settings?.data.address}</ItemBody>
                  </address>
                </a>
              </Stack>
            </ItemContainer>
            <ItemContainer>
              <PhoneIcon
                sx={{
                  color: "#BCA15F",
                  fontSize: "26px",
                  marginRight: "10px",
                  marginTop: "4px",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "40px",
                    marginTop: "0",
                  },
                }}
              />
              <Stack sx={{ cursor: "pointer", '&:hover': { '& p': { color: "#BCA15F" } }}}>
                <a href={`tel:${settings?.data.phone}`}>
                  <ItemTitle variant="h2">Phone number</ItemTitle>
                  <address>
                    <ItemBody>{settings?.data.phone}</ItemBody>
                  </address>
                </a>
              </Stack>
            </ItemContainer>
            <ItemContainer sx={{ marginRight: "0" }}>
              <EmailIcon
                sx={{
                  color: "#BCA15F",
                  fontSize: "26px",
                  marginRight: "10px",
                  marginTop: "2px",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "40px",
                    marginTop: "0",
                  },
                }}
              />
              <Stack sx={{ cursor: "pointer", '&:hover': { '& p': { color: "#BCA15F" } }}}>
                <a href={`mailto:${settings?.data.email}`}>
                  <ItemTitle variant="h2">Email</ItemTitle>
                  <address>
                    <ItemBody>{settings?.data.email}</ItemBody>
                  </address>
                </a>
              </Stack>
            </ItemContainer>
          </Stack>
        </Container>
      </SectionContainer>
    </section>
  );
};

export default ContactInformation;
