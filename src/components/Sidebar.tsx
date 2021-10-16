import React, { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";

import Logo from "../assets/images/logo.png";
import { ReactComponent as MenuIcon } from "../assets/icons/Menu.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/Home.svg";
import { ReactComponent as UseDataIcon } from "../assets/icons/UseData.svg";
import { ReactComponent as TramQuanTracIcon } from "../assets/icons/TramQuanTrac.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/Account.svg";

const { SubMenu } = Menu;

const Sidebar: FC = () => {
  const location = useLocation();
  const [valueSelected, setValueSelected] = useState(1);

  useEffect(() => {
    switch (location.pathname.split("/")[1]) {
      case "home":
        setValueSelected(1);
        return;
      case "gstt":
        setValueSelected(20);
        return;
      case "bd":
        setValueSelected(21);
        return;
      case "camera":
        setValueSelected(22);
        return;
      case "tcdl":
        setValueSelected(23);
        return;
      case "dltb":
        setValueSelected(24);
        return;
      case "setting":
        setValueSelected(3);
        return;
      case "tk":
        setValueSelected(4);
        return;
      default:
        setValueSelected(1);
        return;
    }
  }, [location]);
  return (
    <div className="wrapSidebar">
      <div className="sidebar">
        <div className="sidebar__primary">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <div className="fontWeight-600 font-16">Monitoring</div>
            <div className="fontWeight-400 font-12">
              Giám sát trạm quan trắc
            </div>
          </div>
          <div>
            <MenuIcon />
          </div>
        </div>
        <div className="sidebar__secondary">
          <Layout>
            <Menu
              className="wrapMenuSidebar"
              mode="inline"
              selectedKeys={[valueSelected.toString()]}
              style={{ height: "100%" }}
            >
              <Menu.Item
                icon={<HomeIcon />}
                key="1"
                className="fontWeight-600 lineHeight-20 menuItem"
              >
                <Link to="/home">Trang Chủ</Link>
              </Menu.Item>
              <SubMenu
                key="2"
                icon={<UseDataIcon />}
                title="Khai thác dữ liệu"
                className="subMenu fontWeight-600"
              >
                <Menu.Item className="subMenuItem fontWeight-400" key="20">
                  <Link to="/gstt">Giám sát trực tuyến</Link>
                </Menu.Item>
                <Menu.Item className="subMenuItem fontWeight-400" key="21">
                  <Link to="/bd">Bản đồ</Link>
                </Menu.Item>
                <Menu.Item className="subMenuItem fontWeight-400" key="22">
                  <Link to="/camera">Camera</Link>
                </Menu.Item>
                <Menu.Item className="subMenuItem fontWeight-400" key="23">
                  <Link to="/tcdl">Tra cứu dữ liệu</Link>
                </Menu.Item>
                <Menu.Item className="subMenuItem fontWeight-400" key="24">
                  <Link to="/dltb">Dữ liệu trung bình</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item
                key="3"
                className="fontWeight-600 lineHeight-20 menuItem"
                icon={<TramQuanTracIcon />}
              >
                <Link to="/setting/tqt">Cấu hình</Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                className="fontWeight-600 lineHeight-20 menuItem"
                icon={<AccountIcon />}
              >
                <Link to="/tk"> Tài khoản</Link>
              </Menu.Item>
            </Menu>
          </Layout>
        </div>
        <div className="sidebar__tertiary">
          <div className="mgl-16 mgr-8">
            <img src={Logo} alt="" />
          </div>
          <div className="font-16 fontWeight-600">iLoutsLand</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
