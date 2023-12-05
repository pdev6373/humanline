import { DropdownType } from "@/types";
import Image from "next/image";
import styles from "./DropDown.module.css";
import { Text } from "..";
import ReactCountryFlag from "react-country-flag";

export default function DropDown({
  list,
  currentValue,
  type,
  onClick,
}: DropdownType) {
  console.log(list);

  return (
    <div
      className={[styles.wrapper, type === "phone" && styles.phoneWrapper].join(
        " "
      )}
    >
      {list.map((listItem) => (
        <div
          onClick={() => onClick(listItem)}
          className={[
            styles.item,
            type === "phone" && styles.itemPhone,
            listItem.value === currentValue && styles.itemCurrent,
          ].join(" ")}
        >
          <div className={styles.itemMain}>
            {listItem.extra && typeof listItem.extra !== "string" && (
              <ReactCountryFlag
                countryCode={listItem.extra.code}
                className={styles.flag}
                style={{
                  height: 20,
                }}
                svg
              />
            )}

            <Text
              size={12}
              type="body"
              variation="light"
              weight="700"
              letterSpacing={0.2}
            >
              {`+${listItem.value}`}
            </Text>
          </div>

          {listItem.value === currentValue && (
            <Image
              src="/assets/check.svg"
              alt="check icon"
              width={24}
              height={24}
            />
          )}
        </div>
      ))}
    </div>
  );
}
