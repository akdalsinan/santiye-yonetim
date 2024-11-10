import React, { useEffect, useState } from 'react';
import './style.scss';

// Card Component

// Services
import { Col, Row } from 'antd';
import TeklifCard from '../../components/teklifCard';
import InfoCard from '../../components/infoCard';
import { fetchTeklifData } from '../../services/services';
import InfoPerson from '../../components/infoPerson';

const HizliPage = () => {
  const [teklif, setTeklif] = useState([]);
  useEffect(() => {
    const getTeklif = async () => {
      try {
        const data = await fetchTeklifData();
        setTeklif(data.resultSet);
      } catch (error) {
        console.log('Data Hata ! ', error);
      }
    };
    getTeklif();
  }, []);

  // console.log('teklif', teklif);

  return (
    <div>
      <InfoCard data={teklif} />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <Row gutter={[16, 16]}>
            {teklif.map((data, index) => (
              <Col key={index} span={24}>
                <TeklifCard data={data} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <InfoPerson data={teklif} />
        </Col>
      </Row>
    </div>
  );
};

export default HizliPage;
