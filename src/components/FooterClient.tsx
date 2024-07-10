"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Box, Stack, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { MenuType, SingleMenuType } from "./Header";
import { ContactDataType } from "./Footer";
import { EmailIcon, LocationIcon, PhoneIcon } from "./Icons";

type FooterClientType = {
  menuData: MenuType;
  contactData: ContactDataType;
};

const Footer = styled("footer")(({ theme }) => ({
  background: "#060606",
  color: "rgba(255, 255, 255, 0.7)",
  '& li:hover': {
    color: "#DFBB75"
  },
  '& a:hover': {
    color: "#DFBB75"
  }
}));

const FooterInner = styled(Box)(({ theme }) => ({
  padding: "30px 0 20px",
  background: `url('/images/footer-back.svg')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.up('md')]: {
    padding: "85px 0 60px",
  }
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: '15px',
  fontWeight: "400",
  [theme.breakpoints.up('md')]: {
    fontSize: "15px",
    lineHeight: '1.5',
  }
}));

const MenuList = styled("ul")(({ theme }) => ({
  margin: "0",
  paddingLeft: "25px",
  [theme.breakpoints.up('md')]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, auto)",
  },
  '& li': {
    marginBottom: "16px",
    lineHeight: "1.2"
  }
}));

const CLink = styled(Link)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: '400',
  [theme.breakpoints.up('md')]: {
    fontSize: '15px'
  }
}));

const Logo = styled("img")(({ theme }) => ({
}));

const MobileLogo = styled("img")(({ theme }) => ({
  marginBottom: '40px',
  width: '150px',
  [theme.breakpoints.up("md")]: {
    display: 'none'
  },
}));

const Hr = styled('hr')(({ theme }) => ({
  margin: '0 0 20px',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  }
}));

export default function FooterClient({
  menuData,
  contactData,
}: FooterClientType) {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <Footer>
      <FooterInner>
        <Container fixed maxWidth="xl">
          <Stack alignItems="center">
            <MobileLogo alt="SureClaims Logo" src="/images/large-logo.svg" />
          </Stack>
          <Grid container marginBottom="30px">
            <Grid item xs={7} sm={8} md={4}>
              <a href={`https://www.google.com/maps?q=${contactData.location.replaceAll(' ', '+')}`} target='_blank'>
                <Stack direction="row" alignItems="center" marginBottom="20px">
                  <LocationIcon sx={{ color: "#BCA15F", marginRight: "15px" }} />
                  <Text>{contactData.location}</Text>
                </Stack>
              </a>
              <a href={`tel:${contactData.phone}`}>
                <Stack direction="row" alignItems="center" marginBottom="20px">
                    <PhoneIcon sx={{ color: "#BCA15F", marginRight: "15px" }} />
                    <Text>{contactData.phone}</Text>
                </Stack>
              </a>
              <a href={`mailto:${contactData.email}`}>
                <Stack direction="row" alignItems="center">
                  <EmailIcon sx={{ color: "#BCA15F", marginRight: "15px" }} />
                  <Text>{contactData.email}</Text>
                </Stack>
              </a>
            </Grid>
            <Grid
              item
              xs={0}
              sm={0}
              md={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ [theme.breakpoints.down('md')]: { display: 'none' }}}
            >
              <Box
                sx={{
                  [theme.breakpoints.down("md")]: {
                    margin: "30px 0",
                    width: "100%",
                  },
                }}
              >
                <Link href="/">
                  <Logo alt="SureClaims Logo" src="/images/large-logo.svg" />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={5} sm={4} md={4}>
              <MenuList>
                {menuData.map((menu, index) => (
                  <li key={index}>
                    <CLink
                      href={menu.link?.toString() as string}
                      sx={{
                        color:
                          menu.link?.toString() === pathname
                            ? "#DFBB75"
                            : "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {menu.label}
                    </CLink>
                  </li>
                ))}
              </MenuList>
            </Grid>
          </Grid>
        </Container>
        <Hr />
        <Container fixed maxWidth="xl">
          <Stack>
            <Typography textAlign="center" fontSize="11px" fontWeight="400" sx={{ [theme.breakpoints.up('md')]: { fontSize: '14px' }}}>
              Copyright © Sure Claims LLC {new Date().getFullYear()} | All
              Rights Reserved
            </Typography>
          </Stack>
        </Container>
      </FooterInner>
    </Footer>
  );
}
