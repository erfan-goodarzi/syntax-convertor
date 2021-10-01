import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    padding: "0",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "39px",
    margin: "auto",
  },
});

export default function HookStyle() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>SYNTAX CONVERTOR</h2>
    </div>
  );
}
