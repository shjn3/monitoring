import React, { createContext, useReducer, useEffect } from "react";

import { SET_AIR, SET_WATER } from "./contants";
import { monitoringStationsReducer } from "../reducer/monitoringStationsReducer";
import { listAir } from "../../api/MonirotingStationsApi";

interface _props {
  children: React.ReactNode;
}
interface _state {
  dataAir: any;
  dataWater: any;
}

interface _dataContext {
  monitoringstationsState: _state;
  getDataWater: () => void;
  getDataAir: () => void;
}

export const MonitoringStationsContext = createContext<_dataContext>({
  monitoringstationsState: {
    dataAir: null,
    dataWater: null,
  },
  getDataAir: () => {},
  getDataWater: () => {},
});

const MonitoringStationsContextProvider = ({ children }: _props) => {
  const [monitoringstationsState, dispatch] = useReducer(
    monitoringStationsReducer,
    {
      dataAir: null,
      dataWater: null,
    }
  );
  const getDataAir = () => {
    dispatch({
      type: SET_AIR,
      payload: {
        dataAir: listAir,
      },
    });
  };

  const getDataWater = () => {
    dispatch({
      type: SET_WATER,
      payload: {
        dataWater: listAir,
      },
    });
  };
  useEffect(() => {
    getDataWater();
    getDataAir();
  }, []);
  const monitoringStationContextData: _dataContext = {
    getDataWater,
    getDataAir,
    monitoringstationsState,
  };

  return (
    <MonitoringStationsContext.Provider value={monitoringStationContextData}>
      {children}
    </MonitoringStationsContext.Provider>
  );
};

export default MonitoringStationsContextProvider;
