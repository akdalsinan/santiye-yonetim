import { Button, Layout, Result } from 'antd';
import React from 'react';
const Error404 = ({ error }) => {
  console.log('error', error);
  return (
    <Layout className="error-layout">
      <Result
        status="404"
        title="404"
        subTitle="Üzgünüz, ziyaret ettiğiniz sayfa mevcut değil."
        extra={
          <Button type="primary" href="/">
            Anasayfa
          </Button>
        }
      >
        <div className="desc">
          <pre>
            <p>Hata Mesajı:</p>
            <br />
            {/* {error.message} */}
          </pre>
        </div>
      </Result>
    </Layout>
  );
};
export default Error404;
