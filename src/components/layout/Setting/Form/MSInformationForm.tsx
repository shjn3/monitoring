import { useContext, useEffect } from "react";

import { Form, Input, Select, Button } from "antd";
import { ModalContext } from "../../../../store/context/modalContext";

const MSInformationForm = () => {
  const { modalState, closeModal } = useContext(ModalContext);
  const { item, type } = modalState;
  const [formUpdate] = Form.useForm();
  const handleFinish = () => {
    closeModal(null);
    formUpdate.resetFields();
  };
  const onSubmit = () => {
    formUpdate.submit();
  };
  useEffect(() => {
    if (item) {
      formUpdate.setFieldsValue({
        code: item.code,
        name: item.name,
        address: item.address,
        type,
      });
    } else {
      formUpdate.setFieldsValue({
        code: "",
        name: "",
        address: "",
        type: 1,
      });
    }
  }, [formUpdate, item, type]);
  return (
    <Form
      size="large"
      className="monitoringStationsModal__form"
      form={formUpdate}
      onFinish={handleFinish}
    >
      <div className="monitoringStationsModal__form--item">
        <div className="monitoringStationsModal__form--item__title">
          Mã trạm <span style={{ color: "red" }}>(*)</span>
        </div>
        <Form.Item name="code">
          <Input
            placeholder="Mã trạm của bạn"
            className="monitoringStationsModal__form--item__input"
          />
        </Form.Item>
        <div className="monitoringStationsModal__form--item__notes">
          Đây là mã không thể đổi
        </div>
      </div>

      <div className="monitoringStationsModal__form--item">
        <div className="monitoringStationsModal__form--item__title">
          Tên trạm <span style={{ color: "red" }}>(*)</span>
        </div>
        <Form.Item name="name">
          <Input
            placeholder="Tên trạm quan trắc"
            className="monitoringStationsModal__form--item__input"
          />
        </Form.Item>
        <div className="monitoringStationsModal__form--item__notes">
          Đặt tên dễ tiều kiếm
        </div>
      </div>

      <div className="monitoringStationsModal__form--item">
        <div className="monitoringStationsModal__form--item__title">
          Kinh độ <span style={{ color: "red" }}>(*)</span>
        </div>
        <Form.Item>
          <Input
            placeholder="Vị trí kinh độ"
            className="monitoringStationsModal__form--item__input"
          />
        </Form.Item>
        <div className="monitoringStationsModal__form--item__notes">
          Đây là mã không thể đổi
        </div>
      </div>

      <div className="monitoringStationsModal__form--item">
        <div className="monitoringStationsModal__form--item__title">
          Vĩ độ <span style={{ color: "red" }}>(*)</span>
        </div>
        <Form.Item>
          <Input
            placeholder="Vị trí vĩ đọ"
            className="monitoringStationsModal__form--item__input"
          />
        </Form.Item>
        <div className="monitoringStationsModal__form--item__notes">
          Đây là mã không thể đổi
        </div>
      </div>

      <div className="monitoringStationsModal__form--item">
        <div className="monitoringStationsModal__form--item__title">
          Địa chỉ <span style={{ color: "red" }}>(*)</span>
        </div>
        <Form.Item name="address">
          <Input
            placeholder="Địa chỉ trạm quan trắc của bạn"
            className="monitoringStationsModal__form--item__input"
          />
        </Form.Item>
        <div className="monitoringStationsModal__form--item__notes">
          Đây là mã không thể đổi
        </div>
      </div>
      <div className="monitoringStationsModal__form--item">
        <div className="monitoringStationsModal__form--item__title">
          Loại trạm<span style={{ color: "red" }}>(*)</span>
        </div>
        <Form.Item name="type">
          <Select className="monitoringStationsModal__form--item__select">
            <Select.Option value={1}>Không khí</Select.Option>
            <Select.Option value={2}>Mặt nước</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Form.Item>
        <Button type="primary" className="btn--update" onClick={onSubmit}>
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MSInformationForm;
