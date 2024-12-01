import { Button, Form, Input, message, Upload } from 'antd';
import React from 'react';

import { UploadOutlined } from '@ant-design/icons';

function UploadNoteModal({ selectedRow }) {
  console.log('selectedRow', selectedRow);

  const initialValues = selectedRow
    ? {
        note: selectedRow.note,
        files: selectedRow.files,
      }
    : { note: '', files: '' };

  const handleUploadChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} dosyası başarıyla yüklendi.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} dosyası yüklenirken bir hata oluştu.`);
    }
  };

  const onFinishHandle = (value) => {
    const formData = new FormData();
    formData.append('note', value.note);
    formData.append('files', value.files.file);

    console.log('value', formData);
  };

  return (
    <>
      <Form initialValues={initialValues} onFinish={onFinishHandle}>
        <Form.Item label="Not Ekle" name="note">
          <Input />
        </Form.Item>
        <Form.Item label="Resim Ekle" name="files">
          <Upload
            action="/upload" // Yükleme işlemi için API endpointi
            listType="picture"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleUploadChange}
            showUploadList={true}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Yükle</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Gönder
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UploadNoteModal;