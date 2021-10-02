import { useEffect } from "react";
import { getEditorConfig } from "../container/editorConfig";
import html2jade from "html2jade";
import ace from "brace";
import "brace/mode/html";
import "brace/mode/jade";
import Box from "@mui/material/Box";

const Htmltojade = () => {
  useEffect(() => {
    let htmlEditor = ace.edit("html-editor");
    htmlEditor.setOptions(getEditorConfig("html"));

    let jadeEditor = ace.edit("jade-editor");
    jadeEditor.setOptions(getEditorConfig("jade"));
    // convert event on change
    htmlEditor.getSession().on("change", () => {
      let htmlVal = htmlEditor.getValue();
      html2jade.convertHtml(htmlVal, {}, (err, jade) => {
        jadeEditor.setValue(jade, -1);
      });
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
        <h2 className="right-aligned">Jade</h2>
        <div  style={{
            minHeight: "350px",
            width: "43vw",
            backgroundColor: "#fff",
            boxShadow: "0 5px 8px rgb(0 0 0 / 40%)",
          }} id="jade-editor" className="editor"></div>
      </Box>
    </Box>
  );
};

export default Htmltojade;
