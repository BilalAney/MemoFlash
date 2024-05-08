/** @format */

import { useState } from "react";
import FloatingWindow from "../MinorComponents/FloatingWindow";
import Input from "../MinorComponents/Input";
import { useParams } from "react-router";
import styles from "../../styles/NewForms.module.css";

export default function NewCardForm() {
  const [formData, setFormData] = useState({ front: "", back: "" });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  }

  const params = useParams();

  return (
    <FloatingWindow previousRoute="/app" className={styles.newCardWindow}>
      <h1>{params.name}</h1>
      <h2>Add a new card</h2>
      <Input
        type="text"
        name="front"
        value={formData.front}
        handleChange={handleChange}
        flexDirection="column"
        justifyContent="space-around"
        placeholder="The front"
      >
        TITLE
      </Input>
      <Input
        type="text"
        name="back"
        value={formData.back}
        handleChange={handleChange}
        flexDirection="column"
        justifyContent="space-around"
        placeholder="The back"
      >
        REVEAL
      </Input>
      <button className="btn">ADD THE CARD</button>
    </FloatingWindow>
  );
}
