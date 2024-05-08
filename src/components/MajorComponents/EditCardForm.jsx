/** @format */

import { useState } from "react";
import FloatingWindow from "../MinorComponents/FloatingWindow";
import Input from "../MinorComponents/Input";
import { useParams } from "react-router";
import styles from "../../styles/NewForms.module.css";
import { useSearchParams } from "react-router-dom";

export default function EditCardForm() {
  // const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const front = searchParams.get("front");
  const back = searchParams.get("back");
  const [formData, setFormData] = useState({ front, back });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  }

  return (
    <FloatingWindow previousRoute="/app" className={styles.newCardWindow}>
      <h2>Edit the card</h2>
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
      <div>
        <button className="btn">Save changes</button>
        <button className={`${styles.discardBtn} btn`}>Discard</button>
      </div>
    </FloatingWindow>
  );
}
