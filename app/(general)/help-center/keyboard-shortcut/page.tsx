import { Fragment } from "react";
import { ShortcutType } from "@/types";
import { Wrapper, HelpBodyText, Table } from "@/components";
import { KeyboardShortcuts } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";

const data = KeyboardShortcuts.shortcuts;
const columns: ColumnDef<ShortcutType>[] = [
  {
    header: "Shortcuts Key on Windows",
    accessorKey: "windows",
  },
  {
    header: "Shortcuts Key on MacOS",
    accessorKey: "mac_os",
  },
  {
    header: "Header title",
    accessorKey: "title",
  },
];

export default function page() {
  return (
    <Wrapper
      hasBackground
      padding={32}
      gap={32}
      header="Keyboard Shortcut For Humanline"
    >
      <Wrapper hasBorder padding={24} gap={32}>
        <>
          <HelpBodyText
            title="A list of Keyboard Shortcuts to help you navigate Humanline
                quicker"
            body={`Here are ${KeyboardShortcuts.shortcuts.length} Keyboard shortcuts
                that you can use on Grove HR to save your time.`}
          />

          <Table<ShortcutType> data={data} tableColumns={columns} />

          <Wrapper gap={32}>
            <>
              {KeyboardShortcuts.otherInfo.map((info) => (
                <Fragment key={info.title}>
                  <HelpBodyText title={`${info.title} :`} body={info.body} />
                </Fragment>
              ))}
            </>
          </Wrapper>
        </>
      </Wrapper>
    </Wrapper>
  );
}
