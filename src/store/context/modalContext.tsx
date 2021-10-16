import { createContext, useReducer } from "react";
import { modalReducer } from "../reducer/modalReducer";
import { SET_MODAL } from "./contants";
interface _props {
  children: React.ReactNode;
}
interface _ModalContext {
  modalState: {
    type: number;
    isShowModal: boolean;
    item: any;
  };
  openModal: (item: any, type: number) => void;
  closeModal: (item: any) => void;
}

export const ModalContext = createContext<_ModalContext>({
  modalState: {
    isShowModal: false,
    item: null,
    type: 1,
  },
  openModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider = ({ children }: _props) => {
  const [modalState, dispatch] = useReducer(modalReducer, {
    isShowModal: false,
    item: null,
    type: 1,
  });
  const openModal = (item: any, type: number) => {
    dispatch({
      type: SET_MODAL,
      payload: {
        item,
        isShowModal: true,
        type,
      },
    });
  };
  const closeModal = (item: any) => {
    dispatch({
      type: SET_MODAL,
      payload: {
        isShowModal: false,
        item,
        type: 1,
      },
    });
  };

  const ModalContextData: _ModalContext = { closeModal, openModal, modalState };
  return (
    <ModalContext.Provider value={ModalContextData}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
