import { useState } from "react";
import Image from "next/image";

import style from "../styles/comps/Header.module.scss";

import ArchLogo from "../assets/logo.svg";
import MenuIcon from "../assets/icons/icon-hamburger.svg";
import CloseIcon from "../assets/icons/icon-close.svg";
import clsx from "clsx";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={style.header}>
      <div className={style.header_main}>
        <Image src={ArchLogo} alt="Arch Studio Logo" />
        <HeaderMenu />
        <span className={style.header_btn}>
          <Image
            src={openMenu ? CloseIcon : MenuIcon}
            alt="Menu Icon"
            onClick={handleOpenMenu}
          />
        </span>
      </div>

      {openMenu && <HeaderMenu mobile />}
    </header>
  );
};

interface IHeaderMenuProps {
  mobile?: boolean;
}

const HeaderMenu = ({ mobile }: IHeaderMenuProps) => {
  const { header_menu_wrap, mobile_menu } = style;

  return (
    <nav className={clsx(mobile ? mobile_menu : header_menu_wrap)}>
      <ul className={style.header_menu}>
        <li className={style.header_menu_item}>Portfolio</li>
        <li className={style.header_menu_item}>About Us</li>
        <li className={style.header_menu_item}>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
