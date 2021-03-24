import React from "react";
import "./styles/timeline.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";

const CustomTimeline = ({ icon, title, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* TIMELINE HEADER */}
      <TimelineItem className={"timeline_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* TIMELINE REST */}
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator-padding"}>
    <TimelineDot variant="outlined" className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
