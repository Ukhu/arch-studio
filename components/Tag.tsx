import style from "../styles/comps/Tag.module.scss";

interface ITagProps {
  name: string;
}

const Tag = ({ name }: ITagProps) => {
  return (
    <div className={style.tag}>
      <div className={style.tag_line} />
      <span className={style.tag_name}>{name}</span>
    </div>
  );
};

export default Tag;
