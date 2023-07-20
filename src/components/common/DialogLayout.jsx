import { Dialog, DialogTitle, ToggleButton } from "@mui/material";
import React, { useState } from "react";

function DialogLayout(props) {

  const [show, setShow] = useState(true);
  const close = () => {
    setShow(false);
  };

  

  return (
    <Dialog open={show} close={close}>
      <center>
        <DialogTitle>{props.title}</DialogTitle>
        <p style={{marginLeft:"30px",marginRight:"30px",marginBottom:"20px"}}>{props.content}</p>
      </center>
      <ToggleButton onClick={close}>
        {props.buttonText}
      </ToggleButton>
    </Dialog>
  );
}

export default DialogLayout;
