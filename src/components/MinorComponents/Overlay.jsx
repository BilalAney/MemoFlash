/** @format */

import { Link } from "react-router-dom";

export default function Overlay({ previousRoute }) {
  return (
    <Link to={previousRoute}>
      <div className="overlay"></div>
    </Link>
  );
}
