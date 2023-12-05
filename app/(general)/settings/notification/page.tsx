"use client";
import { Button, Switch, Text, Wrapper } from "@/components";
import { NotificationsConstant } from "@/constants";
import styles from "./page.module.css";

export default function page() {
  return (
    <>
      <Text size={20} type="heading" variation="light" weight="700">
        Notification
      </Text>
      <div className="line"></div>

      {NotificationsConstant.map((settings) => (
        <Wrapper hasBorder padding={24} paddingBlock={16}>
          <div className={styles.wrapper}>
            <Wrapper gap={4}>
              <>
                <Text
                  type="heading"
                  size={14}
                  variation="light"
                  weight="700"
                  letterSpacing={0.2}
                >
                  {settings.title}
                </Text>
                <Text type="body" size={12} variation="dark" weight="400">
                  {settings.body}
                </Text>
              </>
            </Wrapper>

            <Switch isActive={settings.isActive} onClick={() => {}} />
          </div>
        </Wrapper>
      ))}

      <Button type="primary-small" onClick={() => {}}>
        Save
      </Button>
    </>
  );
}
