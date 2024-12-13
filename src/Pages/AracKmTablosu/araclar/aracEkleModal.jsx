import React from 'react';
import { Form, Input, Button } from 'antd';
import { addVehicle, updateVehicle } from '../../../services/aracKm';

function AracEkleModal({ selectedRow, modal }) {
  const initialValues = selectedRow
    ? {
        ...selectedRow,
      }
    : {};

  const onFinishHandle = (value) => {
    const id = selectedRow ? selectedRow.id : null;
    const createData = { ...value };

    if (selectedRow) {
      // updateVehicle(createData, id).then((response) => {
      //   const { isSuccess, resultMessage, resultSet } = response;
      //   if (isSuccess && resultSet !== undefined) {
      //     openNotification('success', resultMessage[0]);
      //     modal.destroy();
      //   }
      // });
    } else {
      // addVehicle(createData).then((response) => {
      //   const { isSuccess, resultMessage, resultSet } = response;
      //   if (isSuccess && resultSet !== undefined) {
      //     openNotification('success', resultMessage[0]);
      //     modal.destroy();
      //   }
      // });
    }
  };

  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinishHandle}
        style={{ maxWidth: 400, margin: '0 auto' }}
        initialValues={initialValues}
      >
        <Form.Item label="Marka" name="brand">
          <Input />
        </Form.Item>

        <Form.Item label="Model" name="model">
          <Input />
        </Form.Item>

        <Form.Item label="Plaka" name="plaka">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default AracEkleModal;
