import { createClient } from "@/prismicio";
import { KeyTextField, LinkField } from "@prismicio/client";
import HeaderClient from "./HeaderClient";

export type LinkItemType = {
  label: KeyTextField;
  link: LinkField & { url: string };
};
export type SingleMenuType = {
  label: KeyTextField;
  link?: LinkField & { url: string };
  submenu?: Array<SingleMenuType>;
};
export type MenuType = Array<SingleMenuType>;

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const menuSlice = settings.data.slices3;

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

  return <HeaderClient menuData={menuData} />;
};

export default Header;
