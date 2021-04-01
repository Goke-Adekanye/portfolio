/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles/profile.css";
import profile from "./images/profile.jpg";
import CustomTimeline, { CustomTimelineSeparator } from "../timeline";
import { Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import GetAppIcon from "@material-ui/icons/GetApp";
import resumeData from "../../utils/resumeData";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../button";

const CustomTimelineItem = ({ text, link, title }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank">
            {" "}
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
export default function Profile() {
  return (
    <div className="profile container_shadow">
      <div class="profile-name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile-image">
        <img src={profile} alt="pic" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <a
            href="https://drive.google.com/file/d/1kgOGxJlCK0xLsjoM_OU-ENnEflUN5oWa/edit?usp=sharing"
            target="_blank"
          >
            <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
}
