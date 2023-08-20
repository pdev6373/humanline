import { AllEmloyees } from "@/constants";
import Image from "next/image";
import styles from "./page.module.css";
import { Wrapper } from "@/components";

export default function page() {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.employees}>
          {AllEmloyees.map((employee, index) => (
            <div className={styles.employee} key={index}>
              <Image
                src={employee.profilePics}
                alt="employee image"
                width={56}
                height={56}
              />

              <div className={styles.employeeNameWrapper}>
                <p className={styles.employeeName}>{employee.fullName}</p>
                <p className={styles.employeeRole}>{employee.role}</p>
              </div>

              <div className="line"></div>

              <div className={styles.contacts}>
                {employee.contacts.map((contact, index) => (
                  <div className={styles.contact} key={index}>
                    <Image
                      src={
                        contact.type === "mail"
                          ? "/assets/mail.svg"
                          : "/assets/phone.svg"
                      }
                      alt="contact icon"
                      width={20}
                      height={20}
                      className={styles.contactIcon}
                    />
                    <p className={styles.contactText}>{contact.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
