import SocialButton from "../SocialButton/SocialButton";
import styles from "./SocialLogin.module.css";

export default function SocialLogin() {
  const googleLoginHandler = () => {};
  const appleLoginHandler = () => {};

  return (
    <div className={styles.wrapper}>
      <SocialButton
        socialIcon="/assets/google.svg"
        onClick={googleLoginHandler}
      >
        Google
      </SocialButton>

      <SocialButton socialIcon="/assets/apple.svg" onClick={appleLoginHandler}>
        Apple
      </SocialButton>
    </div>
  );
}
