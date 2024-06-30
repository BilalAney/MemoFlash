/**
 * ALL RIGHTS RESERVED  to Developer Bilal Al-aney©️ 2024 ---
 * Any modification or republication of this component must be done
 * exclusively with written approval of the developer.
 * THANK YOU.
 * Made with 💖. By Me... BILAL AL-ANEY <--
 *
 * @format
 */

import { useState } from "react";

export default function ToggleInput({
  height = "1rem",
  width = "2.3rem",
  padColor_on = "lightblue",
  padColor_off = "lightgrey",
  tipColor_on = "green",
  tipColor_off = "black",
  default_state = false,
  externalState = null,
  setExternalState = null,
  className, //This is a modification to the original file, but it is by me, too...
  children,
}) {
  const [isToggled, setIsToggled] = useState(default_state);
  const currentState = externalState || isToggled;
  const padStyles = {
    height,
    width,
    backgroundColor: currentState ? padColor_on : padColor_off,
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    transition: "all .15s",
    display: "inline-block",
    padding: "6px",
  };

  const tipStyles = {
    height: "100%",
    width: "50%",
    backgroundColor: currentState ? tipColor_on : tipColor_off,
    borderRadius: "20%",
    position: "absolute",
    left: currentState ? "50%" : "0",
    // right: isToggled ? "1px" : "0",
    top: 0,
    transitionProperty: "left, right",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease-in-out",
    // border: "1px solid grey",
  };

  const wholeContainerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
  };

  return (
    <div
      onClick={() => {
        externalState !== null
          ? setExternalState()
          : setIsToggled((pre) => !pre);
      }}
      style={wholeContainerStyles}
      className={className}
    >
      <span>{children}</span>
      <div style={padStyles}>
        <div style={tipStyles}></div>
      </div>
    </div>
  );
}
