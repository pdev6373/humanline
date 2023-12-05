"use client";
import { Button, Search, Switch, Table, Text } from "@/components";
import styles from "./page.module.css";
import { JobTitles } from "@/constants";
import { JobTitlesType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const data = JobTitles;
const columns: ColumnDef<JobTitlesType>[] = [
  {
    header: "Job Title",
    accessorKey: "title",
  },
  {
    header: "Number of Employees",
    accessorKey: "numberOfEmployees",
  },
  {
    header: "Active",
    accessorKey: "isActive",
    cell: (info) => (
      <Switch onClick={() => {}} isActive={info.getValue() as boolean} />
    ),
  },
  {
    header: "Action",
    cell: () => (
      <div className={styles.actionsWrapper}>
        <div className={styles.actionWrapperEdit}>
          <Image
            src="/assets/edit.svg"
            alt="action icon"
            width={16}
            height={16}
            className={styles.actionIcon}
          />
        </div>

        <div className={styles.actionWrapperDelete}>
          <Image
            src="/assets/trash.svg"
            alt="action icon"
            width={16}
            height={16}
            className={styles.actionIcon}
          />
        </div>
      </div>
    ),
  },
];

export default function page() {
  return (
    <>
      <div className={styles.header}>
        <Text size={20} variation="light" type="heading" weight="700">
          Job Titles
        </Text>

        <div className={styles.searchWrapper}>
          <div className={styles.search}>
            <Search type="section" placeholder="Search job title" />
          </div>

          <div className={styles.addNewButton}>
            <Button
              type="primary-small-dark"
              onClick={() => {}}
              icon="plus.svg"
            >
              Add New
            </Button>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <Table<JobTitlesType> data={data} tableColumns={columns} />
    </>
  );
}
