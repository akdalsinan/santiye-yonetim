import { Button, Drawer, Modal, Popconfirm, Table } from 'antd';
import React, { useState } from 'react';
import EnvanterDetay from './envanterDetay/envanterDetay';
import MalzemeAdEkleModal from './malzemeAdEkleModal';

function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedRow, setSelectedRow] = useState([]);

  // Fake data
  const data = [
    {
      key: '1',
      malzemeAdi: 'HAZIR SIVA',
      gelenToplamMiktar: 148750,
      birimi: 'KG',
    },
    {
      key: '2',
      malzemeAdi: 'PERLİTLİ ALÇI SIVA',
      gelenToplamMiktar: 28000,
      birimi: 'KG',
    },
    // Diğer malzemeler eklenebilir
  ];

  const columns = [
    {
      title: 'MALZEMENİN ADI',
      dataIndex: 'malzemeAdi',
      key: 'malzemeAdi',
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
          <Button type="link" onClick={() => openModal(record)}>
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

  const openModal = (record) => {
    setModalOpen(true);
    setSelectedRow(record);
  };

  const onCancelModal = () => {
    setModalOpen(false);
    setSelectedRow([]);
  };

  return (
    <>
      <Button onClick={() => openModal()}> Not Ekle </Button>{' '}
      <Table columns={columns} dataSource={data} rowKey="id" />
      <Drawer width="90%" open={drawerOpen} onClose={onCancelDrawer}>
        {' '}
        <EnvanterDetay selectedRow={selectedRow} />{' '}
      </Drawer>
      <Modal open={modalOpen} onCancel={() => onCancelModal()}>
        <MalzemeAdEkleModal />
      </Modal>
    </>
  );
}

export default Index;
