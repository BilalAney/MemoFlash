/** @format */
import LogoImg from "../../assets/Logo512.png";
export default function Logo() {
  return (
    <div
      className="Logo"
      style={{
        height: "inherit",
        display: "flex",
        alignItems: "center",
        letterSpacing: "4px",
      }}
    >
      <img src={LogoImg} alt="The Logo" style={{ height: "100%" }} />
      <h1>MemoFlash</h1>
    </div>
  );
}
