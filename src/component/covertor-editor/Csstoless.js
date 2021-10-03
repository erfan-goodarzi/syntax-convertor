import { useEffect } from "react";
import { getEditorConfig } from "../../container/editorConfig";
import Css2Less from '../../container/Css2less';
import ace from "brace";
import "brace/mode/css";
import 'brace/mode/less';
import Box from "@mui/material/Box";

const Csstoless = () => {

  useEffect(() => {
    let cssEditor = ace.edit("css-editor");
    cssEditor.setOptions(getEditorConfig("css"));


    let lessEditor = ace.edit("less-editor");
    lessEditor.setOptions(getEditorConfig("less"));
    // convert event on change
    cssEditor.getSession().on("change", () => {
      let cssVal = cssEditor.getValue();
      let convertedValue = Css2Less(cssVal, { indentSize: 2 });
      lessEditor.setValue(convertedValue, -1);
    });
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around" }}
      className="row"
    >
      <Box>
        <h2>css</h2>
        <div
          style={{
            minHeight: "350px",
            width: "43vw",
            backgroundColor: "#fff",
            boxShadow: "0 5px 8px rgb(0 0 0 / 40%)",
          }}
          id="css-editor"
          className="editor"
        ></div>
      </Box>

      <Box>
        <h2 className="right-aligned">less</h2>
        <div  style={{
            minHeight: "350px",
            width: "43vw",
            backgroundColor: "#fff",
            boxShadow: "0 5px 8px rgb(0 0 0 / 40%)",
          }} id="less-editor" className="editor"></div>
      </Box>
    </Box>
  );
};

export default Csstoless;
