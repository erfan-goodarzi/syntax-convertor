import { useEffect } from "react";
import { getEditorConfig } from "../../container/editorConfig";
import html2jsx from 'htmltojsx/src/htmltojsx';
import ace from "brace";
import "brace/mode/html";
import 'brace/mode/jsx';
import Box from "@mui/material/Box";

const Htmltojsx = () => {

  useEffect(() => {
    let htmlEditor = ace.edit("html-editor");
    htmlEditor.setOptions(getEditorConfig("html"));

    let jsxConvertor = new html2jsx({
        createClass: true,
        outputClassName: 'AwesomeComponent'
    });

    let jsxEditor = ace.edit("jsx-editor");
    jsxEditor.setOptions(getEditorConfig("jsx"));
    // convert event on change
    htmlEditor.getSession().on("change", () => {
      let htmlVal = htmlEditor.getValue();
      let convertedValue = jsxConvertor.convert(htmlVal);
        jsxEditor.setValue(convertedValue, -1);
    });
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around" }}
      className="row"
    >
      <Box>
        <h2>Html</h2>
        <div
          style={{
            minHeight: "350px",
            width: "43vw",
            backgroundColor: "#fff",
            boxShadow: "0 5px 8px rgb(0 0 0 / 40%)",
          }}
          id="html-editor"
          className="editor"
        ></div>
      </Box>

      <Box>
        <h2 className="right-aligned">Jsx</h2>
        <div  style={{
            minHeight: "350px",
            width: "43vw",
            backgroundColor: "#fff",
            boxShadow: "0 5px 8px rgb(0 0 0 / 40%)",
          }} id="jsx-editor" className="editor"></div>
      </Box>
    </Box>
  );
};

export default Htmltojsx;
