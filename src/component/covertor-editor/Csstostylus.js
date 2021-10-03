import { useEffect } from "react";
import { getEditorConfig } from "../../container/editorConfig";
import Css2Stylus from '../../container/Css2stylus';
import ace from "brace";
import "brace/mode/css";
import 'brace/mode/stylus';
import Box from "@mui/material/Box";

const Csstostylus = () => {

  useEffect(() => {
    let cssEditor = ace.edit("css-editor");
    cssEditor.setOptions(getEditorConfig("css"));


    let stylusEditor = ace.edit("stylus-editor");
    stylusEditor.setOptions(getEditorConfig("stylus"));
    // convert event on change
    cssEditor.getSession().on("change", () => {
      let cssVal = cssEditor.getValue();
      let converter = new Css2Stylus.Converter(cssVal);
      converter.processCss();
      stylusEditor.setValue(converter.getStylus(), -1);
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
        <h2 className="right-aligned">stylus</h2>
        <div  style={{
            minHeight: "350px",
            width: "43vw",
            backgroundColor: "#fff",
            boxShadow: "0 5px 8px rgb(0 0 0 / 40%)",
          }} id="stylus-editor" className="editor"></div>
      </Box>
    </Box>
  );
};

export default Csstostylus;
