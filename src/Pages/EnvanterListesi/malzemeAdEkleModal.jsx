import { Button, Form, Input, message, Upload } from 'antd';
import React from 'react';

function MalzemeAdEkleModal({ selectedRow }) {
  const initialValues = selectedRow
    ? {
        note: selectedRow.note,
        files: selectedRow.files,
      }
    : { note: '', files: '' };

  const onFinishHandle = (value) => {
    console.log('value', value);
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
