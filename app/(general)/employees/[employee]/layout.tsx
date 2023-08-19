import { EmployeeHeader, Wrapper } from "@/components";
import Image from "next/image";
import styles from "./layout.module.css";
import { Employee } from "@/constants";

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.topNav}>
          <Image src="/assets/left.svg" alt="back" width={24} height={24} />
          <h3 className={styles.topNavText}>Employee Details</h3>
        </div>

        <div className={styles.sectionWrapper}>
          <aside className={styles.aside}>
            <Image
              src="/assets/employee.png"
              alt="employee image"
              width={100}
              height={100}
            />

            <div className={styles.asideNameWrapper}>
              <p className={styles.asideName}>Lincoln Torff</p>
              <p className={styles.asidePosition}>3D Designer</p>
            </div>

            <div className={styles.asideStatusWrapper}>
              <p className={styles.asideStatus}>ACTIVE</p>
              <Image
                src="/assets/down.svg"
                alt="down icon"
                width={16}
                height={16}
                className={styles.statusIcon}
              />
            </div>

            <div className="line"></div>

            <div className={styles.asideContactsAndDetails}>
              {Employee.contact.map((contact) => (
                <div className={styles.asideContact}>
                  <Image
                    src={contact.icon}
                    alt="contact icon"
                    width={20}
                    height={20}
                    className={styles.contactIcon}
                  />
                  <p className={styles.asideContactText}>{contact.value}</p>
                </div>
              ))}
            </div>

            <div className="line"></div>

            <div className={styles.asideContactsAndDetails}>
              {Employee.details.map((details) => (
                <div className={styles.asideDetails}>
                  <div className={styles.asideDetailsTitleWrapper}>
                    <p className={styles.asideDetailsTitle}>{details.title}</p>
                    <div className={styles.asideDetailsValueWrapper}>
                      {details.image && (
                        <Image
                          src={details.image}
                          alt="back"
                          width={32}
                          height={32}
                        />
                      )}
                      <p className={styles.asideDetailsValue}>
                        {details.value}
                      </p>
                    </div>
                  </div>

                  <Image
                    src="/assets/right.svg"
                    alt="back"
                    width={16}
                    height={16}
                    className={styles.rightIcon}
                  />
                </div>
              ))}
            </div>

            <button className={styles.asideAction}>
              <p className={styles.asideActionText}>Action</p>
              <Image
                src="/assets/down.svg"
                alt="back"
                width={18}
                height={18}
                className={styles.actionIcon}
              />
            </button>
          </aside>

          <section className={styles.main}>
            <EmployeeHeader nav={Employee.nav} />
            {children}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
