/** @format */

import { useEffect, useState } from "react";
import FloatingWindow from "../MinorComponents/FloatingWindow";
import Input from "../MinorComponents/Input";
import { Navigate } from "react-router";

export default function NewCollectionForm({ handleClose }) {
  const [formData, setFormData] = useState({
    label: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  }

  return (
    <FloatingWindow previousRoute="/App">
      <h2>ADD A NEW COLLECTION</h2>
      <Input value={formData.label} handleChange={handleChange} name="label">
        Collection label
      </Input>
      <button>CREATE COLLECTION</button>
    </FloatingWindow>
  );
}
