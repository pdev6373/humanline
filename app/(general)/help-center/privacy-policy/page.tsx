import { Wrapper, PrivacyPolicy } from "@/components";
import { PrivacyPolicies } from "@/constants";

export default function page() {
  return (
    <Wrapper hasBackground padding={32} gap={32} header="Privacy Policy">
      <Wrapper hasBorder padding={24} gap={32}>
        <>
          {PrivacyPolicies.map((privacyPolicy) => (
            <PrivacyPolicy
              title={privacyPolicy.title}
              body={privacyPolicy.body}
            />
          ))}
        </>
      </Wrapper>
    </Wrapper>
  );
}
