import React, { Dispatch, SetStateAction } from "react";
import { Menu, MenuProps } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SidebarLogo from "./SidebarLogo";
import { THEME_TYPE_LITE } from "../../constants/ThemeSetting";
import type { RootState } from "../../appRedux/store";

type SidebarContentProps = {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
  userData: any;
};

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: "group"): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
};

/* utility function */

const generateGeneralSettings = () => {
  const settings: Array<MenuItem> = [];

  settings.push(getItem("User Management", "user-management"));
  settings.push(getItem("Master Management", "master-management"));

  return getItem("Settings", "settings", <i className="icon icon-setting" />, settings);
};

const generateHomeSettings = () => {
  /* main-icon/item for all these sub-menu items */
  return getItem("Dashboard", "home", <i className="icon icon-home" />);
};

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed, userData }: SidebarContentProps) => {
  const history = useHistory();
  const { themeType } = useSelector(({ settings }: RootState) => settings);
  const pathname = useSelector(({ common }: RootState) => common.pathname);
  const selectedKeys = pathname?.substr(1)?.split("/")?.at(0);
  const defaultOpenKeys = selectedKeys?.split("/")[1];

  const handleOnClick: MenuProps["onClick"] = (menuItem) => {
    const keyPath = menuItem.keyPath.at(0);
    if (keyPath === "home") return history.push("/home");
    if (keyPath === "user-management") return history.push("/user/list");
    if (keyPath === "master-management") return history.push("/master-management");
    if (keyPath === "tagless-list") return history.push("/tagless-list");

    /* If no keypath found then move to coming-soon page */
    return history.push("/coming-soon");
  };

  /* we populate our menu based on access_control_master in the DB */
  const items: MenuItem[] = [];
  items.push(generateHomeSettings());
  items.push(getItem("List Tagless Incident", "tagless-list", <i className="icon icon-product-list" />));
  items.push(generateGeneralSettings());

  return (
    <>
      {/* hamburger icon */}
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
      {/* custom scrollbar when window height is small */}
      {/* <CustomScrollbars className="gx-layout-sider-scrollbar"> */}
      <Menu onClick={handleOnClick} style={{ paddingTop: "10px" }} defaultOpenKeys={[defaultOpenKeys!]} defaultSelectedKeys={[selectedKeys!]} theme={themeType === THEME_TYPE_LITE ? "light" : "dark"} mode="inline" items={items}></Menu>
      {/* </CustomScrollbars> */}
    </>
  );
};

export default React.memo(SidebarContent);
