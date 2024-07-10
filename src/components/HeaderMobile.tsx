"use client";
import React from "react";
import Link from "next/link";
import { MenuType } from "./Header";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CHeader } from "./HeaderDesktop";
import {
  Box,
  Container,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { HamburgerIcon } from "./Icons";
import { GreenArrowButton } from "./Buttons";

const NavLink = styled(Link)(({ theme }) => ({
  display: "inline-block",
  lineHeight: "0",
}));

const Menu = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  "& ul": {
    listStyle: "none",
    padding: 0,
  },
}));

const MenuItem = styled("li")(({ theme }) => ({
  "& a": {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    "& p": {
      fontSize: "15px",
      fontWeight: 500,
      cursor: "pointer",
      textTransform: "uppercase",
    },
  },
}));

const SubMenu = styled(`ul`)(({ theme }) => ({}));

const Nav = styled(`nav`)(({ theme }) => ({
  position: "fixed",
  top: 0,
  zIndex: "99",
  width: "100vw",
  height: "100vh",
  overflowY: "auto",
  background: "black",
  padding: "24px 13px",
  transition: ".5s",
}));

const CAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  background: "transparent",
}));
const CAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 0,
  minHeight: "fit-content!important",
  "&>div": {
    margin: "0!important",
  },
}));
const CAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: 0,
}));
const CLink = styled(Link)(({ theme }) => ({
  "@media (max-width: 365px)": {
    display: "none"
  }
}));

const HeaderMobile = ({ menuData }: { menuData: MenuType }) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<Array<string>>([]);
  const [scrolled, setScrolled] = React.useState(false);
  menuData = menuData.filter((menuItem) => menuItem.label !== "Contact");

  const handleExpand = (element: string) => {
    if (expanded.includes(element)) {
      setExpanded(expanded.filter((ele) => ele !== element));
    } else {
      setExpanded([...expanded, element]);
    }
  };

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
            height: "72px",
            padding: "6px 0",
          }
        : { background: "transparent" }
    }
    >
      <Container fixed maxWidth="xl" sx={{ display: "flex" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box sx={{ cursor: "pointer", lineHeight: "0" }}>
            <NavLink href="/">
              <img alt="LOGO" height="60px" src="/images/large-logo.svg" />
            </NavLink>
          </Box>
          <CLink href={"/contact"} onClick={() => setNavOpen(false)}>
            <GreenArrowButton sx={{ width: "fit-content", fontSize: "14px" }}>
              Contact
            </GreenArrowButton>
          </CLink>
          <Box sx={{ cursor: "pointer" }} onClick={() => setNavOpen(true)}>
            <HamburgerIcon sx={{ color: "white" }} />
          </Box>
        </Stack>
        <Nav sx={navOpen ? { left: "0" } : { left: "-100%" }}>
          <Stack direction="row" justifyContent="flex-end">
            <Box sx={{ cursor: "pointer" }} onClick={() => setNavOpen(false)}>
              <CloseIcon sx={{ fontSize: "24px", color: "white" }} />
            </Box>
          </Stack>
          <Menu>
            {menuData.map((item, index) => (
              <MenuItem key={index}>
                {item.link ? (
                  <Link
                    href={item.link.toString()}
                    onClick={() => setNavOpen(false)}
                  >
                    <Typography
                      variant="body1"
                      fontFamily="poppins"
                      color={
                        item.link.toString() === pathname ? "#DEBA75" : "white"
                      }
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ) : (
                  <CAccordion>
                    <CAccordionSummary
                      onClick={() =>
                        handleExpand((item.label?.toString() as string) + index)
                      }
                      expandIcon={
                        expanded.includes(
                          (item.label?.toString() as string) + index
                        ) ? (
                          <RemoveIcon sx={{
                            color:
                              item.label?.toLowerCase() === "services" &&
                              pathname.includes("/service")
                                ? "#DEBA75"
                                : "white",
                          }} />
                        ) : (
                          <AddIcon sx={{
                            color:
                              item.label?.toLowerCase() === "services" &&
                              pathname.includes("/service")
                                ? "#DEBA75"
                                : "white",
                          }} />
                        )
                      }
                      aria-controls={`panel-${item.label}-content`}
                      id={`panel-${item.label}-header`}
                    >
                      <a href="#">
                        <Typography
                          variant="body1"
                          sx={{
                            color:
                              item.label?.toLowerCase() === "services" &&
                              pathname.includes("/service")
                                ? "#DEBA75"
                                : "white",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </a>
                    </CAccordionSummary>
                    <CAccordionDetails>
                      <SubMenu className="hide" id={item.label?.toString()}>
                        {item.submenu?.map((subItem, subIndex) => (
                          <MenuItem
                            key={`1-${subIndex}`}
                            className="submenu-item-2"
                          >
                            <Link
                              href={subItem.link?.toString() as string}
                              onClick={() => setNavOpen(false)}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: "13px!important",
                                  fontWeight: "300!important",
                                  color: subItem.link?.toString() === pathname ? "#DEBA75" : "white"
                                }}
                              >
                                {subItem.label}
                              </Typography>
                            </Link>
                          </MenuItem>
                        ))}
                      </SubMenu>
                    </CAccordionDetails>
                  </CAccordion>
                )}
              </MenuItem>
            ))}
          </Menu>
          <Link href={"/contact"} onClick={() => setNavOpen(false)}>
            <GreenArrowButton sx={{ width: "fit-content", fontSize: "14px" }}>
              Contact
            </GreenArrowButton>
          </Link>
        </Nav>
      </Container>
    </CHeader>
  );
};

export default HeaderMobile;
