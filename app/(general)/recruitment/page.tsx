import { Chip, Text, Wrapper } from "@/components";
import { Recruitments } from "@/constants";
import styles from "./page.module.css";

export default function page() {
  return (
    <Wrapper gap={24}>
      <>
        {Recruitments.map((recruitment) => (
          <Wrapper hasBackground padding={24} gap={16}>
            <>
              <div className={styles.wrapper}>
                <div className={styles.wrapper}>
                  <Text size={20} type="heading" variation="light" weight="700">
                    {recruitment.title}
                  </Text>
                  <Chip>{recruitment.isActive ? "Active" : "Inactive"}</Chip>
                </div>

                <div>h</div>
              </div>

              <Text size={14} type="body" variation="light" weight="500">
                {`${recruitment.position} . ${recruitment.company}`}
              </Text>

              <div className={styles.wrapper}>
                <div>
                  <div></div>
                  <Text size={14} type="body" variation="dark" weight="500">
                    {`${recruitment.applicants.length} Candidates Applied`}
                  </Text>
                </div>

                <Text size={14} type="body" variation="dark" weight="500">
                  {recruitment.createdTime}
                </Text>
              </div>
            </>
          </Wrapper>
        ))}
      </>
    </Wrapper>
  );
}
