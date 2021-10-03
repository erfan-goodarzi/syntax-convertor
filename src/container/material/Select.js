import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Htmltojade from "../../component/covertor-editor/HtmltoJade";
import Htmltojsx from "../../component/covertor-editor/HtmltoJxs";
import Csstoless from "../../component/covertor-editor/Csstoless";
import Csstostylus from "../../component/covertor-editor/Csstostylus";

export default function EditorSelect(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        sx={{
          width: "83%",
        }}
      >
        <InputLabel id="demo-simple-select-label">Editor Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.editor}
          label="Editor Select"
          onChange={props.onChange}
        >
          <MenuItem value={<Htmltojade />}>HtmlToJade</MenuItem>
          <MenuItem value={<Htmltojsx Isclass={props.IsClass} Classname={props.ClassName}/>}>HtmlToJsx</MenuItem>
          <MenuItem value={<Csstoless/>}>CssToLess</MenuItem>
          <MenuItem value={<Csstostylus/>}>CssToStylus</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
