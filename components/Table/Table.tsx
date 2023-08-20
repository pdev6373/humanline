"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./Table.module.css";
import {
  useReactTable,
  ColumnDef,
  flexRender,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { ShortcutType } from "@/types";

export default function Table({ data, tableColumns }: any) {
  const [sorting, setSorting] = useState<SortingState>([]);

  //   const columns = useMemo<ColumnDef<ShortcutType>[]>(() => tableColumns, []);
  const columns = useMemo<any>(() => tableColumns, []);

  const tableProps = {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  };
  const table = useReactTable(tableProps);

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className={!index ? styles.borderLeftRadius : ""}
              >
                {header.isPlaceholder ? null : (
                  <div className={styles.tableHeadTextWrapper}>
                    <p className={styles.tableHeadText}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </p>

                    <Image
                      src="/assets/sort.svg"
                      alt="sort icon"
                      width={14}
                      height={14}
                    />
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={styles.tableBodyText}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
