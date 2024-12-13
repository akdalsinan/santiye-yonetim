import React from 'react';
import dayjs from 'dayjs';
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';
import { addVehicleKm, updateVehicleKm } from '../../../services/aracKm';

function AracKmEkleForm({ selectedRow, modal }) {
  const initialValues = selectedRow
    ? {
        ...selectedRow,
        carDate: dayjs(selectedRow.carDate),
      }
    : {};

  const onFinishHandle = (value) => {
    const id = selectedRow ? selectedRow.id : null;
    const createData = { ...value };

    if (selectedRow) {
      // updateVehicleKm(createData, id).then((response) => {
      //   const { isSuccess, resultMessage, resultSet } = response;
      //   if (isSuccess && resultSet !== undefined) {
      //     openNotification('success', resultMessage[0]);
      //     modal.destroy();
      //   }
      // });
    } else {
      // addVehicleKm(createData).then((response) => {
      //   const { isSuccess, resultMessage, resultSet } = response;
      //   if (isSuccess && resultSet !== undefined) {
      //     openNotification('success', resultMessage[0]);
      //     modal.destroy();
      //   }
      // });
    }
  };

  return (
    <div>
      {' '}
      <Form
        name="carForm"
        initialValues={initialValues}
        onFinish={onFinishHandle}
        layout="vertical"
      >
        <Form.Item label="Car Date" name="carDate">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Starting KM" name="startingKm">
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Ending KM" name="endingKm">
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AracKmEkleForm;
