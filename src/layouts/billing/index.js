import React from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import BaseLayout from "layouts/billing/components/BaseLayout";
import { useNFC } from "./useNFC";
import ArgonTypography from "components/ArgonTypography";
import NfcIcon from "@mui/icons-material/Nfc";

function Billing() {
  const {
    isScanning,
    startNFCScan,
    modalOpen,
    setModalOpen,
    error,
    isNFCSupported,
  } = useNFC();

  return (
    <BaseLayout stickyNavbar>
      <ArgonBox mt={24}>
        <ArgonBox mb={3}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <NfcIcon
                fontSize="large"
                sx={{ fontSize: 100, display: "block", margin: "auto" }}
              />
              {isNFCSupported ? (
                <ArgonButton
                  color="info"
                  variant="outlined"
                  onClick={startNFCScan}
                  fullWidth
                  style={{ marginTop: "10px" }}
                >
                  Scan NFC Tag
                </ArgonButton>
              ) : (
                <ArgonTypography
                  variant="h2"
                  fontWeight="medium"
                  style={{
                    color: "red",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  此設備不支援 NFC。 請使用與 Google Chrome 相容的 Android
                  裝置。
                </ArgonTypography>
              )}
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ArgonBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isScanning ? "Scanning..." : "Scan complete or failed."}
          </Typography>
          {isScanning ? (
            <CircularProgress />
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {error || "Scan complete."}
            </Typography>
          )}
        </ArgonBox>
      </Modal>
    </BaseLayout>
  );
}

export default Billing;
