const editorConfig = {
  mode: "ace/mode/html",
  fontSize: 14,
  tabSize: 2,
  showLineNumbers: false,
  showGutter: false,
  maxLines: Infinity,
};

const getEditorConfig = (editor) => {
  if (!editor) return;
  let editorTypes = {
    html: () => {
      return Object.assign({}, editorConfig, {
        mode: "ace/mode/html",
        readOnly: false,
      });
    },

    jade: () => {
      return Object.assign({}, editorConfig, {
        mode: "ace/mode/jade",
        readOnly: true,
      });
    },

    jsx: () => {
      return Object.assign({}, editorConfig, {
        mode: "ace/mode/jsx",
        readOnly: true,
      });
    },

    css: () => {
      return Object.assign({}, editorConfig, {
        mode: "ace/mode/css",
        readOnly: false,
      });
    },

    stylus: () => {
      return Object.assign({}, editorConfig, {
        mode: "ace/mode/stylus",
        readOnly: true,
      });
    },

    less: () => {
      return Object.assign({}, editorConfig, {
        mode: "ace/mode/less",
        readOnly: true,
      });
    },
  };
  if (editorTypes.hasOwnProperty(editor)) return editorTypes[editor]();
};

export {getEditorConfig};
