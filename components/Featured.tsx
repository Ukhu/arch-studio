import style from "../styles/comps/Featured.module.scss";

import DelSolImg from "../assets/images/image-del-sol.jpg";
import TowerImg from "../assets/images/image-228b.jpg";
import LeProtoImg from "../assets/images/image-prototype.jpg";

import DelSolImg2 from "../assets/images/image-del-sol-desktop.jpg";
import TowerImg2 from "../assets/images/image-228b-desktop.jpg";
import LeProtoImg2 from "../assets/images/image-prototype-desktop.jpg";

import Button from "./Button";
import ProjectCard from "./ProjectCard";

const Featured = () => {
  return (
    <section className={style.featured}>
      <div className={style.featured_header}>
        <h2 className={style.featured_title}>Featured</h2>
        <Button variant="normal" className={style.featured_btn}>
          See All
        </Button>
      </div>

      <div className={style.featured_projects}>
        <ProjectCard
          name="Project Del Sol"
          imgOne={DelSolImg}
          imgTwo={DelSolImg2}
          number={1}
        />
        <ProjectCard
          name="228B Tower"
          imgOne={TowerImg}
          imgTwo={TowerImg2}
          number={2}
        />
        <ProjectCard
          name="Le Prototype"
          imgOne={LeProtoImg}
          imgTwo={LeProtoImg2}
          number={3}
        />
      </div>
      <Button variant="normal" className={style.featured_btn_mobile}>
        See All
      </Button>
    </section>
  );
};

export default Featured;
