import { FC } from "react";
import { ActiveLink } from "./active-link";
import styles from "./nav-bar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar: FC = () => {
  return (
    <nav className={styles.navBarContainer}>
      {menuItems.map((item) => (
        <ActiveLink key={item.text} text={item.text} href={item.href} />
      ))}
    </nav>
  );
};
