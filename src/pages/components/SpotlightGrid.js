import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

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

const SpotlightGrid = ({ title, parapgraph }) => {
  const classes = useStyles()
  console.log(title)
  return (
    <main className="page">
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item>
              <Paper className={classes.paper}>
                <h2> {title}</h2> <div> {parapgraph}</div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>MAdrid</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </main>
  )
}
export default SpotlightGrid
