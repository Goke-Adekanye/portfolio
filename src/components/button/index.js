import React from "react";
import Button from "@material-ui/core/Button";
import "./styles/button.css";

export default function CustomButton({ text, icon }) {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
}
