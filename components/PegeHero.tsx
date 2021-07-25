import style from "../styles/comps/PageHero.module.scss";

interface IPageHeroProps {
  title: string;
  heading: string;
  children: React.ReactNode;
}

const PageHero = ({ title, heading, children }: IPageHeroProps) => {
  return (
    <section className={style.page_hero}>
      <div className={style.page_hero_image}>
        <div className={style.page_hero_overlay} />
      </div>
      <div className={style.page_hero_content}>
        <h1 className={style.page_hero_title}>{title}</h1>
        <div className={style.divider} />
        <h2 className={style.page_hero_heading}>{heading}</h2>
        <p className={style.page_hero_summary}>{children}</p>
      </div>
    </section>
  );
};

export default PageHero;
