import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import './style.scss';

const TeklifCard = ({ data }) => {
  const priceItems = data.price ? data.price.slice(0, 3) : [];
  return (
    <Card className="teklif-card">
      <Row justify="space-evenly" align="middle">
        <Col xs={24} md={4} lg={4}>
          <img
            className="logo"
            src={`./assets/img/companies/${data.name}_1.svg`}
            alt=""
          />
          {/* <Col span={12}>
              <div className="title">{data.title}</div>
            </Col> */}
        </Col>
        <Col xs={24} md={20} lg={20}>
          <div className="space-right">
            {priceItems.length > 0 ? (
              priceItems.map((price, index) => (
                <Card.Grid className="price-grid" key={index} hoverable={false}>
                  <div className="price-col">
                    <div className="price-promo">
                      <p className="package-name">{price.packageName}</p>
                      <h2 className="amount">{price.amount} ₺</h2>
                      <Button
                        className="price-button"
                        type="primary"
                        shape="round"
                      >
                        Satın Al
                      </Button>
                      <div className="price-sub">6 taksit imkanı</div>
                    </div>
                  </div>
                </Card.Grid>
              ))
            ) : (
              <p>Fiyat Yok</p>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default TeklifCard;
