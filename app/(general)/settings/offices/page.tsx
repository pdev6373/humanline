"use client";
import { useState } from "react";
import { Offices } from "@/constants";
import styles from "./page.module.css";
import Image from "next/image";
import { Switch, Text, Wrapper } from "@/components";

export default function page() {
  const [currentHQ, setCurrentHQ] = useState(0);

  return (
    <>
      <Text size={20} type="heading" variation="light" weight="700">
        Offices
      </Text>
      <div className="line"></div>

      <Wrapper gap={24}>
        <>
          {Offices.map((office, index) => (
            <Wrapper hasBorder padding={24} gap={16}>
              <>
                <div className={styles.nameWrapper}>
                  <div className={styles.nameWrapperInner}>
                    <p className={styles.name}>{office.name}</p>
                    {/* {office.isHQ && <p className={styles.hqTag}>HQ</p>} */}
                    {
                      <p
                        className={[
                          styles.hqTag,
                          currentHQ !== index && styles.noDisplay,
                        ].join(" ")}
                      >
                        HQ
                      </p>
                    }
                  </div>

                  <Image
                    src="/assets/more.svg"
                    alt="more icon"
                    width={24}
                    height={24}
                  />
                </div>

                <div className={styles.location}>
                  <p className={styles.locationText}>{office.location}</p>

                  <Switch
                    isActive={currentHQ === index}
                    onClick={() => setCurrentHQ(index)}
                  />
                </div>

                <div className="line"></div>

                <Wrapper gap={16}>
                  <>
                    {office.otherInfo.map((info) => (
                      <div className={styles.infoWrapper}>
                        <p className={styles.title}>{info.title}</p>
                        <p className={styles.value}>{info.value}</p>
                      </div>
                    ))}
                  </>
                </Wrapper>
              </>
            </Wrapper>
          ))}
        </>
      </Wrapper>
    </>
  );
}
