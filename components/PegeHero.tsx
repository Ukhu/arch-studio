import style from "../styles/comps/PageHero.module.scss";

const PageHero = () => {
  return (
    <section className={style.page_hero}>
      <div className={style.page_hero_image}>
        <div className={style.page_hero_overlay} />
      </div>
      <div className={style.page_hero_content}>
        <h1 className={style.page_hero_title}>About</h1>
        <div className={style.divider} />
        <h2 className={style.page_hero_heading}>Your team of professionals</h2>
        <p className={style.page_hero_summary}>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </section>
  );
};

export default PageHero;
