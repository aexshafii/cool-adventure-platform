import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

import SpotlightOne from "./SpotlightOne"
import SpotlightTwo from "./SpotlightTwo"
import SpotlightThree from "./SpotlightThree"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 350,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const SpotlightGrid = () => {
  const classes = useStyles()
  return (
    <div className="grid-div">
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={4}
            className="grid-container"
          >
            <Grid item>
              <Paper className={classes.paper}>
                <SpotlightOne />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <SpotlightTwo />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <SpotlightThree />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  )
}
export default SpotlightGrid
