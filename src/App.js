import React from "react";
import GlobalStyles from "./container/material/global-style";
import HookStyle from "./hook/hook-style";

const App = () => {
  return (
    <React.Fragment>
      <HookStyle />
      <GlobalStyles />
    </React.Fragment>
  );
};

export default App;
