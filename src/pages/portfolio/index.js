/* eslint-disable eqeqeq */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./styles/portfolio.css";
import resumeData from "../../utils/resumeData";
import ImageGallery from "../../components/imageGallery";

export default function Portfolio() {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pb_45">
      {/* TITLE */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h2 className="section_title_text">Portfolio</h2>
      </Grid>

      {/* TAB */}
      <Grid item xs="12">
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {/* [...new Set: MAP THRU PROJECTS AND CREATE NON REPETITIVE TAG-ITEM]. THEN MAP EACH TAG TO TAB */}
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* PROJECTS */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      {/* OPEN DIALOG */}
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        maxWidth={"sm"}
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>

        <DialogContent style={{ height: "80vh" }}>
          {projectDialog.images && (
            <ImageGallery images={projectDialog.images} />
          )}
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              rel="noreferrer"
              target="_blank"
              className="projectDialog_icons"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
