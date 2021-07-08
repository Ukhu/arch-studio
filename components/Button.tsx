import clsx from "clsx";
import { IoArrowForward } from "react-icons/io5";

import style from "../styles/comps/Button.module.scss";

const { btn, btn_sm, btn_num, btn_icon, btn_active } = style;

interface IFullBtn {
  variant: "normal" | "numbered";
  active?: boolean;
  children: React.ReactNode;
}

interface IShortBtn {
  variant: "short";
  active?: boolean;
  children?: React.ReactNode;
}

type IButtonProps = IFullBtn | IShortBtn;

const Button = ({ children, variant, active }: IButtonProps) => {
  const isShort = variant === "short";
  const isNum = variant === "numbered";
  const isNormal = variant === "normal";

  return (
    <button
      className={clsx(
        btn,
        (isShort || isNum) && btn_sm,
        isNum && btn_num,
        active && btn_active
      )}
    >
      {children}
      {isNormal && <>&nbsp;&nbsp;</>}
      {!isNum && <IoArrowForward className={btn_icon} />}
    </button>
  );
};

export default Button;
