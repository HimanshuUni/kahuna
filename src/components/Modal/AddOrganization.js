import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4,
};

export default function AddOrganization({ open, setOpen }) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Organization
        </Typography>

        <TextField
          id="outlined-basic"
          style={{ marginBottom: '30px'}}
          size="small"
          fullWidth
          margin="normal"
          label="Enter Name"
          variant="outlined"
        />
        <ul style={{ display: "table-row" }}>
          <li style={{ listStyleType: "none" }}>
            You will be able to:
            <ul>
              <li>Create your own processes and workflows</li>
              <li>Assign tasks and collaborate with your team</li>
            </ul>
          </li>
        </ul>

        <ButtonGroup
        style={{marginTop: '30px'}}
        fullWidth
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button variant='outlined' onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Add Organization</Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
}
