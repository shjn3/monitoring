import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

interface _listMenuItem {
  key: number;
  link: string;
  value: string;
}
const listMenuItem: _listMenuItem[] = [
  {
    key: 1,
    link: "/setting/tqt",
    value: "Trạm Quan Trắc",
  },
  {
    key: 2,
    link: "/setting/ctqt",
    value: "Chỉ tiêu quan trắc",
  },
  {
    key: 3,
    link: "/setting/ltqt",
    value: "Loại trạm quan trắc",
  },
  {
    key: 4,
    link: "/setting/qcvn",
    value: "Qui chuẩn Việt Nam",
  },
  {
    key: 5,
    link: "/setting/aqi",
    value: "Tính toán AQI",
  },
];

const MenuSetting: React.FC = () => {
  const location = useLocation();
  const [valueSelected, setValueSelected] = useState(1);
  useEffect(() => {
    switch (location.pathname) {
      case "/setting/tqt":
        setValueSelected(1);
        return;

      case "/setting/ctqt":
        setValueSelected(2);
        return;
      case "/setting/ltqt":
        setValueSelected(3);
        return;
      case "/setting/qcvn":
        setValueSelected(4);
        return;
      case "/setting/aqi":
        setValueSelected(5);
        return;
      default:
        setValueSelected(1);
    }
  }, [location]);

  return (
    <Layout>
      <Menu
        className="setting__primary__body"
        selectedKeys={[valueSelected.toString()]}
      >
        <div className="setting__primary__body--title fontWeight-600">
          Kết nối
        </div>
        {listMenuItem.slice(0, 3).map((item: any) => (
          <Menu.Item
            key={item.key}
            className="setting__primary__body--itemMenu mgt-20"
          >
            <Link to={item.link}>{item.value}</Link>
          </Menu.Item>
        ))}
        <div className="setting__primary__body--title fontWeight-600">
          Tính toán
        </div>

        {listMenuItem.slice(3, 5).map((item: any) => (
          <Menu.Item
            key={item.key}
            className="setting__primary__body--itemMenu mgt-20"
          >
            <Link to={item.link}>{item.value}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout>
  );
};

export default MenuSetting;
