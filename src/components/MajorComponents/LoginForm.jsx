/** @format */
import { useState } from "react";
import Input from "../MinorComponents/Input";
import styles from "../../styles/Homepage.module.css";
import logo from "../../assets/Logo512.png";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepMe: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  }

  const navigate = useNavigate();

  return (
    <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
      <h1 className={styles.outerTitle}>
        LOGIN! AND <span className={styles.innerTitle}>SEE YOURSELF!</span>
      </h1>
      <Input
        type="email"
        name="email"
        placeholder="Your email"
        className={styles.inputEmail}
        color="black"
        width="64%"
        value={formData.email}
        handleChange={handleChange}
        required={true}
      >
        Email
      </Input>
      <Input
        type="password"
        name="password"
        placeholder="Your password"
        className={styles.inputPass}
        color="black"
        width="64%"
        value={formData.password}
        handleChange={handleChange}
        required={true}
      >
        Password
      </Input>
      <Input
        type="checkbox"
        name="keepMe"
        display="flex"
        justifyContent="start"
        alignItems="center"
        flexDirection="row-reverse"
        className={styles.inputCheckbox}
        width="10%"
        color="black"
        value={formData.keepMe}
        handleChange={handleChange}
      >
        Keep me signed in
      </Input>
      <p>Don&apos;t remember password?! click here</p>
      <div className={styles.btnsCtn}>
        <button className={`${styles.submitBtn} btn`}>LOGIN</button>
        <button
          className={`${styles.goToSignBtn} btn`}
          onClick={() => navigate("signup")}
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
}
