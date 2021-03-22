import { Link } from "react-router-dom";

import routes from "../../../../shared/utils/routes";
import Badge from "../../../../shared/components/badge/Badge";
import Avatar from "../../../../shared/components/avatar/Avatar";
import dartBoardImg from "../../../../assets/img/dart-board.png";
import donationImg from "../../../../assets/img/donation.png";
import donorsImg from "../../../../assets/img/donors.png";
import myListImg from "../../../../assets/img/my-list.png";
import classes from "./Menu.module.css";

const menuData = [
  {
    label: "book",
    img: dartBoardImg,

    link: routes.home,
  },
  { label: "donation", img: donationImg, count: "2", link: routes.donations },
  {
    label: "donors",
    img: donorsImg,
    link: routes.home,
  },
  {
    label: "my list",
    img: myListImg,
    link: routes.home,
  },
];

const Menu = () => {
  return (
    <div className={`${classes.MenuItem}`}>
      {menuData.map((item) => (
        <Link key={item.label} className={`${classes.MenuItem}`} to={item.link}>
          <Badge
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

export default Menu;
