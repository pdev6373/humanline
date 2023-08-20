import { Fragment } from "react";
import { Wrapper, FAQ } from "@/components";
import { FAQs } from "@/constants";

export default function page() {
  return (
    <Wrapper
      hasBackground
      padding={32}
      gap={32}
      header="Frequently Asked Questions"
    >
      <Wrapper gap={24}>
        <>
          {FAQs.map((faq) => (
            <Fragment key={faq.question}>
              <FAQ
                question={faq.question}
                answer={faq.answer}
                time={faq.time}
                likes={faq.likes}
              />
            </Fragment>
          ))}
        </>
      </Wrapper>
    </Wrapper>
  );
}
