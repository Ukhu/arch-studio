import Link from "next/link";

import Button from "./Button";
import ProjectCard from "./ProjectCard";

import style from "../styles/comps/Featured.module.scss";

const Featured = () => {
  return (
    <section className={style.featured}>
      <div className={style.featured_header}>
        <h2 className={style.featured_title}>Featured</h2>
        <Link href="/portfolio">
          <a>
            <Button variant="normal" className={style.featured_btn}>
              See All
            </Button>
          </a>
        </Link>
      </div>

      <div className={style.featured_projects}>
        <ProjectCard
          name="Project Del Sol"
          imgOne="/images/image-del-sol.jpg"
          imgTwo="/images/desktop/image-del-sol.jpg"
          number={1}
        />
        <ProjectCard
          name="228B Tower"
          imgOne="/images/image-228b.jpg"
          imgTwo="/images/desktop/image-228b.jpg"
          number={2}
        />
        <ProjectCard
          name="Le Prototype"
          imgOne="/images/image-prototype.jpg"
          imgTwo="/images/desktop/image-prototype.jpg"
          number={3}
        />
      </div>
      <Link href="/portfolio">
        <a>
          <Button variant="normal" className={style.featured_btn_mobile}>
            See All
          </Button>
        </a>
      </Link>
    </section>
  );
};

export default Featured;
