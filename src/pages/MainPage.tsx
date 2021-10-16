import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { Switch, Route } from "react-router-dom";
import Setting from "./SettingPage";
import HomePage from "./HomePage";
import MonitoringStationsModal from "../components/Setting/Modal/MonitoringStationsModal";
import ModalContextProvider from "../store/context/modalContext";

interface _listPage {
  id: number;
  path: string;
  component: React.ReactNode;
}

const listPage: _listPage[] = [
  {
    id: 1,
    path: "/setting",
    component: <Setting />,
  },
  {
    id: 2,
    path: "/home",
    component: <HomePage />,
  },
  {
    id: 3,
    path: "/setting/:id",
    component: <Setting />,
  },
  {
    id: 4,
    path: "/gstt",
    component: <HomePage />,
  },
  {
    id: 5,
    path: "/bd",
    component: <HomePage />,
  },
  {
    id: 6,
    path: "/camera",
    component: <HomePage />,
  },
  {
    id: 7,
    path: "/tcdl",
    component: <HomePage />,
  },
  {
    id: 8,
    path: "/dltb",
    component: <HomePage />,
  },
  {
    id: 9,
    path: "/tk",
    component: <HomePage />,
  },
];

const MainPage: React.FC<any> = () => {
  return (
    <>
      <ModalContextProvider>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Sidebar />
          <Switch>
            {listPage.map((item) => (
              <Route key={item.id} path={item.path}>
                {item.component}
              </Route>
            ))}
          </Switch>
        </div>
        <MonitoringStationsModal />
      </ModalContextProvider>
    </>
  );
};

export default MainPage;
