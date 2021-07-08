import clsx from "clsx";
import { IoArrowForward } from "react-icons/io5";

import style from "../styles/comps/Button.module.scss";

const { btn, btn_sm, btn_num, btn_icon } = style;

interface IFullBtn {
  variant: "normal" | "numbered";
  children: React.ReactNode;
}

interface IShortBtn {
  variant: "short";
  children?: React.ReactNode;
}

type IButtonProps = IFullBtn | IShortBtn;

const Button = ({ children, variant }: IButtonProps) => {
  const isShort = variant === "short";
  const isNum = variant === "numbered";
  const isNormal = variant === "normal";

  return (
    <button
      className={clsx(btn, (isShort || isNum) && btn_sm, isNum && btn_num)}
    >
      {children}
      {isNormal && <>&nbsp;&nbsp;</>}
      {!isNum && <IoArrowForward className={btn_icon} />}
    </button>
  );
};

export default Button;
