import React, { useState } from 'react';
import { getallvehicles, vehicleDelete } from '../../../services/aracKm';
import { Button, Popconfirm, Table } from 'antd';
import { generatedModal } from '../../../components/functions';
import AracEkleModal from './aracEkleModal';

function Araclar() {
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
          <Button type="link" onClick={() => showModal(record)}>
            Güncelle
          </Button>
          <Popconfirm
            title="Silmek İstediğinize Emin misiniz?"
            onConfirm={
              () => console.log('recsord.id', record.id)
              // vehicleDelete(record.id).then((response) => {
              //   const { isSuccess, resultSet } = response;
              //   if (isSuccess && resultSet !== undefined) {
              //     getData();
              //   }
              // })
            }
            okText="Evet"
            cancelText="Hayır"
          >
            <Button type="link" danger>
              Sil
            </Button>
          </Popconfirm>
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
      content: <AracEkleModal selectedRow={selectedRow} />,
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
