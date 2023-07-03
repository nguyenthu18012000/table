import React, { useEffect, useRef, useState } from "react";
import '@pages/style.scss';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual';
import { useInfiniteQuery } from 'react-query'

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
  khopLenh1: string;
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

const defaultData: DataTable[] = []
for (let i = 0; i < 1000; i++) {
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
    khopLenh1: randomNumber(),
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
      }),
      columnHelper.accessor('benMuaGia2', {
        header: () => <div className="width-40">Giá 2</div>,
      }),
      columnHelper.accessor('benMuaKl2', {
        header: () => <div className="width-40">KL 2</div>,
      }),
      columnHelper.accessor('benMuaGia1', {
        header: () => <div className="width-40">Giá 1</div>,
      }),
      columnHelper.accessor('benMuaKl1', {
        header: () => <div className="width-48">KL 1</div>,
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
      columnHelper.accessor('khopLenh1', {
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
      }),
      columnHelper.accessor('benBanGia2', {
        header: () => <div className="width-40">Giá 2</div>,
      }),
      columnHelper.accessor('benBanKl2', {
        header: () => <div className="width-40">KL 2</div>,
      }),
      columnHelper.accessor('benBanGia3', {
        header: () => <div className="width-40">Giá 3</div>,
      }),
      columnHelper.accessor('benBanKl3', {
        header: () => <div className="width-48">KL 3</div>,
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
      columnHelper.accessor('dtnnRoom', {
        header: () => <div className="width-90">Room</div>,
      }),
    ],
  }),
]

async function fetchServerPage(
  limit: number,
  offset: number = 0,
): Promise<{ rows: DataTable[]; nextOffset: number }> {
  const rows = new Array(limit)
    .fill(0)
    .map((e, i) =>({
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
      khopLenh1: randomNumber(),
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
    }))

  await new Promise((r) => setTimeout(r, 500))

  return { rows, nextOffset: offset + 1 }
}

export const Tables = () => {
  const [data, setData] = useState<DataTable[]>([]);
  const [heightDiv, setHeightDiv] = useState<number>(0);


  useEffect(() => {
    setHeightDiv(window.innerHeight);
  }, []);

  const greyColumn = [2, 3, 4, 11, 12, 13, 14, 21, 22, 23]
  const textClass = ['red-cell', 'green-cell', 'yellow-cell', 'white-cell']

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })


  const {
    data: datas,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'projects',
    (ctx) => fetchServerPage(50, ctx.pageParam),
    {
      getNextPageParam: (_lastGroup, groups) => groups.length,
    },
  );

  const allRows = datas ? datas.pages.flatMap((d) => d.rows) : []

  const parentRef = React.useRef()

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current as any,
    estimateSize: () => 40,
    overscan: 50,
  })
  console.log(parentRef.current);
  

  React.useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse()
    if (!lastItem) {
      return
    }
    
    console.log(lastItem.index, allRows.length - 1 ,
      hasNextPage ,
      !isFetchingNextPage);

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ])

  return (
    <div
      ref={parentRef as any}
      className="List"
      style={{
        height: `${heightDiv}px`,
        width: `100%`,
        overflow: 'auto',
      }}
    >
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
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
          {rowVirtualizer.getVirtualItems().map((row) => {
            let post = [];
            if (allRows[row.index] !== null && allRows[row.index] !== undefined) {
              post = Object.values(allRows[row.index])
            }
            return <tr
              key={row.index}
              className={row.index % 2 == 0 ? 'odd-row' : 'even-row'}
              // style={{
              //   height: '28px'
              // }}
            >
              {post.map((cell, index) => {
                let backgroundClass = greyColumn.includes(index) ? 'greyColumn' : '';
                let textColorClass = textClass[Math.round(Math.random()*1000)%4];
                return <td
                  key={index}
                  className={`${backgroundClass} ${textColorClass} bold-cell`}
                >
                  {cell}
                </td>
              }
              )}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
