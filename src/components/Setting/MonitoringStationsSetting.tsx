import React from "react";
import { Button } from "antd";

import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";

import MonitoringStationsTables from "./Tables/MonitoringStationsTables";
const MonitoringStationsSetting: React.FC = () => {
  return (
    <div className="WrapMonitoringStations">
      <div className="monitoringStations__header">
        <div className="monitoringStations__header--title">Trạm Quan Trắc</div>
        <div className="monitoringStations__header--btn">
          <Button className="btn--CreateMonitoringStations">
            <span>
              <PlusIcon />
            </span>
            Tạo trạm
          </Button>
        </div>
      </div>
      <div className="monitoringStations__wrapBody">
        <MonitoringStationsTables />
      </div>
    </div>
  );
};

export default MonitoringStationsSetting;
