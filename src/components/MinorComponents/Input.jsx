/** @format */

import { CollectionCard } from "../MajorComponents/CollectionPart";

export default function Input({
  className = "input",
  type = "text",
  placeholder = "placeholder",
  disabled = false,
  name,
  display = "flex",
  flexDirection = "row",
  padding = "4px",
  justifyContent = "space-between",
  alignItems = "center",
  width = "80%",
  color = "auto",
  value,
  handleChange,
  children,
  required = false,
}) {
  const styles = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    color,
  };

  return (
    <label style={styles}>
      {children}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        value={value}
        onChange={handleChange}
        style={{ padding, width }}
        required={required}
      />
    </label>
  );
}
