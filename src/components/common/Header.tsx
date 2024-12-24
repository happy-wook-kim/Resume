import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div>HOME</div>
      <ol>
        <li>
          <a href="https://jw.banpick.kr" target="_blank">
            <img src="https://jw.banpick.kr/logo.png" alt="icon" />
          </a>
        </li>
        <li>
          <a href="https://banpick.kr" target="_blank">
            <img src="https://banpick.kr/favicon.ico" alt="icon" />
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Header;
