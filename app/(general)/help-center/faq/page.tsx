import { FAQs } from "@/constants";
import { Wrapper, FAQ } from "@/components";

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
            <FAQ
              question={faq.question}
              answer={faq.answer}
              time={faq.time}
              likes={faq.likes}
            />
          ))}
        </>
      </Wrapper>
    </Wrapper>
  );
}
