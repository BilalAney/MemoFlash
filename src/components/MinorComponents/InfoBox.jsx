/** @format */

import FloatingWindow from "./FloatingWindow";
import bilal from "../../assets/bilal_jamal.JPG";
import styles from "../../styles/InfoBox.module.css";
import facebook from "../../assets/interface_icons/facebook.svg";
import google from "../../assets/interface_icons/google.svg";
import github from "../../assets/interface_icons/github.svg";
import linkedin from "../../assets/interface_icons/linkedin.svg";
import logo from "../../assets/Logo512.png";
import { useNavigate } from "react-router";

export default function InfoBox() {
  const navigate = useNavigate();
  return (
    <FloatingWindow className={styles.window} previousRoute="/App">
      <div className={styles.imgCtn}>
        <img src={bilal} className={styles.bilal} />
        <img src={logo} className={styles.logo} />
      </div>

      <h1>Bilal Al-aney</h1>
      <p>
        I am a highly skilled Software Engineer, specifically Full-stack
        engineer, with high Network engineering skills. I am a student in
        Salahadding Unversity - Erbil, College of Engineering - Software and
        Informatics department. I have a strong portfolio of some small projects
        like it, and some big projects like whole systems of Accounting, Trade
        management and others...
      </p>
      <br />
      <h3>GET MORE ABOUT ME!</h3>
      <div className={styles.linkMethods}>
        <img src={google} />
        <img src={facebook} />
        <img src={github} />
        <img src={linkedin} />
      </div>
      <br />
      <button
        className={`${styles.button} btn`}
        onClick={() => navigate("/App")}
      >
        CLOSE
      </button>
    </FloatingWindow>
  );
}
