import React from "react";
import Editor from "./component/Editor";


import GlobalStyles from "./container/material/global-style";
import HookStyle from "./hook/hook-style";

const App = () => {
  return (
    <React.Fragment>
      <HookStyle />
      <GlobalStyles />
      <Editor/>
    </React.Fragment>
  );
};

export default App;
