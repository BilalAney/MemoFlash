/** @format */

import Input from "../MinorComponents/Input";
import styles from "../../styles/Homepage.module.css";
import { useNavigate } from "react-router";

export default function SignupForm() {
  const navigate = useNavigate();
  return (
    <form className={styles.loginForm}>
      <h3>
        CREATE YOUR <span className={styles.innerTitle}>BRILLIANT</span> ACCOUNT
      </h3>
      <Input type="text" name="fName" placeholder="First name" width="50%">
        First name:
      </Input>
      <Input type="text" name="lName" placeholder="Last name" width="50%">
        Last name:
      </Input>
      <Input type="date" name="dob" placeholder="Date of birth" width="50%">
        DOB:
      </Input>
      <Input
        type="password"
        name="password"
        placeholder="Enter a strong password"
        width="50%"
      >
        Enter Password:
      </Input>
      <Input
        type="password"
        name="password"
        placeholder="Confirm the password"
        width="50%"
      >
        Confirm password:
      </Input>
      <fieldset className={styles.genderBox}>
        <legend>Choose your gender</legend>
        <Input
          type="radio"
          name="gender"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="center"
          alignItems="center"
          width="auto"
        >
          Male
        </Input>
        <Input
          type="radio"
          name="gender"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="center"
          alignItems="center"
          width="auto"
        >
          Female
        </Input>
      </fieldset>
      <div className={styles.btnsCtn}>
        <button className={`${styles.submitBtn} btn`}>CREATE ACCOUNT</button>
        <button
          className={`${styles.goToSignBtn} btn`}
          onClick={() => navigate("/")}
        >
          I HAVE AN ACCOUNT
        </button>
      </div>
    </form>
  );
}
