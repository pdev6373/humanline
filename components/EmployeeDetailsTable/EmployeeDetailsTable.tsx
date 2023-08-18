// import { EmployeeDetailsListType } from "@/types";
// import Image from "next/image";
// import styles from "./EmployeeDetailsTable.module.css";

// export default function EmployeeDetailsTable({
//   data,
// }: EmployeeDetailsListType) {
//   return (
//     <section className={styles.wrapper}>
//       <div className={styles.headerWrapper}>
//         <h3 className={styles.header}>{data.type}</h3>
//         <Image
//           src="/assets/plus.svg"
//           alt="edit icon"
//           width={24}
//           height={24}
//           className={styles.add}
//         />
//       </div>

//       <div className={styles.line}></div>

//       <div className={styles.contentWrapper}>
//         {data.content.map((content) => (
//           <div className={styles.content}>
//             <p className={styles.contentTitle}>{content.title}</p>
//             <p className={styles.contentValue}>
//               {typeof content.value !== "object" && content.value?.length
//                 ? content.value
//                 : "-"}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import styles from "./EmployeeDetailsTable.module.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { EmployeeDetailsListType } from "@/types";

export default function EmployeeDetailsTable({
  info,
}: EmployeeDetailsListType) {
  const data = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
  ];

  console.log(
    info.content.map((content) => ({
      [content.title]: content.value,
    }))
  );

  const columnHelper = createColumnHelper<any>();

  const columns = info.content.map((content) =>
    columnHelper.accessor("firstName", {
      header: () => content.title,
      cell: (info) => info.getValue(),
    })
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header}>{info.type}</h3>
        <Image
          src="/assets/plus.svg"
          alt="edit icon"
          width={24}
          height={24}
          className={styles.add}
        />
      </div>

      <div className={styles.main}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles.tableHeadText}>
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
      </div>
    </section>
  );
}
