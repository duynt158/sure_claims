"use client";
import React from "react";
import Link from "next/link";
import { MenuType } from "./Header";
import { usePathname } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { GreenArrowButton } from "./Buttons";

export const CHeader = styled("header")(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  padding: "24px 0",
  height: "108px",
  width: "100%",
  zIndex: 100,
  transition: ".25s",
  [theme.breakpoints.up("lg")]: {
    height: "172px",
    padding: "30px 0",
  },
  "& ul": {
    listStyle: "none",
    padding: 0,
  },
}));

const Nav = styled("nav")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
}));

const Menu = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "&>li:last-child": {
    marginRight: 0,
  },
}));

const MenuItem = styled("li", {
  shouldForwardProp: (prop) => prop !== "before",
})<any>(({ before, theme }) => ({
  cursor: "pointer",
  position: "relative",
  "& a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "&:hover": {
    "&>div>ul": {
      display: "block",
    },
  },
  ...(before && {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "10px",
      transform: "translateY(-100%)",
      borderStyle: "solid",
      borderColor: "transparent transparent black transparent",
      borderWidth: "8px 5px",
      display: "inline-block",
      zIndex: 1000,
    },
  }),
}));

const SubMenu = styled(`ul`)(({ theme }) => ({
  display: "none",
  position: "absolute",
  minWidth: "198px",
  borderRadius: "3px",
}));

const SubMenu1 = styled(SubMenu)(({ theme }) => ({
  left: 0,
  top: "100%",
}));

const MainLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<any>(({ active, theme }) => ({
  color: "white",
  textTransform: "uppercase",
  padding: "16px 0",
  ...(active && {
    color: "#DFBB75",
  }),
  "&:hover": {
    color: "#DFBB75",
    "& svg": {
      color: "#DFBB75",
    },
  },
}));

const SubLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<any>(({ active, theme }) => ({
  color: "white",
  textTransform: "uppercase",
  ...(active && {
    color: "black",
  }),
  padding: "0 17px",
  "&:hover": {
    color: "black",
  },
}));

const LogoLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const HeaderDesktop = ({ menuData }: { menuData: MenuType }) => {
  const pathname = usePathname();
  const theme = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  menuData = menuData.filter((menuItem) => menuItem.label !== "Contact");

  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CHeader
      sx={
        scrolled
          ? {
              background: "black",
              [theme.breakpoints.up("lg")]: { height: "112px", padding: "6px" },
            }
          : { background: "transparent" }
      }
    >
      <Container
        fixed
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack justifyContent="center">
          <LogoLink href="/">
            <img alt="Newland Websites logo" src="/images/large-logo.svg" />
          </LogoLink>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Nav>
            <Menu>
              {menuData.map((item, index) => (
                <MenuItem key={index} sx={{ margin: "0 22px" }}>
                  {item.link ? (
                    <MainLink
                      href={item.link.toString()}
                      active={pathname === item.link.toString()}
                    >
                      <Typography
                        variant="body1"
                        fontSize={14}
                        lineHeight="21px"
                        fontFamily="poppins"
                        fontWeight={500}
                      >
                        {item.label}
                      </Typography>
                    </MainLink>
                  ) : (
                    <Box>
                      <MainLink href="#" active={pathname.includes("/service")}>
                        <Typography
                          variant="body1"
                          fontSize={14}
                          lineHeight="21px"
                          fontFamily="poppins"
                          fontWeight={500}
                        >
                          {item.label}
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: "white",
                            fontSize: "20px",
                            ...(pathname.includes("/service") && {
                              color: theme.palette.primary.main,
                            }),
                          }}
                        />
                      </MainLink>
                      <SubMenu1 id={item.label?.toString()}>
                        {item.submenu?.map((subItem, subIndex) => (
                          <MenuItem
                            before={subIndex === 0}
                            key={`1-${subIndex}`}
                            sx={{
                              backgroundColor:
                                subItem.link?.toString() === pathname
                                  ? "#DFBB75"
                                  : "black",
                              "&:hover": {
                                backgroundColor: "#DFBB75",
                                "&::before": {
                                  borderColor: "transparent transparent #DFBB75 transparent"
                                }
                              },
                            }}
                          >
                            <SubLink
                              href={subItem.link?.toString()}
                              active={subItem.link?.toString() === pathname}
                            >
                              <Typography
                                variant="body1"
                                fontSize={14}
                                lineHeight="37px"
                                fontFamily="poppins"
                                fontWeight={500}
                              >
                                {subItem.label}
                              </Typography>
                            </SubLink>
                          </MenuItem>
                        ))}
                      </SubMenu1>
                    </Box>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Nav>
        </Stack>
        <Stack>
          <MainLink href="/contact">
            <GreenArrowButton sx={{ '&:hover': { color: "#DFBB75", background: '#4A6741' } }}>
              Contact
            </GreenArrowButton>
          </MainLink>
        </Stack>
      </Container>
    </CHeader>
  );
};

export default HeaderDesktop;
