"use client";
import { SettingsConstant } from "@/constants";
import styles from "./page.module.css";
import { Button, Input, Text } from "@/components";

export default function page() {
  const companyInfo = SettingsConstant.companyInfo;
  return (
    <>
      <Text size={20} type="heading" variation="light" weight="700">
        {companyInfo.title}
      </Text>

      <div className="line"></div>

      <form className={styles.form}>
        {companyInfo.body.map((info) => (
          <div
            key={info.name}
            className={info.type === "text-area" ? styles.textareaWrapper : ""}
          >
            <Input
              value={info.value}
              placeholder=""
              errors={[""]}
              label={info.name}
              setValue={() => {}}
              type={info.type}
              isRequired={info.isRequired}
            />
          </div>
        ))}

        <Button type="primary-small-dark" onClick={() => {}}>
          Save
        </Button>
      </form>
    </>
  );
}
