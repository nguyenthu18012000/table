import React, { useEffect, useState } from "react";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import '@pages/style.scss';
import CellComponent from "@pages/CellComponent";
import { CircularProgress } from "@rmwc/circular-progress";
import '@rmwc/circular-progress/styles';

const randomCk = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 3) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const randomNumber = () => {
  return ((Math.round(Math.random() * 9000) + 1000) / 100).toFixed(2);
}

interface DataType {
  key: React.Key;
  maCk: string;
  tran: string;
  san: string;
  tc: string;
  duMuaGia3: string;
  duMuaKl3: string;
  duMuaGia2: string;
  duMuaKl2: string;
  duMuaGia1: string;
  duMuaKl1: string;
  khopLenhGia: string;
  khopLenhPercent: string;
  khopLenhKl: string;
  duBanGia1: string;
  duBanKl1: string;
  duBanGia2: string;
  duBanKl2: string;
  duBanGia3: string;
  duBanKl3: string;
  tongKl: string;
  giaCao: string;
  giaThap: string;
  giaTb: string;
  nnMua: string;
  nnBan: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mã CK',
    dataIndex: 'maCk',
    width: '48px',
    // fixed: 'left',
    render(value, record, index) {
      return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
    },
  },
  {
    title: 'Trần',
    dataIndex: 'tran',
    className: 'greyColumn',
    width: '48px',
    render(value, record, index) {
      return <CellComponent style='purple-cell' value={value} />
    },
  },
  {
    title: 'Sàn',
    dataIndex: 'san',
    className: 'greyColumn',
    width: '48px',
    render(value, record, index) {
      return <CellComponent style='blue-cell' value={value} />
    },
  },
  {
    title: 'TC',
    dataIndex: 'tc',
    className: 'greyColumn',
    width: '48px',
    render(value, record, index) {
      return <CellComponent style='yellow-cell' value={value} />
    },
  },
  {
    title: 'Dư mua',
    children: [
      {
        title: 'Giá 3',
        dataIndex: 'duMuaGia3',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL 3',
        dataIndex: 'duMuaKl3',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'Giá 2',
        dataIndex: 'duMuaGia2',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL 2',
        dataIndex: 'duMuaKl2',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'Giá 1',
        dataIndex: 'duMuaGia1',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL 1',
        dataIndex: 'duMuaKl1',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
    ],
  },
  {
    title: 'Khớp lệnh',
    className: 'greyColumn',
    children: [
      {
        title: 'Giá',
        dataIndex: 'khopLenhGia',
        className: 'greyColumn',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: '%',
        dataIndex: 'khopLenhPercent',
        className: 'greyColumn',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL',
        dataIndex: 'khopLenhKl',
        className: 'greyColumn',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
    ],
  },
  {
    title: 'Dư mua',
    children: [
      {
        title: 'Giá 1',
        dataIndex: 'duMuaGia1',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL 1',
        dataIndex: 'duMuaKl1',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'Giá 2',
        dataIndex: 'duMuaGia2',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL 2',
        dataIndex: 'duMuaKl2',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'Giá 3',
        dataIndex: 'duMuaGia3',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'KL 3',
        dataIndex: 'duMuaKl3',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
    ],
  },
  {
    title: 'Tổng KL',
    dataIndex: 'tongKl',
    width: '72px',
    render(value, record, index) {
      return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
    },
  },
  {
    title: 'Giá',
    className: 'greyColumn',
    children: [
      {
        title: 'Cao',
        dataIndex: 'giaCao',
        className: 'greyColumn',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'Thấp',
        dataIndex: 'giaThap',
        className: 'greyColumn',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'TB',
        dataIndex: 'giaTb',
        className: 'greyColumn',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
    ],
  },
  {
    title: 'NN',
    children: [
      {
        title: 'Mua',
        dataIndex: 'nnMua',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
      {
        title: 'Bán',
        dataIndex: 'nnBan',
        width: '48px',
        render(value, record, index) {
          return <CellComponent style={(Math.floor(Math.random()*2000)%3).toString()} value={value} />
        },
      },
    ],
  },
];

export const Tables = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataTable, setDataTable] = useState<DataType[]>([]);

  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement?.scrollHeight) {
      console.log(dataTable.length);
      if (dataTable.length < 1000) {
        setIsLoading(true);
        createData();
      }
    }
  }

  const createData = () => {
    let dataTableClone = [...dataTable];
    let length = dataTableClone.length;
    for (let i = 0; i < 100; i++) {
      dataTableClone.push({
        key: length + i,
        maCk: randomCk(),
        tran: randomNumber(),
        san: randomNumber(),
        tc: randomNumber(),
        duMuaGia3: randomNumber(),
        duMuaKl3: randomNumber(),
        duMuaGia2: randomNumber(),
        duMuaKl2: randomNumber(),
        duMuaGia1: randomNumber(),
        duMuaKl1: randomNumber(),
        khopLenhGia: randomNumber(),
        khopLenhPercent: Math.round(Math.random()*2) + '%',
        khopLenhKl: randomNumber(),
        duBanGia1: randomNumber(),
        duBanKl1: randomNumber(),
        duBanGia2: randomNumber(),
        duBanKl2: randomNumber(),
        duBanGia3: randomNumber(),
        duBanKl3: randomNumber(),
        tongKl: randomNumber(),
        giaCao: randomNumber(),
        giaThap: randomNumber(),
        giaTb: randomNumber(),
        nnMua: randomNumber(),
        nnBan: randomNumber(),
      });
    }

    setDataTable(dataTableClone);
    setIsLoading(false);
  }

  useEffect(() => {
    createData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', loadMore);

    return () => {
      window.removeEventListener('scroll', loadMore);
    }
  }, [dataTable]);

  return (
    <>
      <Table
        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
        columns={columns}
        dataSource={dataTable}
        bordered
        size="small"
        pagination={false}
        sticky
        scroll={{ x: 'calc(50%)'}}
      />

      {isLoading && 
        <div style={{height:'80px'}}>
          <CircularProgress size="small" />
        </div>
      }
    </>
  );
}
