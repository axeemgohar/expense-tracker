import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = (props) => {
  //Sending False To Parent To Close Toast
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.onCloseToast(false);
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Expense Added Successfully!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Toast;
