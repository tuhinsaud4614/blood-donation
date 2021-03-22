import liveSaver from "../../../../assets/img/live-saver.png";
import lives from "../../../../assets/img/lives.png";
import protector from "../../../../assets/img/protector.png";
import certified from "../../../../assets/img/certified.png";
import fast from "../../../../assets/img/fast.png";
import superman from "../../../../assets/img/superman.png";
import tree from "../../../../assets/img/tree.png";
import clean from "../../../../assets/img/clean.png";
import ProfileBadge from "./ProfileBadge";
import classes from "./ProfileBadge.module.css";

const ProfileBadges = () => {
  return (
    <div className={`${classes.Badges} bx-sh2`}>
      <h3>Badges</h3>
      <div className={`${classes.BadgeItem}`}>
        <ProfileBadge title="Life Saver" img={liveSaver} active />
        <ProfileBadge title="fast" img={fast} />
        <ProfileBadge title="certified" img={certified} />
        <ProfileBadge title="superman" img={superman} />
        <ProfileBadge title="50 Lives" img={lives} active />
        <ProfileBadge title="life saver" img={tree} />
        <ProfileBadge title="clean" img={clean} />
        <ProfileBadge title="Protector" img={protector} active />
      </div>
    </div>
  );
};

export default ProfileBadges;
