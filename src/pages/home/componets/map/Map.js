import { useState } from "react";
import PropTypes from "prop-types";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { IoMaleSharp } from "react-icons/io5";

import mapImg from "../../../../assets/img/map.png";
import userImg from "../../../../assets/img/user2.jpg";
import SearchBox from "../../../../shared/components/search-box/SearchBox";
import classes from "./Map.module.css";
import SearchPill from "../../../../shared/components/search-box/SearchPill";
import Select from "../../../../shared/components/select/Select";
import ToggleButton from "../../../../shared/components/toggle-button/ToggleButton";
import Ranger from "../../../../shared/components/ranger/Ranger";
import Footer from "./footer/Footer";

const donorData = [
  {
    address: "26 North Camelia, LA, 45569",
    bloodGroup: "AB+",
    img: userImg,
    mobile: "88019319311",
    title: "John Doe",
    status: "open now",
    titleIcon: <IoMaleSharp />,
    rating: 2,
    expandData: {
      reviewer: {
        count: 2,
        name: "John ",
        img: userImg,
        date: "7 Dec",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
      },
      hospital: { period: "Center Hours" },
    },
  },
  {
    address: "26 North Camelia, LA, 45569",
    bloodGroup: "AB+",
    img: userImg,
    mobile: "88019319311",
    title: "John Doe",
    status: "available",
    titleIcon: <IoMaleSharp />,
    rating: 2,
    expandData: {
      reviewer: {
        count: 2,
        name: "John ",
        img: userImg,
        date: "7 Dec",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
      },
      hospital: { period: "Center Hours" },
    },
  },
];

const hospitalData = [
  {
    address: "26 North Camelia, LA, 45569",
    img: userImg,
    mobile: "88019319311",
    title: "Jorea Clinic",
    status: "available",
    rating: 2,
    expandData: {
      reviewer: {
        count: 2,
        name: "John ",
        img: userImg,
        date: "7 Dec",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
      },
      hospital: { period: "Center Hours" },
    },
  },
  {
    address: "26 North Camelia, LA, 45569",
    img: userImg,
    mobile: "88019319311",
    title: "Jorea Clinic",
    status: "open now",
    rating: 2,
    expandData: {
      reviewer: {
        count: 2,
        name: "John ",
        img: userImg,
        date: "7 Dec",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
      },
      hospital: { period: "Center Hours" },
    },
  },
];

const Map = ({ className }) => {
  const [listState, setListState] = useState([...hospitalData]);
  const [searchState, setSearchState] = useState("");
  const [_, setBloodState] = useState("o+");
  const [toggleState, setToggleState] = useState("hospital");
  const [distanceState, setDistanceState] = useState("0");

  const toggleHandler = (value) => {
    setToggleState(value);
    if (value === "hospital") {
      setListState([...hospitalData]);
    } else {
      setListState([...donorData]);
    }
  };
  return (
    <div className={`${classes.Map} ${className} bx-sh2`}>
      <img src={mapImg} alt="map" className={`${classes.MapImg}`} />
      <div className={`${classes.ContainerWrapper}`}>
        <div className={`${classes.Container}`}>
          {/* Distance Ranger start */}
          <div className={`${classes.DistanceRange}`}>
            <Ranger
              name="distance"
              label="Set Distance"
              start="1"
              end="100"
              step="5"
              changed={(e) => {
                setDistanceState(e.target.value);
              }}
              value={distanceState}
            />
          </div>
          {/* Distance Ranger End */}
          {/* Search Header Start */}
          <div className={`${classes.Header}`}>
            <div className={`${classes.HeaderTop}`}>
              {/* Search Box Start */}
              <div className={`${classes.SearchContainer}`}>
                <SearchBox
                  id="text"
                  name="search"
                  placeholder="Search here"
                  value={searchState}
                  changed={(e) => {
                    setSearchState(e.target.value);
                  }}
                  submitted={() => {}}
                  icon={<FiSearch />}
                />
              </div>
              {/* Search Box End */}
              {toggleState === "donor" && (
                <div className={`px-3 ${classes.BloodGroup}`}>
                  <Select
                    icon={<FiChevronDown />}
                    name="bloodGroup"
                    changed={(e) => {
                      setBloodState(e.target.value);
                    }}
                    selectedValue={"o+"}
                    data={[
                      { title: "A+", value: "a+" },
                      { title: "A-", value: "a-" },
                      { title: "B+", value: "b-" },
                      { title: "B-", value: "b-" },
                      { title: "O+", value: "o+" },
                      { title: "O-", value: "o-" },
                      { title: "AB+", value: "ab-" },
                      { title: "AB-", value: "ab-" },
                    ]}
                  />
                </div>
              )}
              {/* Toggle Button start */}
              <div className={`px-3`}>
                <ToggleButton
                  changed={(e) => toggleHandler(e.target.value)}
                  name="toggle"
                  defaultValue={"hospital"}
                  values={["hospital", "donor"]}
                />
              </div>
              {/* Toggle Button End */}
            </div>
            {/* Search Result Start */}
            <div className={`${classes.SearchResult}`}>
              <SearchPill>Lora Clinic</SearchPill>
              <SearchPill>Park Musum Hospital</SearchPill>
              <SearchPill>Lorem Ipsum</SearchPill>
            </div>
            {/* Search Result end */}
          </div>
          {/* Search Header End */}
          {/* Footer Start */}
          <Footer data={listState} />
          {/* Footer End */}
        </div>
      </div>
    </div>
  );
};

Map.protoTypes = {
  className: PropTypes.string,
};

export default Map;
