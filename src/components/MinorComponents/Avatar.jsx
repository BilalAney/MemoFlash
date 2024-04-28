/** @format */

import PropTypes from "prop-types";
export default function Avatar({
  image,
  height = "24px",
  width = "24px",
  alt,
}) {
  const styles = {
    height,
    width,
    borderRadius: height / 2,
  };
  return <img src={image} alt={alt} style={styles} />;
}

Avatar.propTypes = {
  image: PropTypes.any.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
};
