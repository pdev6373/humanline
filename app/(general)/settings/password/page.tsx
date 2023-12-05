"use client";
import { Button, Input, Text, Wrapper } from "@/components";
import { ChangePasswordConstant } from "@/constants";

export default function page() {
  return (
    <>
      <Text size={20} type="heading" variation="light" weight="700">
        Change Password
      </Text>

      <div className="line"></div>

      <form>
        <Wrapper gap={24}>
          <>
            {ChangePasswordConstant.map((input) => (
              <Input
                label={input.label}
                placeholder={input.placeholder}
                setValue={() => {}}
                value={input.value}
                isRequired={input.isRequired}
                errors={[]}
                type="password"
              />
            ))}

            <Button type="primary-small" onClick={() => {}}>
              Save
            </Button>
          </>
        </Wrapper>
      </form>
    </>
  );
}
