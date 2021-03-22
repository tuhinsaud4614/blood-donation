import ListTile from "../list-tile/ListTile";
// import img from "../../../../../assets/img/user1.jpg";
import classes from "./Footer.module.css";

const Footer = ({ data }) => {
  return (
    <section className={`${classes.Footer}`}>
      {data.map((item, index) => {
        return (
          <ListTile
            key={index}
            address={item.address}
            bloodGroup={item.bloodGroup}
            img={item.img}
            mobile={item.mobile}
            title={item.title}
            status={item.status}
            titleIcon={item.titleIcon}
            rating={item.rating}
            expandData={{
              ...item.expandData,
            }}
          />
        );
      })}
    </section>
  );
};

export default Footer;
