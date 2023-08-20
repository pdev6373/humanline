import { HelpBodyText, Table, Wrapper } from "@/components";
import { KeyboardShortcuts } from "@/constants";

const data = KeyboardShortcuts.shortcuts;

const columns = [
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

          <Table tableColumns={columns} data={data} />

          <Wrapper gap={32}>
            <>
              {KeyboardShortcuts.otherInfo.map((info) => (
                <HelpBodyText title={info.title} body={info.body} />
              ))}
            </>
          </Wrapper>
        </>
      </Wrapper>
    </Wrapper>
  );
}
