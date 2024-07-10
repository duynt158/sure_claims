"use client";
import { useMediaQuery } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { MenuType } from "./Header";

const HeaderClient = ({ menuData }: { menuData: MenuType }) => {
  const matches = useMediaQuery("(min-width:1024px)");

  if (matches) {
    return <HeaderDesktop menuData={menuData} />;
  } else {
    return <HeaderMobile menuData={menuData} />;
  }
};

export default HeaderClient;
