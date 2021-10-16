import React from "react";
import MenuSetting from "../components/Setting/MenuSetting";
import MonitoringStationsSetting from "../components/Setting/MonitoringStationsSetting";
import OtherSetting from "../components/Setting/OtherSetting";
import { Switch, Route } from "react-router-dom";
import MonitoringStationsProvider from "../store/context/monitoringStationsContext";

interface __listSetting {
  id: number;
  path: string;
  component: React.ReactNode;
}
const listSetting: __listSetting[] = [
  {
    id: 1,
    path: "/setting/tqt",
    component: MonitoringStationsSetting,
  },
  {
    id: 2,
    path: "/setting/ctqt",
    component: OtherSetting,
  },
  {
    id: 3,
    path: "/setting/ltqt",
    component: OtherSetting,
  },
  {
    id: 4,
    path: "/setting/qcvn",
    component: OtherSetting,
  },
  {
    id: 5,
    path: "/setting/aqi",
    component: OtherSetting,
  },
];

const Setting: React.FC = () => {
  return (
    <MonitoringStationsProvider>
      <div className="wrapSetting">
        <div className="setting__primary">
          <div className="setting__primary__title">
            <span>Cấu hình</span>
          </div>
          <div className="setting__primary__wrapBody">
            <MenuSetting />
          </div>
        </div>
        <div className="setting__secondary">
          <Switch>
            {listSetting.map((item) => (
              <Route key={item.id} exact path={item.path}>
                {item.component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </MonitoringStationsProvider>
  );
};

export default Setting;
