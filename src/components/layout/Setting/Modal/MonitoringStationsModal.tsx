import React, { useContext, useState } from "react";

import { ReactComponent as CloseIcon } from "../../../../assets/icons/Close.svg";
import { Menu } from "antd";
import { ModalContext } from "../../../../store/context/modalContext";
import MSInformationForm from "../Form/MSInformationForm";
import OtherForm from "../Form/OtherForm";
interface listFormModalMS {
  key: number;
  value: string;
  formComponent: React.ReactNode;
}

const _listFormModalMS: listFormModalMS[] = [
  {
    key: 1,
    value: "Thông tin",
    formComponent: <MSInformationForm />,
  },
  {
    key: 2,
    value: "Thông số",
    formComponent: <OtherForm />,
  },
  {
    key: 3,
    value: "FTP",
    formComponent: <OtherForm />,
  },
  {
    key: 4,
    value: "Lấy Mẫu",
    formComponent: <OtherForm />,
  },
  {
    key: 5,
    value: "Camera",
    formComponent: <OtherForm />,
  },
];

const MonitoringStationsModal: React.FC = () => {
  const { modalState, closeModal } = useContext(ModalContext);
  const { isShowModal } = modalState;
  const [keyMenuItemSelect, setKeyMenuItemSelect] = useState(1);

  const handleClose = () => {
    closeModal(null);
  };

  return (
    <div
      className={
        isShowModal
          ? "wrapMonitoringStationsModal active"
          : "wrapMonitoringStationsModal"
      }
    >
      <div className="overflow" onClick={handleClose}></div>
      <div className="monitoringStationsModal">
        <div>
          <div className="monitoringStationsModal__title">
            <div>Ha Noi Capital</div>
            <div
              className="monitoringStationsModal__title--iconClose"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="monitoringStationsModal__menu">
            <Menu
              className="monitoringStationsModal__menu--items"
              defaultSelectedKeys={["1"]}
            >
              {_listFormModalMS.map((item: any) => (
                <Menu.Item
                  key={item.key}
                  className="monitoringStationsModal__menu--item"
                  onClick={() => setKeyMenuItemSelect(item.key)}
                >
                  {item.value}
                </Menu.Item>
              ))}
            </Menu>
          </div>
          <div className="monitoringStationsModal__wrapForm">
            {_listFormModalMS[keyMenuItemSelect - 1].formComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringStationsModal;
