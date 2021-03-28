/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./styles/resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/timeline";
import { Grid, Icon, Paper, TextField, Typography } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";

import TimelineContent from "@material-ui/lab/TimelineContent";
import { Settings } from "@material-ui/icons";
import SchoolIcon from "@material-ui/icons/School";
import CustomButton from "../../components/button";

export default function Resume() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const isInvalid = name === "" || emailAddress === "" || message === "";
  return (
    <>
      {/* ABOUT ME */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <h6 variant="h6" className="section_title_text" xs={12}>
            About Me
          </h6>
          <span></span>
        </Grid>

        <Grid item>
          <Typography variant="body2" className="aboutme_text" xs={12}>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/*Experiences + Education*/}
      <Grid container className="section">
        <Grid item className="section_title top_30 mb_30">
          <span></span>
          <h2 className="section_title_text">Resume</h2>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/*EXPERIENCES*/}
            <Grid item xs={12} md={6}>
              <CustomTimeline title="Skills" icon={<Settings />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/*EDUCATION*/}
            <Grid item md={6}>
              <CustomTimeline title="Education History" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* SERVICES */}
      <Grid container className="section pb_45">
        <Grid item className="section_title top_30 mb_30">
          <span></span>
          <h2 className="section_title_text">My Services</h2>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Paper className="service service-card">
                <Icon className="service_icon">{service.icon}</Icon>
                <Typography className="service_title">
                  {service.title}
                </Typography>
                <Typography className="service_description">
                  {service.description}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* CONTACT */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/*CONTACT FORM*/}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <h6 variant="h6" className="section_title_text" xs={12}>
                Contact Me
              </h6>
              <span></span>
            </Grid>

            <Grid item xs={12}>
              <form action="POST" data-netlify="true">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="E-mail"
                      value={emailAddress}
                      onChange={({ target }) => setEmailAddress(target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      value={message}
                      onChange={({ target }) => setMessage(target.value)}
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text={"Submit"} disabled={isInvalid} />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>

        {/* CONTACT INFO */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <h6 variant="h6" className="section_title_text" xs={12}>
                Contact Information
              </h6>
              <span></span>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Typography className="contactInfo_item">
                    <span>Location:</span> {resumeData.location}
                  </Typography>
                  <Typography className="contactInfo_item">
                    <span>Phone:</span> {resumeData.phone}
                  </Typography>
                  <Typography className="contactInfo_item">
                    <span>Email:</span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="contactInfo_social">
                    <a href={resumeData.socials[key].link} target="_blank">
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
