import Image from "next/image";
import Link from "next/link";

import ArchLogo from "../assets/logo.svg";

import Button from "./Button";

import style from "../styles/comps/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_logo}>
          <Link href="/">
            <a>
              <Image src={ArchLogo} alt="Arch Studio Logo" />
            </a>
          </Link>
        </div>

        <FooterMenu />
      </div>

      <Button variant="normal" className={style.footer_btn}>
        <Link href="/portfolio">See Our Portfolio</Link>
      </Button>
    </footer>
  );
};

const FooterMenu = () => {
  return (
    <nav className={style.footer_menu_wrap}>
      <ul className={style.footer_menu}>
        <li className={style.footer_menu_item}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={style.footer_menu_item}>About Us</li>
        <li className={style.footer_menu_item}>Contact</li>
      </ul>
    </nav>
  );
};

export default Footer;
