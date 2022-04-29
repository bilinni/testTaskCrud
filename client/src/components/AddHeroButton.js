import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Add from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import HeroForm from "./CreateHeroForm";


export default function AddHeroButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <IconButton
          onClick={() => setOpen(true)}
          aria-label="fingerprint"
          variant="outlined"
          size="large"
          sx={{
            backgroundColor: "#A9A7A6",
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
        >
          <Add fontSize="inherit" />
        </IconButton>

        <Modal
          open={open}
          onBackdropClick={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <HeroForm setOpen={setOpen}/>
          </Box>
        </Modal>
      </div>
    </>
  );
}

