import { Button, Layout, Result } from 'antd';
import React from 'react';
export default function error403() {
  return (
    <Layout className="error-layout">
      <Result
        status="403"
        title="403"
        subTitle="Bu sayfaya erişim yetkiniz bulunmamaktadır."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Anasayfaya Dön
          </Button>
        }
      />
    </Layout>
  );
}
