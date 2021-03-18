import PropTypes from "prop-types";
import { FaUpload, FaTimes } from "react-icons/fa";

import classes from "./ImagePicker.module.css";

const ImagePicker = ({ id, name, changed, required = false, value }) => {
  const changeHandler = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const result = fileReader.result;
        if (result) {
          changed(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div className={`${classes.Container}`}>
      {value ? (
        <>
          <img src={value} alt="image" className={`${classes.View}`} />
          <FaTimes
            className={`${classes.ViewClose}`}
            onClick={() => changed("")}
          />
        </>
      ) : (
        <label className={`${classes.ImagePicker} bx-sh`}>
          <input
            type="file"
            name={name}
            id={id}
            accept="image/*"
            required={required}
            onChange={changeHandler}
          />
          <div className={`${classes.ImagePickerContent}`}>
            <FaUpload />
            <p>Upload a Photo</p>
          </div>
        </label>
      )}
    </div>
  );
};

ImagePicker.propTypes = {
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default ImagePicker;
