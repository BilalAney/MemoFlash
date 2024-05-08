/** @format */

import { Link, useNavigate } from "react-router-dom";

export default function Overlay({ previousRoute }) {
  const navigate = useNavigate();
  return (
    <div className="overlay" onClick={() => navigate(previousRoute)}></div>
  );
}
