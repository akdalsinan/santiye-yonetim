import { Button, Modal, Popconfirm, Table } from 'antd';
import React, { useState } from 'react';
import UploadNoteModal from './uploadNoteModal';
import { generatedModal } from '../../components/functions';
import { getallNotes } from '../../services/santiyeDefteri';

function Index() {
  const [data, setData] = useState([]);

  // const getData = () => {
  // getallNotes().then((response) => {
  //     const { isSuccess, resultMessage, resultSet } = response;
  //     if (isSuccess && resultSet !== undefined) {
  //       setData(resultSet);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
          <Button type="link" onClick={() => showModal(record)}>
            Güncelle
          </Button>

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

  const showModal = (selectedRow) => {
    generatedModal({
      title: selectedRow !== undefined ? 'Güncelle' : 'Ekle',
      content: <UploadNoteModal selectedRow={selectedRow} />,
      width: '30%',
    });
  };

  return (
    <>
      <Button onClick={() => showModal()}> Not Ekle </Button>{' '}
      <Table columns={columns} dataSource={fakeData} rowKey="id" />
      {/* <Modal open={modalOpen} onCancel={() => onCancelModal()}>
        {' '}
        <UploadNoteModal selectedRow={selectedRow} />{' '}
      </Modal> */}
    </>
  );
}

export default Index;
