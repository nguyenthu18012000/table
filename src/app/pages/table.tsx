import React, { useEffect, useState, useRef } from "react";
import '@pages/style.scss';
import {
  ColumnDef,
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { CircularProgress } from "@rmwc/circular-progress";
import { useInfiniteQuery } from '@tanstack/react-query'
import { useVirtual } from 'react-virtual'
import { faker } from '@faker-js/faker'

const fetchSize = 50

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


type DataApiResponse = {
  data: DataTable[]
  meta: {
    totalRowCount: number
  }
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): DataTable[] => {
    const len = lens[depth]!
    return range(len).map((d): DataTable => {
      return {
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
      }
    })
  }

  return makeDataLevel()
}

const data = makeData(1000)
const fetchData = (
  start: number,
  size: number,
) => {
  const dbData = [...data]

  return {
    data: dbData.slice(start, start + size),
    meta: {
      totalRowCount: dbData.length,
    },
  }
}

export const Table2 = () => {
  const tableContainerRef = React.useRef<HTMLDivElement>(null)
  const columns = React.useMemo<ColumnDef<DataTable>[]>(
    () => [
      {
        id: 'pintop',
        header: () => <div className="single-header-top width-24"></div>,
        columns: [
          columnHelper.accessor('pin', {
            header: () => <div className="single-header-bottom"></div>,
          }),
        ],
      },
      {
        id: 'cktop',
        header: () => <div className="single-header-top width-72"></div>,
        columns: [
          columnHelper.accessor('ck', {
            header: () => <div className="single-header-bottom">CK</div>,
          }),
        ],
      },
      {
        id: 'trantop',
        header: () => <div className="single-header-top width-50"></div>,
        columns: [
          columnHelper.accessor('tran', {
            header: () => <div className="single-header-bottom align-header-right">Trần</div>,
          }),
        ],
      },
      {
        id: 'santop',
        header: () => <div className="single-header-top width-50"></div>,
        columns: [
          columnHelper.accessor('san', {
            header: () => <div className="single-header-bottom align-header-right">Sàn</div>,
          }),
        ],
      },
      {
        id: 'tctop',
        header: () => <div className="single-header-top width-50"></div>,
        columns: [
          columnHelper.accessor('tc', {
            header: () => <div className="single-header-bottom align-header-right">TC</div>,
          }),
        ],
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        id: 'tongKltop',
        header: () => <div className="single-header-top width-72"></div>,
        columns: [
          columnHelper.accessor('tongKl', {
            header: () => <div className="single-header-bottom align-header-right">Tổng KL</div>,
          }),
        ],
      },
      {
        id: 'cao',
        header: () => <div className="single-header-top width-50"></div>,
        columns: [
          columnHelper.accessor('giaCao', {
            header: () => <div className="single-header-bottom align-header-right">Cao</div>,
          }),
        ],
      },
      {
        id: 'thap',
        header: () => <div className="single-header-top width-50"></div>,
        columns: [
          columnHelper.accessor('giaThap', {
            header: () => <div className="single-header-bottom align-header-right">Thấp</div>,
          }),
        ],
      },
      {
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
      }
    ],
    []
  )

  const { data, fetchNextPage, isFetching } =
    useInfiniteQuery<DataApiResponse>(
      ['table-data'],
      async ({ pageParam = 0 }) => {
        const start = pageParam * fetchSize;
        const fetchedData = fetchData(start, fetchSize);
        return fetchedData;
      },
      {
        getNextPageParam: (_lastGroup, groups) => groups.length,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
      }
    )

  const flatData = React.useMemo(
    () => data?.pages?.flatMap(page => page.data) ?? [],
    [data]
  )
  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0
  const totalFetched = flatData.length

  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (
          scrollHeight - scrollTop - clientHeight < 300 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  )

  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current)
  }, [fetchMoreOnBottomReached])

  const table = useReactTable({
    data: flatData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  })
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  const greyColumn = [2, 3, 4, 11, 12, 13, 14, 21, 22, 23]
  const textClass = ['red-cell', 'green-cell', 'yellow-cell', 'white-cell']

  return (
    <div
      className="container"
      style={{height: '700px', overflow: 'auto'}}
      onScroll={e => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
      ref={tableContainerRef}
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
          {/* {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )} */}
          {virtualRows.map((virtualRow, index) => {
            const row = rows[virtualRow.index] as Row<DataTable>
            return (
              <tr key={row.id} className={index % 2 == 0 ? 'odd-row' : 'even-row'}>
                {row.getVisibleCells().map((cell, index) => {
                  let backgroundClass = greyColumn.includes(index) ? 'greyColumn' : '';
                  let textColorClass = textClass[Math.round(Math.random()*1000) % 4];

                  return (
                    <td
                      key={cell.id}
                      className={`${backgroundClass} ${textColorClass} bold-cell`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  )
                })}
              </tr>
            )
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
