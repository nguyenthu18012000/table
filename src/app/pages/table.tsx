import React, { useEffect, useState } from "react";
import type { ColumnsType } from 'antd/es/table';
import '@pages/style.scss';
import CellComponent from "@pages/CellComponent";
// import { CircularProgress } from "@rmwc/circular-progress";
// import '@rmwc/circular-progress/styles';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type DataTable = {
  pin: any;
  ck: string;
  tran: string;
  san: string;
  tc: string;
  benMuaGia3: string;
  benMuaKl3: string;
  benMuaGia2: string;
  benMuaKl2: string;
  benMuaGia1: string;
  benMuaKl1: string;
  khopLenhGia: string;
  khopLenhPercent: string;
  khopLenhKl: string;
  benBanGia1: string;
  benBanKl1: string;
  benBanGia2: string;
  benBanKl2: string;
  benBanGia3: string;
  benBanKl3: string;
  tongKl: string;
  giaCao: string;
  giaThap: string;
  dtnnMua: string;
  dtnnBan: string;
  dtnnRoom: string;
}

const defaultData: DataTable[] = []
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
for (let i = 0; i < 50; i++) {
  defaultData.push({
    pin: null,
    ck: randomCk(),
    tran: randomNumber(),
    san: randomNumber(),
    tc: randomNumber(),
    benMuaGia3: randomNumber(),
    benMuaKl3: randomNumber(),
    benMuaGia2: randomNumber(),
    benMuaKl2: randomNumber(),
    benMuaGia1: randomNumber(),
    benMuaKl1: randomNumber(),
    khopLenhGia: randomNumber(),
    khopLenhPercent: Math.round(Math.random()*2) + '%',
    khopLenhKl: randomNumber(),
    benBanGia1: randomNumber(),
    benBanKl1: randomNumber(),
    benBanGia2: randomNumber(),
    benBanKl2: randomNumber(),
    benBanGia3: randomNumber(),
    benBanKl3: randomNumber(),
    tongKl: randomNumber(),
    giaCao: randomNumber(),
    giaThap: randomNumber(),
    dtnnMua: randomNumber(),
    dtnnBan: randomNumber(),
    dtnnRoom: randomNumber(),
  });
}
const columnHelper = createColumnHelper<DataTable>()
const columns = [
  columnHelper.group({
    id: 'pintop',
    header: () => <div className="single-header-top width-24"></div>,
    columns: [
      columnHelper.accessor('pin', {
        header: () => <div className="single-header-bottom"></div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'cktop',
    header: () => <div className="single-header-top width-72"></div>,
    columns: [
      columnHelper.accessor('ck', {
        header: () => <div className="single-header-bottom">CK</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'trantop',
    header: () => <div className="single-header-top width-50"></div>,
    columns: [
      columnHelper.accessor('tran', {
        header: () => <div className="single-header-bottom align-header-right">Trần</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'santop',
    header: () => <div className="single-header-top width-50"></div>,
    columns: [
      columnHelper.accessor('san', {
        header: () => <div className="single-header-bottom align-header-right">Sàn</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'tctop',
    header: () => <div className="single-header-top width-50"></div>,
    columns: [
      columnHelper.accessor('tc', {
        header: () => <div className="single-header-bottom align-header-right">TC</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'benMua',
    header: () => <span>Bên mua</span>,
    columns: [
      columnHelper.accessor('benMuaGia3', {
        header: () => <div className="width-40">Giá 3</div>,
      }),
      columnHelper.accessor('benMuaKl3', {
        header: () => <div className="width-48">KL 3</div>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('benMuaGia2', {
        header: () => <div className="width-40">Giá 2</div>,
      }),
      columnHelper.accessor('benMuaKl2', {
        header: () => <div className="width-40">KL 2</div>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('benMuaGia1', {
        header: () => <div className="width-40">Giá 1</div>,
      }),
      columnHelper.accessor('benMuaKl1', {
        header: () => <div className="width-48">KL 1</div>,
        cell: info => info.getValue(),
      }),
    ],
  }),
  columnHelper.group({
    id: 'khoplenh',
    header: () => <span>Khớp lệnh</span>,
    columns: [
      columnHelper.accessor('khopLenhGia', {
        header: () => <div className="width-40">Giá</div>,
      }),
      columnHelper.accessor('khopLenhKl', {
        header: () => <div className="width-40">KL</div>,
      }),
      columnHelper.accessor('khopLenhPercent', {
        header: () => <div className="width-40">+/-</div>,
      }),
      columnHelper.accessor('khopLenhPercent', {
        header: () => <div className="width-40">+/- (%)</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'benBan',
    header: () => <span>Bên bán</span>,
    columns: [
      columnHelper.accessor('benBanGia1', {
        header: () => <div className="width-40">Giá 1</div>,
      }),
      columnHelper.accessor('benBanKl1', {
        header: () => <div className="width-40">KL 1</div>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('benBanGia2', {
        header: () => <div className="width-40">Giá 2</div>,
      }),
      columnHelper.accessor('benBanKl2', {
        header: () => <div className="width-40">KL 2</div>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('benBanGia3', {
        header: () => <div className="width-40">Giá 3</div>,
      }),
      columnHelper.accessor('benBanKl3', {
        header: () => <div className="width-48">KL 3</div>,
        cell: info => info.getValue(),
      }),
    ],
  }),
  columnHelper.group({
    id: 'tongKltop',
    header: () => <div className="single-header-top width-72"></div>,
    columns: [
      columnHelper.accessor('tongKl', {
        header: () => <div className="single-header-bottom align-header-right">Tổng KL</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'cao',
    header: () => <div className="single-header-top width-50"></div>,
    columns: [
      columnHelper.accessor('giaCao', {
        header: () => <div className="single-header-bottom align-header-right">Cao</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'thap',
    header: () => <div className="single-header-top width-50"></div>,
    columns: [
      columnHelper.accessor('giaThap', {
        header: () => <div className="single-header-bottom align-header-right">Thấp</div>,
      }),
    ],
  }),
  columnHelper.group({
    id: 'dtnn',
    header: () => <span>DTNN</span>,
    columns: [
      columnHelper.accessor('dtnnMua', {
        header: () => <div className="width-70">NN mua</div>,
      }),
      columnHelper.accessor('dtnnBan', {
        header: () => <div className="width-70">NN bán</div>,
      }),
      columnHelper.accessor('dtnnBan', {
        header: () => <div className="width-90">Room</div>,
      }),
    ],
  }),
]

export const Tables = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [dataTable, setDataTable] = useState<DataType[]>([]);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  // const loadMore = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement?.scrollHeight) {
  //     if (dataTable.length < 1000) {
  //       console.log(dataTable.length)
  //       // setIsModalOpen(true)
  //       // setIsLoading(true);
  //       createData();
  //       // setIsLoading(false);
  //       // setIsModalOpen(false)
  //     }
  //   }
  // }

  // const createData = () => {
  //   let dataTableClone = [...dataTable];
  //   let length = dataTableClone.length;
  //   for (let i = 0; i < 50; i++) {
  //     dataTableClone.push({
  //       key: length + i,
  //       maCk: randomCk(),
  //       tran: randomNumber(),
  //       san: randomNumber(),
  //       tc: randomNumber(),
  //       duMuaGia3: randomNumber(),
  //       duMuaKl3: randomNumber(),
  //       duMuaGia2: randomNumber(),
  //       duMuaKl2: randomNumber(),
  //       duMuaGia1: randomNumber(),
  //       duMuaKl1: randomNumber(),
  //       khopLenhGia: randomNumber(),
  //       khopLenhPercent: Math.round(Math.random()*2) + '%',
  //       khopLenhKl: randomNumber(),
  //       duBanGia1: randomNumber(),
  //       duBanKl1: randomNumber(),
  //       duBanGia2: randomNumber(),
  //       duBanKl2: randomNumber(),
  //       duBanGia3: randomNumber(),
  //       duBanKl3: randomNumber(),
  //       tongKl: randomNumber(),
  //       giaCao: randomNumber(),
  //       giaThap: randomNumber(),
  //       giaTb: randomNumber(),
  //       nnMua: randomNumber(),
  //       nnBan: randomNumber(),
  //     });
  //   }

  //   setDataTable(dataTableClone);
  // }

  // useEffect(() => {
  //   createData();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', loadMore);

  //   return () => {
  //     window.removeEventListener('scroll', loadMore);
  //   }
  // }, [dataTable]);

  // return (
  //   <>
  //     <Table
  //       rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
  //       columns={columnss}
  //       dataSource={dataTable}
  //       bordered
  //       size="small"
  //       pagination={false}
  //       sticky
  //       scroll={{ x: 'calc(50%)'}}
  //     />

  //     {/* {isLoading && 
  //       <div style={{height:'80px'}}>
  //         <CircularProgress size="small" />
  //       </div>
  //     } */}
  //     {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //     </Modal> */}
  //   </>
  // );

  const [data, setData] = React.useState(() => [...defaultData])

  const greyColumn = [2, 3, 4, 11, 12, 13, 14, 21, 22, 23]
  const textClass = ['red-cell', 'green-cell', 'yellow-cell', 'white-cell']

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="container">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className={
                    header.colSpan > 1
                    ? 'group-header'
                    : headerGroup.id == '1' ? 'single-header' : ''
                  }
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id} className={index % 2 == 0 ? 'odd-row' : 'even-row'}>
              {row.getVisibleCells().map((cell, index) => {
                let backgroundClass = greyColumn.includes(index) ? 'greyColumn' : '';
                let textColorClass = textClass[Math.round(Math.random()*1000)%4];
                console.log(textColorClass)
                return <td
                  key={cell.id}
                  className={`${backgroundClass} ${textColorClass} bold-cell`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              }
              
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
