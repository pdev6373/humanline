import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2023 Humanline .{" "}
        <span className={styles.allRightsReserved}>Alrights reserved.</span>
      </p>
      <p className={styles.termsAndPolicy}>Terms & Conditions</p>
      <p className={styles.termsAndPolicy}>Privacy Policy</p>
    </footer>
  );
}
