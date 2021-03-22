import { Link } from "react-router-dom";

import routes from "../../../../shared/utils/routes";
import Badge from "../../../../shared/components/badge/Badge";
import Avatar from "../../../../shared/components/avatar/Avatar";
import ambulance from "../../../../assets/img/ambulance.png";
import medicalBag from "../../../../assets/img/medical-bag.png";
import heartBit from "../../../../assets/img/heart-bit.png";
import classes from "./RequestBadges.module.css";

const menuData = [
  {
    label: "urgent request",
    img: ambulance,
    count: "9+",
    link: routes.request,
  },
  { label: "my request", img: medicalBag, count: "2", link: routes.request },
  {
    label: "post request",
    img: heartBit,
    count: undefined,
    link: routes.request,
  },
];

const RequestBadges = () => {
  return (
    <div className={`${classes.RequestBadges}`}>
      {menuData.map((item) => (
        <Link
          key={item.label}
          className={`${classes.RequestBadge}`}
          to={item.link}
        >
          <Badge
            shadow
            className={`${classes.Badge}`}
            label={item.label}
            badgeContent={
              item.count && (
                <Avatar height={20} width={20}>
                  {item.count}
                </Avatar>
              )
            }
          >
            <Avatar height={40} width={40} src={item.img} alt={item.label} />
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default RequestBadges;
