"use client";
import { SettingsConstant } from "@/constants";
import styles from "./page.module.css";
import { Input } from "@/components";

export default function page() {
  const companyInfo = SettingsConstant.companyInfo;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{companyInfo.title}</h2>

      <div className="line"></div>

      <form className={styles.form}>
        {companyInfo.body.map((info) => (
          <div
            className={[
              styles.formInput,
              info.name.toLowerCase() == "company overview" &&
                styles.formInputFull,
            ].join(" ")}
          >
            {typeof info.value === "string" ? (
              <Input
                value={info.value}
                placeholder=""
                errors={[""]}
                label={info.name}
                setValue={() => {}}
                type="text"
              />
            ) : (
              <Input
                value={info.value.number}
                placeholder=""
                errors={[""]}
                label={info.name}
                setValue={() => {}}
                type="text"
              />
            )}
          </div>
        ))}

        <button className={styles.button}>Save</button>
      </form>
    </div>
  );
}
