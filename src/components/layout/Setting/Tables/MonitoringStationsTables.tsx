import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as UnfoldIcon } from "../../../../assets/icons/Unfold.svg";
import { ReactComponent as ConnectionIcon } from "../../../../assets/icons/Connection.svg";

import { MonitoringStationsContext } from "../../../../store/context/monitoringStationsContext";
import { ModalContext } from "../../../../store/context/modalContext";

const MonitoringStationsTables: React.FC = () => {
  const { monitoringstationsState } = useContext(MonitoringStationsContext);
  const { openModal, modalState } = useContext(ModalContext);
  const { dataAir, dataWater } = monitoringstationsState;
  const [listAir, setListAir] = useState<any>(null);
  const [listWater, setListWater] = useState<any>(null);
  useEffect(() => {
    setListAir(dataAir);
  }, [dataAir]);

  useEffect(() => {
    setListWater(dataWater);
  }, [dataWater]);

  const [isShowAir, setIsShowAir] = useState(false);
  const [isShowWater, setIsShowWater] = useState(false);
  const [showStatus, setShowStatus] = useState({
    water: 0,
    air: 0,
  });

  useEffect(() => {
    if (modalState.item === null) {
      setShowStatus({
        water: 0,
        air: 0,
      });
    }
  }, [modalState]);

  const handleConnectionItem = (type: string, id: number, item: any) => {
    //Item air
    switch (type) {
      case "air":
        setShowStatus({
          ...showStatus,
          air: id,
        });
        openModal(item, 1);
        return;
      case "water":
        setShowStatus({
          ...showStatus,
          water: id,
        });
        openModal(item, 2);
        return;
      default:
        return;
    }

    //Item water
  };
  return (
    <>
      <div className="wrapMonitoringStationsTable">
        <div className="monitoringStationsTable__title">
          <div>
            <span>
              <UnfoldIcon />
            </span>
            <span>Mã Trạm</span>
          </div>
          <div>Tên Trạm</div>
          <div>Địa chỉ</div>
          <div>Ngày hoạt động</div>
        </div>
        <div className="monitoringStationsTable__body">
          <div
            className={
              isShowAir
                ? "open monitoringStationsTableAir"
                : "monitoringStationsTableAir"
            }
          >
            <div
              className={"monitoringStationsTableAir__title"}
              onClick={() => setIsShowAir(!isShowAir)}
            >
              <span>
                <i></i>
              </span>
              <span>
                Trạm không khí
                <span> ({listAir ? listAir.length : 0})</span>
              </span>
            </div>
            <div className="monitoringStationsTableAir__body">
              {listAir?.map((item: any) => (
                <div
                  className={
                    item.id === showStatus.air
                      ? "monitoringStationsTableAir__body--item active"
                      : "monitoringStationsTableAir__body--item"
                  }
                  key={item.id}
                  onClick={() => handleConnectionItem("air", item.id, item)}
                >
                  <div className="monitoringStationsTableAir__body--item__code">
                    <div>{item.code}</div>
                  </div>

                  <div className="monitoringStationsTableAir__body--item__name">
                    <div>{item.name}</div>
                  </div>
                  <div className="monitoringStationsTableAir__body--item__address">
                    <div>{item.address}</div>
                  </div>
                  <div className="monitoringStationsTableAir__body--item__status">
                    <div>
                      <span>
                        <ConnectionIcon />
                      </span>
                      <span>Đang kết nối</span>
                    </div>
                  </div>
                  <div className="monitoringStationsTableAir__body--item__dateActive">
                    <div>{item.dateActive}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="monitoringStationsTable__body">
          <div
            className={
              isShowWater
                ? "open monitoringStationsTableAir"
                : "monitoringStationsTableAir"
            }
          >
            <div
              className={"monitoringStationsTableAir__title"}
              onClick={() => setIsShowWater(!isShowWater)}
            >
              <span>
                <i></i>
              </span>
              <span>
                Trạm Mặt nước
                <span> ({listWater ? listWater.length : 0})</span>
              </span>
            </div>
            <div className="monitoringStationsTableAir__body">
              {listWater?.map((item: any) => (
                <div
                  className={
                    item.id === showStatus.water
                      ? "monitoringStationsTableAir__body--item active"
                      : "monitoringStationsTableAir__body--item"
                  }
                  key={item.id}
                  onClick={() => handleConnectionItem("water", item.id, item)}
                >
                  <div className="monitoringStationsTableAir__body--item__code">
                    <div>{item.code}</div>
                  </div>

                  <div className="monitoringStationsTableAir__body--item__name">
                    <div>{item.name}</div>
                  </div>
                  <div className="monitoringStationsTableAir__body--item__address">
                    <div>{item.address}</div>
                  </div>
                  <div className="monitoringStationsTableAir__body--item__status">
                    <div>
                      <span>
                        <ConnectionIcon />
                      </span>
                      <span>Đang kết nối</span>
                    </div>
                  </div>
                  <div className="monitoringStationsTableAir__body--item__dateActive">
                    <div>{item.dateActive}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitoringStationsTables;
