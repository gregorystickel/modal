import * as React from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRef } from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TestModal = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userNameRef = useRef("");
  const passwordRef = useRef("");
  
  const submitHandler = () => {
    console.log("Refs",userNameRef.current.value, passwordRef.current.value);
  }

  return(
  <div>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <Typography id="modal-modal-description" variant="span" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Username" variant="outlined" inputRef={userNameRef}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" inputRef={passwordRef}/>
            <Button onClick={submitHandler}>Submit</Button>
        </Typography>
      </Box>
    </Modal>
  </div>
  )
};

export default TestModal;
