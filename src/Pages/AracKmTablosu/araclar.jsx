import React, { useState } from 'react';
import { getallvehicles } from '../../services/aracKm';
import { Button, Table } from 'antd';

function Araclar() {
  const [selectedRow, setSelectedRow] = useState([]);

  const [data, setData] = useState([]);

  // const getData = () => {
  // getallvehicles().then((response) => {
  //     const { isSuccess, resultMessage, resultSet } = response;
  //     if (isSuccess && resultSet !== undefined) {
  //       setData(resultSet);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const columns = [
    {
      title: 'Araç Marka',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Araç Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Araç Plaka',
      dataIndex: 'plaka',
      key: 'plaka',
    },
    {
      title: 'İşlem',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleDetailClick(record)}>
            Detay Görüntüle
          </Button>
          <Button type="link" onClick={() => showModal(record)}>
            Güncelle
          </Button>
        </>
      ),
    },
  ];

  const fakedata = [
    {
      id: '1',
      brand: 'Renault',
      model: 'megane',
      plaka: '12 cv 1212',
    },
    {
      id: '2',
      brand: 'toyota',
      model: 'coralla',
      plaka: '12 cv 1212',
    },
  ];

  const showModal = (selectedRow) => {
    generatedModal({
      title:
        selectedRow !== undefined ? 'Önemli Olay Güncelle' : 'Önemli Olay Ekle',
      content: <MalzemeAdEkleModal selectedRow={selectedRow} />,
      width: '30%',
    });
  };

  return (
    <div>
      <Button onClick={() => showModal()}> Araç Ekle </Button>{' '}
      <Table columns={columns} dataSource={fakedata} rowKey="id" />
    </div>
  );
}

export default Araclar;
