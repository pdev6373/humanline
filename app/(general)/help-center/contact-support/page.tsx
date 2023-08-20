import { Wrapper, HelpBodyText } from "@/components";
import styles from "./page.module.css";

export default function page() {
  return (
    <Wrapper
      hasBackground
      padding={32}
      gap={32}
      header="Customer Contact Support"
    >
      <Wrapper hasBorder padding={24} gap={32}>
        <>
          <h2 className={styles.header}>
            If you have any trouble getting started or during usage, please
            reach out to us using the following support channels.
          </h2>

          <Wrapper gap={32}>
            <>
              <HelpBodyText
                title="Intercom Live Chat System"
                body="Please describe your problems in the Live Chat, our chat
                    specialists will answer your questions. We work from 9:00 to
                    18:00 (GMT +7), Monday to Friday. You are welcome to leave
                    us messages if our specialists are not online."
              />

              <HelpBodyText
                title="Submit a Ticket"
                body={
                  <>
                    Send your concerns or question in the email{" "}
                    <a href="" className={styles.mail}>
                      contact@humanline.com
                    </a>
                    , our Customer Support team will get back to you as soon as
                    possible.
                  </>
                }
              />
            </>
          </Wrapper>
        </>
      </Wrapper>
    </Wrapper>
  );
}
