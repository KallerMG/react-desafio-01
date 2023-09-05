import styles from "./Header.module.css";

import Logo from "../../public/img/logo.svg";

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} title="logo" />
  </header>
);

export default Header;
