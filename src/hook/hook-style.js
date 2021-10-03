// import { Button } from "@material-ui/core";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
  root: {
    padding: "0",
    boxSizing: "border-box",
    textAlign: 'center'
  },

  title: {
    fontSize: "33px",
    fontWeight: "200",
    letterSpacing: "5px",
    textAlign: "center",
  },
});

export default function HookStyle() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4 className={classes.title}>SYNTAX CONVERTOR</h4>
    </div>
  );
}
