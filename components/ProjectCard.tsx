import Link from "next/link";
import Image from "next/image";

import style from "../styles/comps/ProjectCard.module.scss";

interface IProjectCardProps {
  name: string;
  imgOne: string;
  imgTwo: string;
  number?: number;
  dateCompleted?: string;
}

const ProjectCard = ({
  name,
  imgOne,
  imgTwo,
  number,
  dateCompleted,
}: IProjectCardProps) => {
  return (
    <div className={style.project_card}>
      <div className={style.project_image}>
        <Image
          src={imgOne}
          alt="One of our projects"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className={style.project_image_desktop}>
        <Image
          src={imgTwo}
          alt="One of our projects"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className={style.project_overlay}>
        <div className={style.project_detail}>
          <h3 className={style.project_name}>{name}</h3>
          <Link href="/" passHref>
            <span className={style.project_view_more}>
              {dateCompleted ? dateCompleted : "View All Projects"}
            </span>
          </Link>
        </div>
        {number && <h4 className={style.project_number}>{number}</h4>}
      </div>
    </div>
  );
};

export default ProjectCard;
