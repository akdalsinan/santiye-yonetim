import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

function EnvanterEkleModal() {
  return (
    <>
      <Form
        // form={form}
        // initialValues={initialValues}
        // onFinish={handleFinish}
        layout="vertical"
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Form.Item
          name="gelisTarihi"
          label="Geliş Tarihi"
          rules={[{ required: true, message: 'Geliş tarihi gerekli!' }]}
        >
          <DatePicker style={{ width: '100%' }} format="DD-MM-YYYY" />
        </Form.Item>

        <Form.Item
          name="malzemeAdi"
          label="Malzemenin Adı"
          rules={[{ required: true, message: 'Malzeme adı gerekli!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="birimDegeri"
          label="Birim Değeri (KG)"
          rules={[{ required: true, message: 'Birim değeri gerekli!' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="gelenMiktar"
          label="Gelen Miktar"
          rules={[{ required: true, message: 'Gelen miktar gerekli!' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="toplamMiktar"
          label="Toplam Miktar"
          rules={[{ required: true, message: 'Toplam miktar gerekli!' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="birimi"
          label="Birimi"
          rules={[{ required: true, message: 'Birim seçimi gerekli!' }]}
        >
          <Select>
            <Option value="KG">KG</Option>
            <Option value="TON">TON</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="irsaliye"
          label="İrsaliye"
          rules={[{ required: true, message: 'İrsaliye bilgisi gerekli!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="not" label="Not">
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default EnvanterEkleModal;
