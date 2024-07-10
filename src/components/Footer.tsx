import { createClient } from "@/prismicio";
import { MenuType } from "./Header";
import FooterClient from "./FooterClient";

export type ContactDataType = {
  location: string;
  phone: string;
  email: string;
};

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const menuSlice = settings.data.slices3;
  const contactData: ContactDataType = {
    location: settings.data.address as string,
    phone: settings.data.phone as string,
    email: settings.data.email as string,
  };

  const buildMenuTree = async (slice: any): Promise<any> => {
    let result = [];
    for (let i = 0; i < slice.length; i++) {
      if (slice[i].variation === "default") {
        for (let j = 0; j < slice[i].items.length; j++) {
          const item: any = slice[i].items[j];
          result.push({
            label: item.label,
            link: item.link.url,
          });
        }
      } else {
        for (let j = 0; j < slice[i].items.length; j++) {
          const item = slice[i].items[j];
          const submenuDoc = (await client.getByID(item.submenu.id)) as any;
          const submenuSlice = submenuDoc.data.slices;
          result.push({
            label: item.label,
            submenu: await buildMenuTree(submenuSlice),
          });
        }
      }
    }
    return result;
  };

  const menuData: MenuType = await buildMenuTree(menuSlice);

  return <FooterClient menuData={menuData} contactData={contactData} />;
};

export default Footer;
