import React from "react";
import "./styles/footer.css";
import reumeData from "../../utils/resumeData";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">{reumeData.name}</div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          developed by <a href="/"> Jvstblvck</a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
