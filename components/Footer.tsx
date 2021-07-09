import Image from "next/image";

import style from "../styles/comps/Footer.module.scss";

import ArchLogo from "../assets/logo.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_logo}>
          <Image src={ArchLogo} alt="Arch Studio Logo" />
        </div>

        <FooterMenu />
      </div>

      <Button variant="normal" className={style.footer_btn}>
        See Our Portfolio
      </Button>
    </footer>
  );
};

const FooterMenu = () => {
  return (
    <nav className={style.footer_menu_wrap}>
      <ul className={style.footer_menu}>
        <li className={style.footer_menu_item}>Portfolio</li>
        <li className={style.footer_menu_item}>About Us</li>
        <li className={style.footer_menu_item}>Contact</li>
      </ul>
    </nav>
  );
};

export default Footer;
