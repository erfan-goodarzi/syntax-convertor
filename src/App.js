import React from "react";
import Htmltojade from "./component/HtmltoJade";
import GlobalStyles from "./container/material/global-style";
import HookStyle from "./hook/hook-style";

const App = () => {
  return (
    <React.Fragment>
      <HookStyle />
      <GlobalStyles />
      <Htmltojade/>
    </React.Fragment>
  );
};

export default App;
