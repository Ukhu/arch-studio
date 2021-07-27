import style from "../styles/comps/ProjectList.module.scss";

import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectList = () => {
  return (
    <section className={style.project_list}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          imgOne={project.image.default}
          imgTwo={project.image.desktop}
          dateCompleted={project.dateCompleted}
          loading={index < 3 ? "eager" : "lazy"}
        />
      ))}
    </section>
  );
};

export default ProjectList;
