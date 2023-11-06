import { useEffect, memo } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import App from "../../routes/index";
import Topbar from "../Topbar";
import AppSidebar from "./AppSidebar";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
} from "../../constants/ThemeSetting";
import { updateWindowWidth } from "../../appRedux/actions";
import type { RootState } from "../../appRedux/store";

const { Content, Footer } = Layout;

const getContainerClass = (navStyle: string) => {
  switch (navStyle) {
    case NAV_STYLE_DARK_HORIZONTAL:
      return "gx-container-wrap";
    case NAV_STYLE_DEFAULT_HORIZONTAL:
      return "gx-container-wrap";
    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
      return "gx-container-wrap";
    case NAV_STYLE_BELOW_HEADER:
      return "gx-container-wrap";
    case NAV_STYLE_ABOVE_HEADER:
      return "gx-container-wrap";
    default:
      return "";
  }
};

const getNavStyles = (navStyle: string) => {
  switch (navStyle) {
    case NAV_STYLE_FIXED:
      return <Topbar />;
    case NAV_STYLE_DRAWER:
      return <Topbar />;
    case NAV_STYLE_MINI_SIDEBAR:
      return <Topbar />;

    default:
      return null;
  }
};

const MainApp = () => {
  // CONSTANTS
  const dispatch = useDispatch();

  // STATE
  const { navStyle } = useSelector(({ settings }: RootState) => settings);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  return (
    <>
      <Layout className="gx-app-layout">
        <AppSidebar navStyle={navStyle} />
        <Layout>
          {getNavStyles(navStyle)}
          <Content
            className={`gx-layout-content ${getContainerClass(navStyle)} `}
          >
            <App />
            <Footer>
              <div className="gx-layout-footer-content">
                {/* get year from current year(YYYY) - next year (YY) */}
                <div>
                  © abc Limited. {new Date().getFullYear()}-
                  {(new Date().getFullYear() + 1).toString().slice(2)}
                </div>
              </div>
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default memo(MainApp);
