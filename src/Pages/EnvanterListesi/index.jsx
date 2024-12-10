import React, { useState, useEffect } from 'react';
import { Button, Drawer, Table } from 'antd';
import EnvanterDetay from './envanterDetay/envanterDetay';
import MalzemeAdEkleModal from './malzemeAdEkleModal';
import { generatedModal } from '../../components/functions';
import { getallinv } from '../../services/envanterListesi';

function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  // const [data, setData] = useState(second);

  // const getData = () => {
  //   getallinv().then((response) => {
  //     const { isSuccess, resultMessage, resultSet } = response;
  //     if (isSuccess && resultSet !== undefined) {
  //       setData(resultSet);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const fakedata = [
    {
      id: '1',
      materialName: 'HAZIR SIVA',
      gelenToplamMiktar: 148750,
      birimi: 'KG',
    },
    {
      id: '2',
      materialName: 'PERLİTLİ ALÇI SIVA',
      gelenToplamMiktar: 28000,
      birimi: 'KG',
    },
  ];

  const columns = [
    {
      title: 'MALZEMENİN ADI',
      dataIndex: 'materialName',
      key: 'materialName',
    },
    {
      title: 'GELEN TOPLAM MİKTAR',
      dataIndex: 'gelenToplamMiktar',
      key: 'gelenToplamMiktar',
    },
    {
      title: 'BİRİMİ',
      dataIndex: 'birimi',
      key: 'birimi',
    },
    {
      title: 'İŞLEM',
      // key: 'operation',
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

  const onCancelDrawer = () => {
    setDrawerOpen(false);
    setSelectedRow([]);
  };

  const handleDetailClick = (record) => {
    setDrawerOpen(true);
    setSelectedRow(record);
  };

  const showModal = (selectedRow) => {
    generatedModal({
      title:
        selectedRow !== undefined ? 'Önemli Olay Güncelle' : 'Önemli Olay Ekle',
      content: <MalzemeAdEkleModal selectedRow={selectedRow} />,
      width: '30%',
    });
  };

  return (
    <>
      <Button onClick={() => showModal()}> Malzeme Ad Ekle </Button>{' '}
      <Table columns={columns} dataSource={fakedata} rowKey="id" />
      <Drawer width="90%" open={drawerOpen} onClose={onCancelDrawer}>
        {' '}
        <EnvanterDetay selectedRow={selectedRow} />{' '}
      </Drawer>
      {/* <Modal open={modalOpen} onCancel={() => onCancelModal()}>
        <MalzemeAdEkleModal />
      </Modal> */}
    </>
  );
}

export default Index;
