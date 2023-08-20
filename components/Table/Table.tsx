"use client";
import { useState, useMemo } from "react";
import { TableType } from "@/types";
import {
  useReactTable,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import Image from "next/image";
import styles from "./Table.module.css";

export default function Table<Type>({ data, tableColumns }: TableType<Type>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

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
