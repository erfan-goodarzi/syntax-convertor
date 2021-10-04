import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import EditorSelect from "./Select";
import Htmltojade from "../../component/covertor-editor/HtmltoJade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

const drawerBleeding = 56;

//style
const Root = styled("div")(({ theme }) => ({
  height: "100%",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const [editor, setEditor] = useState(<Htmltojade />);
  const { window } = props;
  const [open, setOpen] = useState(false);
  const [IsClass, setIsClass] = useState(false);
  const [className, setClassName] = useState("AwesomeComponent");


  useEffect(() => {
    console.log('object')
  }, [IsClass])

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const ChangeClassNameHandler = (e) => {
    setClassName(e.target.value);
  };
  const ChnageEditorHandler = (e) => {
    setEditor(e.target.value);

    if (e.target.value.type.name !== "Htmltojsx") {
      setOpen(false);
    }
  };

  const enableClassHandler = (e) => {
    setIsClass(e.target.checked);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
            width: "25%",
            textAlign: "center",
          },
        }}
      />

      <Box sx={{ textAlign: "center" }}>
        <Button
          onClick={toggleDrawer(true)}
          variant="contained"
          sx={{ bgcolor: "info.main" }}
        >
          Option
        </Button>
      </Box>

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            Settings
          </Typography>

          <EditorSelect
            editor={editor}
            onChange={ChnageEditorHandler}
            ClassName={className}
            enabelClass={IsClass}
          />

          {editor.type.name === "Htmltojsx" ? (
            <FormControlLabel
              control={
                <Switch checked={IsClass} onChange={enableClassHandler} />
              }
              label="Class component"
            />
          ) : null}
          {IsClass ? (
            <TextField
              sx={{ mt: 3 }}
              id="outlined-helperText"
              label="Class Name"
              defaultValue="AwesomeComponent"
              value={className}
              onChange={ChangeClassNameHandler}
            />
          ) : null}
        </StyledBox>
      </SwipeableDrawer>
      {editor}
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
