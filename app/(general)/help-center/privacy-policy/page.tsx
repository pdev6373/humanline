import { Fragment } from "react";
import { Wrapper, HelpBodyText } from "@/components";
import { PrivacyPolicies } from "@/constants";

export default function page() {
  return (
    <Wrapper hasBackground padding={32} gap={32} header="Privacy Policy">
      <Wrapper hasBorder padding={24} gap={32}>
        <>
          {PrivacyPolicies.map((privacyPolicy) => (
            <Fragment key={privacyPolicy.title}>
              <HelpBodyText
                title={privacyPolicy.title}
                body={privacyPolicy.body}
              />
            </Fragment>
          ))}
        </>
      </Wrapper>
    </Wrapper>
  );
}
