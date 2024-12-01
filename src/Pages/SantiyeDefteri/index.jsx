import { Button, Modal, Popconfirm, Table } from 'antd';
import React, { useState } from 'react';
import UploadNoteModal from './uploadNoteModal';

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  const fakeData = [
    { id: 5, note: 'adasd', files: 'asdasd' },
    { id: 6, note: 'note1', files: 'asdasd' },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Files',
      dataIndex: 'files',
      key: 'files',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          {/* Güncelleme butonu */}
          <Button type="link" onClick={() => handleUpdate(record)}>
            Güncelle
          </Button>

          {/* Silme butonu */}
          <Popconfirm
            title="Silmek İstediğinize Emin misiniz?"
            onConfirm={() => handleDelete(record.id)}
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

  const handleDelete = (value) => {
    console.log('value', value);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const handleUpdate = (selectedRow) => {
    setModalOpen(true);
    setSelectedRow(selectedRow);
  };

  const onCancelModal = () => {
    setModalOpen(false);
    setSelectedRow([]);
  };

  return (
    <>
      <Button onClick={() => openModal()}> Not Ekle </Button>{' '}
      <Table columns={columns} dataSource={fakeData} rowKey="id" />
      <Modal open={modalOpen} onCancel={() => onCancelModal()}>
        {' '}
        <UploadNoteModal selectedRow={selectedRow} />{' '}
      </Modal>
    </>
  );
}

export default Index;
