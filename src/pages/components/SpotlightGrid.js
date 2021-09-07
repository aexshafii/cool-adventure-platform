import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 220,
    width: 320,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(10)
  const classes = useStyles()

  return (
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  )
}
