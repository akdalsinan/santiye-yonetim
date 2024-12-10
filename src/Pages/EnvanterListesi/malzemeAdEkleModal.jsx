import { Button, Form, Input, message, Upload } from 'antd';
import React from 'react';
import { addmaterial, updatematerial } from '../../services/envanterListesi';

function MalzemeAdEkleModal({ selectedRow, modal }) {
  const initialValues = selectedRow
    ? {
        materialName: selectedRow.materialName,
      }
    : { materialName: '' };

  const onFinishHandle = (value) => {
    const id = selectedRow ? selectedRow.id : null;
    const createData = { ...value };

    if (selectedRow) {
      // updatematerial(updateData, id).then((response) => {
      //   const { isSuccess, resultMessage, resultSet } = response;
      //   if (isSuccess && resultSet !== undefined) {
      //     openNotification('success', resultMessage[0]);
      //     modal.destroy();
      //   }
      // });
    } else {
      // addmaterial(createData).then((response) => {
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
      <Form initialValues={initialValues} onFinish={onFinishHandle}>
        <Form.Item label="Envanter Ad" name="materialName">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Gönder
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MalzemeAdEkleModal;
