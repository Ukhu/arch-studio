import Image from "next/image";

import LinkedInIcon from "../assets/icons/icon-linkedin.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";

import style from "../styles/comps/LeaderCard.module.scss";

interface ILeaderCardProps {
  image: StaticImageData;
  name: string;
  title: string;
}

function LeaderCard({ image, name, title }: ILeaderCardProps) {
  return (
    <div className={style.leader_card}>
      <div className={style.leader_card_image}>
        <Image
          src={image}
          alt="One of our leaders"
          layout="responsive"
          objectFit="cover"
        />
        <div className={style.leader_card_image_overlay}>
          <div className={style.leader_card_icons_desktop}>
            <div className={style.linkedin_icon}>
              <Image src={LinkedInIcon} alt="LinkedIn" objectFit="contain" />
            </div>
            <Image src={TwitterIcon} alt="Twitter" objectFit="contain" />
          </div>
        </div>
      </div>

      <h3 className={style.leader_card_name}>{name}</h3>
      <p className={style.leader_card_title}>{title}</p>
      <div className={style.leader_card_icons}>
        <div className={style.linkedin_icon}>
          <Image src={LinkedInIcon} alt="LinkedIn" objectFit="contain" />
        </div>
        <Image src={TwitterIcon} alt="Twitter" objectFit="contain" />
      </div>
    </div>
  );
}

export default LeaderCard;
